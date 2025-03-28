import React from 'react'
import "../../Components/NavBar/navbar.css"
import logo from '../../imagenes/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import tituloUno from '../../imagenes/titulo1.png'


function FormNav() {

    const navigate = useNavigate() 

    function btnInicio() {
        
        navigate('/login')

    }

    function btnRegis() {
        
        navigate('/register')

    }

  return (
    <div>
        <button className='btnInicio' onClick={btnInicio}>Iniciar Sesión</button> 
        <button className='btnRegis' onClick={btnRegis}>Registrarse</button>

        <div className='titulos'>
            <div>
                <img className='tituloUno' src={tituloUno} alt="..." />
            </div>
            <p className='parrafoUno'>Pagina web de intercambio de libros</p><br />
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
                </div>

        </nav> 
    </div>
  )
}

export default FormNav