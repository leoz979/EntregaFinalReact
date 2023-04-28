import React from 'react'
import { useCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import Button from 'react-bootstrap/Button';

function Cart() {
  const {cart, totalPrice} = useCartContext();


  if (cart.length ===0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compra</Link>
      </>
    );
  }

  return (
    <>
    {cart.map(product =><ItemCart key={product.id} product={product}/>)
    }
    <p className='Pmensaje'> total:$ {totalPrice()} </p>
    <Button variant="warning"><Link  className="nav-link" to={'/checkout'}>Finalizar Compra</Link></Button>
    <div>.</div>
    </>
  )
}

export default Cart