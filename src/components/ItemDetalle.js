
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Counter from './Counter';
import {useCartContext} from '../context/CartContext'

function ItemDetalle({ data }) {
    console.log("Detalle peli")
    const {addItem} = useCartContext();
    const onAdd =(quantity)=>{
        //setGoToCart(true);
        addItem(data,quantity);
      }
    return (
        <Col lg={3}>
            <Card >
                <Card.Img variant="top" src={data.imgUrl} />
                <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>
                    <Card.Text>
                        <p>Genero: {data.genero}</p>
                        <p>Precio: $ {data.precio}</p>
                        <p>Calificacion: {'★'.repeat(data.calificacion).padEnd(5, "☆")} </p>
                        <Counter stock={5}  onAdd={onAdd}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemDetalle