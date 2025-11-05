import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Brand() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <h1>RIEGO-TEC</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Brand;