import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../imagenes/logo.png'

function Formpagusuarios() {

    const navigate = useNavigate() 

    function btnSalir() {
        
        navigate('/')

    }

  return (
    <div>

            <div className='titulos'>
                <h1>Book App</h1>
                <h3>Pagina web de intercambio de libros</h3>
            </div>   
            <nav className='navbar'>
                    <div>
                    <img className='imglogo' src={logo} alt="..." />
                    </div>
                   <div>    
                    <li>Inicio</li>
                    </div> 
                    <div> 
                    <li>Libros</li>
                    </div> 
                    <div>
                    <li>Contáctanos</li>
                    </div>
                    <div>
                    <li>Acerca de</li>
                    </div>
                    <div>
                    <li><button className='btn' onClick={btnSalir}>Salir</button></li>
                    </div>  
    
            </nav> 

    </div>
  )
}

export default Formpagusuarios