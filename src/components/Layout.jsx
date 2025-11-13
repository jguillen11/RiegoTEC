import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../components/Cards'
import DatosGenerales from './DatosGenerales';
import TypesExample from './TypesExample'
import ThermometerChart from './ThermometerChart';


function AutoLayoutExample() {
    return (
        <Container className="mt-3">
            <Row className="text-center mb-3">
                <Col className="grid grid-cols-4 gap-4">
                    <TypesExample text='Boton1'/>
                    <TypesExample text='Boton2'/>
                    <TypesExample text='Boton3'/>
                    <TypesExample text='Boton4'/>
                </Col>
            </Row>
            <Row className="g-3 mb-3">
                <Col md={6} lg={6}>
                    <Cards header='Datos de humedad'/>
                </Col >
                <Col md={6} lg={6}>
                    <ThermometerChart/>
                </Col>
                
            </Row>
            <Row className="g-3">
                <Col md={6} lg={6}>
                    <Cards header='Datos de luz'/>
                </Col>
                <Col md={6} lg={6}>
                    <DatosGenerales/>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;