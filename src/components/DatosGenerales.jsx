import Card from 'react-bootstrap/Card';
import RadarChartExample from './RadarChartExample';

function DatosGenerales() {

    return (
        <Card className="shadow-sm">
            <Card.Header as="h5" className="text-center">Datos generales</Card.Header>
            <Card.Body
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                }}
            >
                <RadarChartExample/>
            </Card.Body>
        </Card>
    );
}

export default DatosGenerales;
