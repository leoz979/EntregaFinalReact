import carroImg from '../images/carrito.png';
import { CartContext } from '../context/CartContext';
import { useContext } from "react";

function Carrito() {
    const {items} = useContext(CartContext)
    
    return (

        <a class="cart" target="_blank" rel="nofollow"><button type="button" id="verCarrito" class="btn btn-outline-primary">
            <img src={carroImg} height="25" width="50" alt="Carrito.png" /> </button>
            <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">{items}</span>
        </a>
    )
}

export default Carrito;