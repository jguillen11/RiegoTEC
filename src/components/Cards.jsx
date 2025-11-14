import SensorPieChart from './SensorPieChart';

function Cards({ header = '' }) {
    const sensorData = {
        humedad: {value: 35, color: '#0088FE' },
        luz: {value: 65, color: '#fff128ff' },
    };

    const headerMap = {
        'Datos de humedad': 'humedad',
        'Datos de luz': 'luz',
    };

    const sensorKey = headerMap[header] || 'luz';
    const { value, color } = sensorData[sensorKey];

    return (
        <>
            <div className="flex flex-col h-full p-1">
                <div className="bg-white shadow-xl rounded-xl h-full flex flex-col transition-all duration-300">

                    <header className="p-1 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-800 text-center">
                            {header}
                        </h2>
                    </header>

                    <div className="flex-grow flex flex-col justify-center items-center p-3">
                        <SensorPieChart value={value} color={color} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
