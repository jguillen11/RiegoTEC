import Card from 'react-bootstrap/Card';
import SensorPieChart from './SensorPieChart';
import { PieChart, Pie, Cell, Legend } from 'recharts';

function Cards({ header = '' }) {
    // Datos base para los sensores
    const sensorData = {
        humedad: { name: 'Humedad', value: 68, color: '#0088FE' },
        temperatura: { name: 'Temperatura', value: 42, color: '#FF8042' },
        luz: { name: 'Luz', value: 80, color: '#FFBB28' },
    };

    if (header !== 'Datos generales') {
        const { name, value, color } =
            sensorData[
            header === 'Datos de humedad'
                ? 'humedad'
                : header === 'Datos de temperatura'
                    ? 'temperatura'
                    : 'luz'
            ];

        return (
            <Card>
                <Card.Header as="h4">{header}</Card.Header>
                <Card.Body
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SensorPieChart title={name} value={value} color={color} />
                </Card.Body>
            </Card>
        );
    }

    const generalData = Object.values(sensorData);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={14}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Card>
            <Card.Header as="h4">{header}</Card.Header>
            <Card.Body
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <PieChart width={220} height={232}>
                    <Pie
                        data={generalData}
                        dataKey="value"
                        innerRadius="60%"
                        outerRadius="100%"
                        paddingAngle={3}
                        startAngle={90}
                        endAngle={-270}
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {generalData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </Card.Body>
        </Card>
    );
}

export default Cards;
