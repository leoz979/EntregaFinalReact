import React from "react";
import {useState} from "react";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {db} from '../FireBase/Firebase'
import { collection, getDocs } from "firebase/firestore";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function ItemListContainer(){
    console.log("inicia pagina")
    const mensaje =(mensaje) =>{
        toast(mensaje, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            style: {
                background: "linear-gradient(to right, #581845, #ff5733)",
                color:"#fff"   
                }
            });
       
    }
    const[productos, setProductos] = useState([]);
    
    React.useEffect(() => {
    
        const itemsCollection = collection(db, 'Items');
        getDocs(itemsCollection)
          .then((productos) => {
            if (productos.length === 0) {
             console.log("No hay productos");
            }
    
            setProductos(
              productos.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
            );
          })
          .catch((error) => mensaje("No fue posible obtener la informacion " + error))
      }, []);
    
    return(
        <div>
        <Container fluid>
            { <Row>
               {productos.map(p => <ItemList key={p.id}  image={p.imgUrl} nombre={p.nombre} genero={p.genero} pId={p.id} />)}
              
            </Row> }
        </Container>
        <ToastContainer/>
        </div>
    )
}
export default ItemListContainer;