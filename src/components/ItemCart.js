import React from 'react'
import Col from 'react-bootstrap/Col';
import { useCartContext } from '../context/CartContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemCart({ product }) {
  const { removeProduct } = useCartContext();
  return (
    <div className='itemcart'>
      <Col lg={3}>
      <img src={product.imgUrl} alt={product.nombre} />
      <div>
      
        <Card >
          <p>Titulo: {product.nombre} </p>
          <p>Cantidad: {product.quantity} </p>
          <p>Precio u.: {product.precio} </p>
          <p>Subtotal: $ {(product.quantity) * (product.precio)} </p>
          <Button onClick={() => removeProduct(product.id)}>Eliminar</Button>
        </Card>
      </div>
      </Col>
    </div>
  )
}

export default ItemCart