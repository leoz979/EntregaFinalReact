import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';

export const AddBtn = () =>{
    const {addItem} = useContext(CartContext)
    return <Button onClick={addItem}>Agregar</Button>
}