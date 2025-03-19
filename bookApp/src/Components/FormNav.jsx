import React from 'react'
import "../Styles/navbar.css"
import logo from '../imagenes/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function FormNav() {

    const navigate = useNavigate() 

    function btnInicio() {
        
        navigate('/login')

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
               <div className='links'>    
                <li><Link to= "/">Inicio</Link> </li>
                </div> 
                <div> 
                <li> <Link to= "/libros">Libros</Link></li>
                </div> 
                <div>
                <li> <Link to= "/contactos">Contáctanos</Link></li>
                </div>
                <div>
                <li> <Link to= "/acercade">Acerca de</Link></li>
                </div>
                <div>
                <li><button className='btn' onClick={btnInicio}>Inicio de sesión</button></li>
                </div>

        </nav> 
    </div>
  )
}

export default FormNav