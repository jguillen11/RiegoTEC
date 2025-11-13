import Card from 'react-bootstrap/Card';

function ThermometerChart() {
    const value = 45;
    const clampedValue = Math.min(Math.max(value, 0), 100);

    return (
        <Card className="shadow-sm h-100">
            <Card.Header as="h5" className="text-center">
                Datos de temperatura
            </Card.Header>
            <Card.Body
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '1rem 0',
                }}
            >
                <div style={{ textAlign: 'center'}}>
                    <div
                        style={{
                            width: '50px',
                            height: '140px',
                            border: '2px solid #555',
                            borderRadius: 'none',
                            margin: '0 auto',
                            position: 'relative',
                            background: '#f5f2f2ff',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: `${clampedValue}%`,
                                background: 'linear-gradient(to top, #ff4500, #ffb347)',
                                borderBottomLeftRadius: '30px',
                                borderBottomRightRadius: '30px',
                                transition: 'height 0.5s ease',
                            }}
                        ></div>

                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-18px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '55px',
                                height: '55px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle at 30% 30%, #ff4500, #ff2e00)',
                                border: '2px solid #555',
                            }}
                        ></div>
                    </div>

                    <p
                        style={{
                            marginTop: '25px',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            color: '#333',
                        }}
                    >
                        {clampedValue}°C
                    </p>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ThermometerChart;
