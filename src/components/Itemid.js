import React from "react";
import { useState, useEffect } from "react";
import ItemDetalle from "./ItemDetalle";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../FireBase/Firebase'


function Itemid() {
    const { detalleId } = useParams();
    const [data, setData] = useState({});
    
    useEffect(() => {
       
        const docRef = doc(db, "Items", detalleId);
        getDoc(docRef)
          .then((producto) => {
            setData({ id: producto.id, ...producto.data()});
          })
          .catch((err) => console.log("Error consulta: "+ err));
      }, [detalleId]);

      
    return (
        <Container fluid className="contenedorPelicula">
            {<Row>
                <ItemDetalle data = {data} />
            </Row>}
        </Container>
    )
}

export default Itemid