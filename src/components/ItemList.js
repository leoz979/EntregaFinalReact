
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function ItemList({image, nombre, genero, pId}) {
    const navegar = useNavigate();

    return (
        <Col lg={3}>
            <Card className='contenedorCard'>
                <Card.Img variant="top" src={image} className="imagenP" />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        <p>Genero: {genero}</p>
                    </Card.Text>
                    <Button variant="warning" onClick={() => navegar(`/id/${pId}`)}>Leer mas...</Button>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemList
