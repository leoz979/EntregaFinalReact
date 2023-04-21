import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainerEstrellas() {

    const [data, setData] = useState([]);
    const { calificacion } = useParams();

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'Items');
        if (calificacion) {
            const queryFilter = query(queryCollection, where('calificacion', '==', parseInt(calificacion)))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
        }
    }, [calificacion])

    return (
        <Container fluid>
            {<Row>
                {data.map(p => <ItemList key={p.id} image={p.imgUrl} nombre={p.nombre} genero={p.genero} pId={p.id}/>)}
            </Row>}
        </Container>

    )
}

export default ItemListContainerEstrellas