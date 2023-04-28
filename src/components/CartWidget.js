import carroImg from '../images/carrito.png';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'

function Carrito() {
    const navegar = useNavigate();
    const {totalProducts} = useCartContext();
   
    return (

        <a className="cart" target="_blank" rel="nofollow"><button type="button" id="verCarrito" className="btn btn-outline-primary" onClick={() => navegar(`/Cart`)}>
            <img src={carroImg} height="25" width="50" alt="Carrito.png" /> </button>
            <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{totalProducts()}</span>
        </a>
    )
}

export default Carrito;