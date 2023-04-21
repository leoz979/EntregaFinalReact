import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemListContainerEstrellas from './components/ItemListContainerEstrellas';
import ItemListContainerEstreno from './components/ItemListContainerEstreno';
import ItemListContainerGenero from './components/ItemListContainerGenero';
import Cart from './components/Cart';
import Itemid from './components/Itemid';
import { CartProvider } from './context/CartContext';


import Error from './components/Error';

function App() {
  return (
    <div classNameName="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/genero/:genero"} element={<ItemListContainerGenero />} />
            <Route path={"/calificacion/:calificacion"} element={<ItemListContainerEstrellas />} />
            <Route path={"/estreno/:estreno"} element={<ItemListContainerEstreno />} />
            <Route path={"/id/:detalleId"} element={<Itemid />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' exact element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;