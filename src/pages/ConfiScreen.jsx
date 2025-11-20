import { db } from "../../DB/FBConect";
import { ref, onValue, update } from "firebase/database"; // Importamos 'update'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para el botón de volver

function ConfigScreen() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Para mostrar estado de carga al guardar

    const [configData, setConfigData] = useState({
        duracionRiego: 0,
        humedadMaxima: 0,
        humedadMinima: 0,
        luzMaxima: 0,
        luzMinima: 0,
        regarSoloDeDia: true,
        riegoAutomatico: true,
        temperaturaMaxima: 0,
        temperaturaMinima: 0,
    });

    // Lectura de datos (Tu código original)
    useEffect(() => {
        const configRef = ref(db, "configuracion");
        onValue(configRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setConfigData({
                    duracionRiego: data.duracionRiego || 0,
                    humedadMaxima: data.humedadMaxima || 80,
                    humedadMinima: data.humedadMinima || 40,
                    luzMaxima: data.luzMaxima || 80,
                    luzMinima: data.luzMinima || 20,
                    regarSoloDeDia: data.regarSoloDeDia ?? true,
                    riegoAutomatico: data.riegoAutomatico ?? true,
                    temperaturaMaxima: data.temperaturaMaxima || 60,
                    temperaturaMinima: data.temperaturaMinima || 25,
                });
            }
        });
    }, []);

    // Manejar cambios en los Inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setConfigData(prev => ({
            ...prev,
            // Si es checkbox usa 'checked', si es numero conviértelo con Number(), sino usa value normal
            [name]: type === 'checkbox' ? checked : Number(value)
        }));
    };

    // Guardar cambios en Firebase
    const handleSave = () => {
        setLoading(true);
        const configRef = ref(db, "configuracion");

        update(configRef, configData)
            .then(() => {
                alert("✅ Configuración guardada con éxito");
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al guardar:", error);
                alert("❌ Error al guardar");
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Encabezado */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">Configuración del Sistema</h1>
                        <p className="text-slate-500 mt-1">Ajusta los umbrales y modos de operación de RiegoTEC.</p>
                    </div>
                    <button
                        onClick={() => navigate('/home')} // Vuelve atrás
                        className="text-slate-500 hover:text-slate-700 font-medium"
                    >
                        Cancelar / Volver
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* PANEL IZQUIERDO: MODOS DE OPERACIÓN */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                                ⚙️ Modos de Riego
                            </h2>

                            {/* Toggle Riego Automático */}
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-sm font-medium text-slate-600">Riego Automático</label>
                                <input
                                    type="checkbox"
                                    name="riegoAutomatico"
                                    checked={configData.riegoAutomatico}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                />
                            </div>

                            {/* Toggle Solo de Día */}
                            <div className="flex items-center justify-between mb-6">
                                <label className="text-sm font-medium text-slate-600">Solo regar de día</label>
                                <input
                                    type="checkbox"
                                    name="regarSoloDeDia"
                                    checked={configData.regarSoloDeDia}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
                                />
                            </div>

                            <hr className="border-slate-100 my-4" />

                            {/* Duración del Riego */}
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-1">
                                    Duración Riego (ms)
                                </label>
                                <input
                                    type="number"
                                    name="duracionRiego"
                                    value={configData.duracionRiego}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                                />
                                <p className="text-xs text-slate-400 mt-1">1000 ms = 1 segundo</p>
                            </div>
                        </div>

                        {/* BOTÓN GUARDAR (Móvil y Desktop) */}
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-xl font-bold text-white shadow-lg transition-all transform active:scale-95 ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 hover:shadow-green-600/30'
                                }`}
                        >
                            {loading ? 'Guardando...' : 'Guardar Cambios'}
                        </button>
                    </div>

                    {/* PANEL DERECHO: UMBRALES */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Tarjeta Humedad */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                                💧 Umbrales de Humedad (%)
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mínima</label>
                                    <input
                                        type="number" name="humedadMinima"
                                        value={configData.humedadMinima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition font-mono"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Máxima</label>
                                    <input
                                        type="number" name="humedadMaxima"
                                        value={configData.humedadMaxima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Temperatura */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-orange-500 mb-4 flex items-center gap-2">
                                🌡️ Umbrales de Temperatura (°C)
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mínima</label>
                                    <input
                                        type="number" name="temperaturaMinima"
                                        value={configData.temperaturaMinima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 transition font-mono"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Máxima</label>
                                    <input
                                        type="number" name="temperaturaMaxima"
                                        value={configData.temperaturaMaxima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-orange-500 transition font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Luz */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-lg font-bold text-yellow-500 mb-4 flex items-center gap-2">
                                ☀️ Umbrales de Luz
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mínima</label>
                                    <input
                                        type="number" name="luzMinima"
                                        value={configData.luzMinima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-yellow-500 transition font-mono"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Máxima</label>
                                    <input
                                        type="number" name="luzMaxima"
                                        value={configData.luzMaxima} onChange={handleChange}
                                        className="w-full p-3 bg-slate-50 border-transparent rounded-lg focus:bg-white focus:ring-2 focus:ring-yellow-500 transition font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigScreen;