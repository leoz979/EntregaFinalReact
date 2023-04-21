import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { createContext } from 'react';
import Carrito from './CartWidget';
import '../Estilo/style.css'


function NavBar() {

  return (
    <div className='container contenedorNavbar'>
      <div className='btn-group'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
          <Link to="/" className='nav-link active'>Home</Link>
          
          <NavDropdown title="Genero" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"genero/INFANTIL"} className='nav-link active'>Infantil</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"genero/COMEDIA"} className='nav-link active'>Comedia</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="genero/ACCION" className='nav-link active'>Accion</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="genero/TERROR" className='nav-link active'>Terror</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="genero/FICCION" className='nav-link active'>Ficcion</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="genero/DRAMA" className='nav-link active'>Drama</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="genero/SUSPENSO" className='nav-link active'>Suspenso</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Calificacion" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="calificacion/1" className='nav-link active'>1 Estrella</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="calificacion/2" className='nav-link active'>2 Estrellas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="calificacion/3" className='nav-link active'>3 Estrellas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="calificacion/4" className='nav-link active'>4 Estrellas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="calificacion/5" className='nav-link active'>5 Estrellas</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            <Link to="estreno/true" className='nav-link active'>Estrenos</Link>
            
          <div className='nav-item'>
            <Carrito/>
          </div>
        </nav>
      </div>
      <hr/>
      
    </div>
  )
}

export default NavBar;