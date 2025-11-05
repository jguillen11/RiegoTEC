import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample({
    header = '',      
    title = 'Título de la tarjeta', 
    text = 'Texto de ejemplo dentro de la tarjeta.', 
}) {
    return (
        <Card>
            <Card.Header as="h5">{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderStyledExample;