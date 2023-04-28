import React from 'react';
import {  getOrdenCompra,createOrdenCompra } from '../FireBase/Firebase';
import { useCartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
    const {totalPrice, emptyCart, cart} = useCartContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

                
        createOrdenCompra(cliente,totalPrice(), new Date().toISOString(), cart).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
                console.error(error)
            })
            
        })
        
    }

    return (
        <div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label><br></br>
                    <input type="text" className="inputForm" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label><br></br>
                    <input type="email" className="inputForm" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label><br></br>
                    <input type="number" className="inputForm" name="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label><br></br>
                    <input type="text" className="inputForm" name="address" />
                </div>
                <Button variant="warning" type="submit" className="btn btn-primary">Finalizar Compra</Button>
            </form>

        </div>
    );
}

export default Checkout;