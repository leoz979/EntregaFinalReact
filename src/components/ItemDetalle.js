import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Counter from './ItemCount';
import {useCartContext} from '../context/CartContext'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";

function ItemDetalle({ data }) {
    
    const navigate = useNavigate();
    const {addProduct} = useCartContext();
   
    const mensaje =(mensaje) =>{
        toast(mensaje, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            style: {
                background: "linear-gradient(to right, #581845, #ff5733)",
                color:"#fff"   
                }
            });
       
    }

    const onAdd =(quantity)=>{
       // setGoToCart(true);
        addProduct(data,quantity);
        mensaje("Se agrego " + quantity + " elemento al carro " )
        navigate("/");
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
                        <Counter stock={5} initial={1} onAdd={onAdd}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemDetalle