import SensorPieChart from './SensorPieChart';

function SensorDashboard() {
    const humedad = 68;
    const temperatura = 42;
    const luz = 80;

    const promedio = Math.round((humedad + temperatura + luz) / 3);

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '2rem',
            }}
        >
            <SensorPieChart title="Humedad" value={humedad} color="#00C49F" />
            <SensorPieChart title="Temperatura" value={temperatura} color="#FF8042" />
            <SensorPieChart title="Sensor de Luz" value={luz} color="#0088FE" />
            <SensorPieChart title="General" value={promedio} color="#FFBB28" />
        </div>
    );
}

export default SensorDashboard;
