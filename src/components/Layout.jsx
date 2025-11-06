import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from '../components/Cards'

function AutoLayoutExample() {
    return (
        <Container style={{marginTop: '0.5rem'}}>
            <Row style={{gap:'1', marginBottom: '1rem'}}>
                <Col>
                    <Cards header='Datos de humedad'/>
                </Col>
                <Col>
                    <Cards header='Datos de temperatura'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Cards header='Datos de luz'/>
                </Col>
                <Col>
                    <Cards header='Datos generales'/>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;