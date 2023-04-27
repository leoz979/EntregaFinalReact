import React from 'react'
import { CartContext } from "../context/CartContext";

function ItemCart(pelicula, quantity) {
  // const {removepelicula} = useCartContext();
  console.log("Item cart")
  return (
    <div >
      <img src={pelicula.imUrl} alt={pelicula.nombre} />
      <div>
        <p>Titulo: {pelicula.nombre} </p>
        <p>Cantidad: {quantity} </p>
        <p>Precio u.: {pelicula.precio} </p>
        <p>Subtotal: $ {(quantity) * (pelicula.precio)} </p>
        {/* <button onClick={()=> removepelicula(pelicula.id)}>Eliminar</button> */}

      </div>
    </div>
  )

}

export default ItemCart