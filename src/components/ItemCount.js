import {useState} from 'react'
import Button from 'react-bootstrap/Button';

function ItemCount({stock,initial, onAdd}) {
    const[counter, setCounter] = useState(initial)

    const restar=()=>{
        setCounter(counter - 1);
    }
    const sumar=()=>{
        setCounter(counter + 1);
    }



  return (
    <div className='counter'>
        <Button variant="warning" className='resta' disabled={counter<1} onClick={restar}>-</Button>
        <span>
            {counter}
        </span>
        <Button variant="warning" className='suma' disabled={counter>= stock} onClick={sumar}>+</Button>
         <div>
         <Button  className='agregarCarrito' disabled={stock<=0} onClick={()=> onAdd(counter)}>Agregar al carrito</Button>
         </div>
    </div>
  )
}

export default ItemCount;