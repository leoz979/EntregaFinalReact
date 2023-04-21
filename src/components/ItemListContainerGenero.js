import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainerGenero() {

  const [data, setData] = useState([]);
  const { genero } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Items');

    if (genero) {
      const queryFilter = query(queryCollection, where('genero', '==', genero))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    }
  }, [genero])

  return (
    <Container fluid>
      {<Row>
        {data.map(p => <ItemList key={p.id} image={p.imgUrl} nombre={p.nombre} genero={p.genero} pId={p.id}/>)}
      </Row>}
    </Container>

  )
}

export default ItemListContainerGenero
