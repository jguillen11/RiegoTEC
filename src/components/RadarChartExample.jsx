import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, Legend, PolarGrid, ResponsiveContainer } from 'recharts';

export const RadarChartExample = ({ data, isAnimationActive = true }) => (
    <div style={{ width: '100%', maxWidth: 500, height: 215 }}>
        <ResponsiveContainer >
            <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="factor" />
                <PolarRadiusAxis angle={35} domain={[0, 100]} />
                <Radar
                    name='Porcentaje'
                    dataKey="valor"
                    stroke="#2fe173ff"
                    fill="#2fe173ff"
                    fillOpacity={0.6}
                    isAnimationActive={isAnimationActive}
                />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    </div>
);

export default RadarChartExample;
