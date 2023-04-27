import React from 'react'
import ItemCart from "../components/ItemCart"
import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import {useState} from 'react';

import { useCartContext } from '../context/CartContext'

function Cart() {
  console.log("ingresa a cart")

    const {cart, totalPrice,cantidad} = useContext(CartContext);
    console.log("cart.length", cart)
  
    const handleClick = ()=>{
     }

  if (cart.length ===0){
    return(
      <>
      <span>No hay elementos en el carrito</span>
      {/* <Link to='/'>Hacer compra</Link> */}
      </>
    );
  }

  return (
     <><h3>ESTE ES EL CARRO</h3>
     {cart.map(product => <ItemCart key={product.id} pelicula={product} quantity={cantidad} />)}
     <span> total:$ {totalPrice} </span>
     <button onClick={handleClick}>Generar orden de compra</button> 
     </>
   )
}

export default Cart