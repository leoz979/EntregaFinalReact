import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { useCartContext } from '../context/CartContext'

function Counter({ stock, onAdd }) {
    const [counter, setCounter] = useState(0)
    const {cantidadItem} =  useCartContext();//useContext(CartContext);
    //const {addItem} = useContext(CartContext)
    const {addItem,addCart, addTotal} =  useCartContext();//useContext(CartContext)

    const validarCero = () => {
        if (counter < 1) return false
        return true
    }
    const validarStock = () => {
        if (counter >= stock) return false
        return true
    }

    const decrementar = () => {
        if (validarCero()) {
            setCounter(counter - 1)
            cantidadItem(counter - 1)
        }
    }
    const incrementar = () => {
        if (validarStock()) {
            setCounter(counter + 1)
            console.log("Boton + :" + counter)
            cantidadItem(counter + 1)
        }
    }

    // const addCarrito = () => {
    //     addItem()
    //     addCart(data)
    //     //addTotal(data.precio * counter)
    // }
   
    

    return (
        <div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-2">
                    <Button variant="warning" onClick={decrementar}>-</Button>
                </div>
                <div className="col-1">
                    <p>{counter}</p>
                </div>
                <div className="col-2">
                    <Button variant="warning" onClick={incrementar}>+</Button>
                </div>

            </div>
            <Button onClick={()=> onAdd(counter)}>Agregar</Button>
        </div>
    )
}

export default Counter