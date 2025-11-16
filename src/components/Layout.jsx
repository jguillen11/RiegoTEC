import Header from './Header';
import Cards from '../components/Cards';
import DatosGenerales from './DatosGenerales';
import TypesExample from './TypesExample';
import ThermometerChart from './ThermometerChart';
import ToggleRiego from './ToggleRiego';

import { db } from "../../DB/FBConect";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

function AutoLayoutExample() {

    const [sensores, setSensores] = useState({
        humedad: 0,
        luz: 0,
        temperatura: 0,
        esDeDia: false,
    });

    useEffect(() => {
        const sensoresRef = ref(db, "sensores");

        onValue(sensoresRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSensores({
                    humedad: parseInt(data.humedad) || 0,
                    luz: parseInt(data.luz) || 0,
                    temperatura: Number(parseFloat(data.temperatura).toFixed(1)),
                    esDeDia: data.esDeDia ?? false,
                    ultimaActualizacion: data.ultimaActualizacion || "",
                });
            }
        });

    }, []);

    return (
        <>
            <Header />
            <main className='max-w-7xl mx-auto px-4 py-3 md:px-6'>

                <div className="text-center mb-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
                        <ToggleRiego />
                        <TypesExample text='Actualizar información' />
                        <TypesExample text='Reiniciar' />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">

                    <div>
                        <Cards
                            header='Datos de humedad'
                            value={sensores.humedad}
                            color="#0088FE"
                        />
                    </div>

                    <div>
                        <ThermometerChart
                            temperatura={sensores.temperatura}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <Cards
                            header='Datos de luz'
                            value={sensores.luz}
                            color="#fff128ff"
                        />
                    </div>

                    <div>
                        <DatosGenerales
                            humedad={sensores.humedad}
                            temperatura={sensores.temperatura}
                            luz={sensores.luz}
                            esDeDia={sensores.esDeDia}
                            ultimaActualizacion={sensores.ultimaActualizacion}
                        />

                    </div>
                </div>
            </main>
        </>
    );
}

export default AutoLayoutExample;
