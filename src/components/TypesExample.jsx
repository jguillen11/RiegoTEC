import Button from 'react-bootstrap/Button';

function TypesExample({ text = '' }) {
    return (
        <>
            <Button variant="success">{text}</Button>
        </>
    );
}

export default TypesExample;