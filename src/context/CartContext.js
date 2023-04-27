import { createContext, useState } from "react"

export const CartContext = createContext(0)

export const useCartContext = () => useCartContext(CartContext)

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = () => {setItems(items + cantidad); console.log("items :" + items)}
    const cantidadItem = (cantidadI) => {setCantidad(cantidadI); console.log("cantidad => " + cantidad) }
    const addCart = (item) => {
        setCart([...cart, {...item}])
        setTotalPrice(cantidad  * item.precio)
        console.log("ingresa Item : ",  cart)
        console.log("Precio => " , totalPrice)
    }
    const totalProducts=()=>cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);
    //const addTotal = (totalItem) => {setTotalPrice(totalItem) ; console.log("Total enviado ", totalPrice )   }

    return (
        <CartContext.Provider value={{items, cart,addItem, addCart, cantidadItem, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}