import { PieChart, Pie, Cell } from 'recharts';

function SensorPieChart({ title, value, color }) {
    const data = [
        { name: title, value },
        { name: 'Resto', value: 100 - value },
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h5 style={{ marginBottom: '10px' }}>{title}</h5>
            <PieChart width={180} height={180}>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="90%"
                    outerRadius="100%"
                    paddingAngle={3}
                    cornerRadius={50}
                    startAngle={90}
                    endAngle={-270}
                >
                    <Cell fill={color} />
                    <Cell fill="#e0e0e0" />
                </Pie>

                {/* Texto centrado */}
                <text
                    x={90}
                    y={90}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fill: '#333',
                    }}
                >
                    {value}%
                </text>
            </PieChart>
        </div>
    );
}

export default SensorPieChart;
