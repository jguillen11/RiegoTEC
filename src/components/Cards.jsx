import Card from 'react-bootstrap/Card';
import SensorPieChart from './SensorPieChart';

function Cards({ header = '' }) {
    const sensorData = {
        humedad: { name: 'Humedad', value: 68, color: '#0088FE' },
        temperatura: { name: 'Temperatura', value: 42, color: '#FF8042' },
        luz: { name: 'Luz', value: 80, color: '#FFBB28' },
    };

    const headerMap = {
        'Datos de humedad': 'humedad',
        'Datos de temperatura': 'temperatura',
        'Datos de luz': 'luz',
    };

    const sensorKey = headerMap[header] || 'luz';
    const { name, value, color } = sensorData[sensorKey];

    return (
        <Card className="shadow-sm">
            <Card.Header as="h5" className="text-center">
                {header}
            </Card.Header>
            <Card.Body className="d-flex justify-content-center align-items-center">
                <SensorPieChart title={name} value={value} color={color} />
            </Card.Body>
        </Card>
    );
}

export default Cards;
