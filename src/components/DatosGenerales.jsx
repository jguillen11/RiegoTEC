import RadarChartExample from './RadarChartExample';

function DatosGenerales() {

    return (
        <>
            <div className="flex flex-col h-full p-1">
                <div className="bg-white shadow-xl rounded-xl h-full flex flex-col transition-all duration-300">

                    <header className="p-3 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">
                            Datos generales
                        </h2>
                    </header>

                    <div className="flex-grow flex flex-col justify-center items-center p-3">
                        <RadarChartExample />

                    </div>
                </div>
            </div>
        </>
    );
}

export default DatosGenerales;
