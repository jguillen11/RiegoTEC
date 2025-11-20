import { useEffect, useState } from "react";
import { db } from "../../DB/FBConect";
import { ref, onValue } from "firebase/database";

function HistoricoPage() {

    const formatearFechaBonita = (raw) => {
        const fecha = convertirFecha(raw);
        if (!fecha) return raw;

        const dia = fecha.getDate().toString().padStart(2, "0");
        const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
        const año = fecha.getFullYear();

        const horas = fecha.getHours().toString().padStart(2, "0");
        const minutos = fecha.getMinutes().toString().padStart(2, "0");

        return `${dia}/${mes}/${año} ${horas}:${minutos}`;
    };

    const [historico, setHistorico] = useState([]);

    const convertirFecha = (raw) => {
        if (!raw) return null;

        const [fecha, hora] = raw.split("_");
        const [dia, mes, año] = fecha.split("-");
        const horaReal = hora.replaceAll("-", ":");

        return new Date(`${año}-${mes}-${dia}T${horaReal}`);
    };

    useEffect(() => {
        const historicoRef = ref(db, "historico");

        onValue(historicoRef, (snapshot) => {
            const data = snapshot.val();
            if (!data) return;

            const arr = [];

            Object.entries(data).forEach(([clave1, subniveles]) => {
                Object.entries(subniveles).forEach(([clave2, valores]) => {

                    const fechaJS = convertirFecha(valores.timestamp);

                    arr.push({
                        fechaJS,
                        fechaTexto: valores.timestamp,
                        humedad: valores.humedad,
                        luz: valores.luz,
                        temperatura: valores.temperatura,
                    });
                });
            });

            // 🔥 Filtrar últimos 4 días
            const hoy = new Date();
            const hace4 = new Date(hoy);
            hace4.setDate(hoy.getDate() - 4);

            const filtrados = arr.filter(item =>
                item.fechaJS && item.fechaJS >= hace4
            );

            // 🔥 Nuevo: agrupar por hora para obtener SOLO 1 registro por hora
            const porHora = {};

            filtrados.forEach(item => {
                const fecha = item.fechaJS;
                const keyHora = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}_${fecha.getHours()}`;

                // Solo guardar el PRIMER registro de esa hora
                if (!porHora[keyHora]) {
                    porHora[keyHora] = item;
                }
            });

            // Convertir objeto → lista
            const listaFinal = Object.values(porHora);

            // Ordenar más nuevos primero
            listaFinal.sort((a, b) => b.fechaJS - a.fechaJS);

            setHistorico(listaFinal);
        });
    }, []);


    return (
        <div className="bg-white p-5 rounded-xl shadow-lg mt-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Historial (1 registro por hora)
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="py-3 px-4 font-medium text-gray-700">Fecha</th>
                            <th className="py-3 px-4 font-medium text-gray-700">Humedad</th>
                            <th className="py-3 px-4 font-medium text-gray-700">Luz</th>
                            <th className="py-3 px-4 font-medium text-gray-700">Temperatura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historico.map((item, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                {/* <td className="py-2 px-4">{item.fechaTexto}</td> */}
                                <td className="py-2 px-4">{formatearFechaBonita(item.fechaTexto)}</td>

                                <td className="py-2 px-4">{item.humedad?.toFixed(2) + '%'}</td>
                                <td className="py-2 px-4">{item.luz?.toFixed(2)}</td>
                                <td className="py-2 px-4">{item.temperatura?.toFixed(2)}°C</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {historico.length === 0 && (
                <p className="text-gray-500 mt-4 text-center">
                    No hay registros en los últimos 4 días.
                </p>
            )}
        </div>
    );
}

export default HistoricoPage;
