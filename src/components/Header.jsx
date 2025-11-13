import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="success" data-bs-theme="dark">
                <Container>
                    <h1 style={{color:"white"}}>RIEGO-TEC</h1>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;