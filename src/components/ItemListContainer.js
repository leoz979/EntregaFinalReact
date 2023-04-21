import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {db} from '../FireBase/Firebase'
import { collection, getDocs } from "firebase/firestore";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function ItemListContainer(){

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
    const[peliculas, setPeliculas] = useState([]);
    useEffect(() =>{
    const getPeliculas = async () =>{
    try{
        const querySnapshot = await getDocs(collection(db, 'Items'))
        const docs =[]
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(),id:doc.id})
        })
        setPeliculas(docs)
    }catch(error){
       
       mensaje("No fue posible obtener la informacion " + error)
    }
    }
    getPeliculas()
    },[peliculas])

    
    return(
        <div>
        <Container fluid>
            { <Row>
               {peliculas.map(p => <ItemList key={p.id}  image={p.imgUrl} nombre={p.nombre} genero={p.genero} pId={p.id} />)}
              
            </Row> }
        </Container>
        <ToastContainer/>
        </div>
    )
}
export default ItemListContainer;