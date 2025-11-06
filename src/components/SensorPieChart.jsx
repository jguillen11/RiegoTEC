import { PieChart, Pie, Cell } from 'recharts';

function SensorPieChart({ title, value, color }) {
    const data = [
        { name: title, value },
        { name: 'Resto', value: 100 - value },
    ];

    return (
        <div style={{ textAlign: 'center' }}>
            <h5>{title}</h5>
            <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="70%"
                    outerRadius="100%"
                    paddingAngle={3}
                    cornerRadius={50}
                    startAngle={90}
                    endAngle={-270}
                >
                    <Cell fill={color} />
                    <Cell fill="#e0e0e0" />
                </Pie>
                <text
                    x={100}
                    y={105}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: '18px', fontWeight: 'bold' }}
                >
                    {value}%
                </text>
            </PieChart>
        </div>
    );
}

export default SensorPieChart;
