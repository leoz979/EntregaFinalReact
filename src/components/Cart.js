import React from 'react'
import { useCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
//import ItemCart from './ItemCart';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Cart() {
  const {cart, totalPrice} = useCartContext();

  // const order={
  //   buyer:{
  //     name:'Juan Perez',
  //     email:'juanperez@gmail.com',
  //     phone:'7654321',
  //     address: 'Av siempre viva 742'
  //   },
  //   items: cart.map(p=>({id: p.id, title: p.title, price: p.price, quantity: p.quantity})),
  //   total: totalPrice(),
  // }

  // const handleClick = ()=>{
  //   const db = getFirestore();
  //   const ordersCollection = collection(db, 'Orders');
  //   addDoc(ordersCollection, order)
  //   .then(({id})=>console.log(id))

  // }
  

  if (cart.length ===0){
    return(
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compra</Link>
      </>
    );
  }

  // return (
  //   <>
  //   {cart.map(product =><ItemCart key={product.id} product={product}/>)}
  //   <p> total:$ {totalPrice()} </p>
  //   <button onClick={handleClick}>Generar orden de compra</button> 
  //   </>
  // )
}

export default Cart