import carroImg from '../images/carrito.png';
import { CartContext } from '../context/CartContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

function Carrito() {
    const navegar = useNavigate();
    const {items} = useContext(CartContext)
    
    return (

        <a className="cart" target="_blank" rel="nofollow"><button type="button" id="verCarrito" className="btn btn-outline-primary" onClick={() => navegar(`/Cart`)}>
            <img src={carroImg} height="25" width="50" alt="Carrito.png" /> </button>
            <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{items}</span>
        </a>
    )
}

export default Carrito;