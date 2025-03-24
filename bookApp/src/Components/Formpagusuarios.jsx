import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../imagenes/logo.png'
import tituloUno from '../imagenes/titulo1.png'
import "../Styles/pagusuario.css"

function Formpagusuarios() {

    const navigate = useNavigate() 
    const admis = JSON.parse(localStorage.getItem("infoUsuario"))

    console.log(admis);
    console.log(admis[0].nombre);
    

    function btnSalir() {
        
        navigate('/')

    }



  return (
    <div>
        <button className='btnSalir' onClick={btnSalir}>Salir</button>
          <div className='titulos'>
            <div>
                <img className='tituloUno' src={tituloUno} alt="..." />
            </div>
            <p>Hola bienvenido{admis[0].nombre} {admis[0].apellidos}</p>
            <p className='parrafoUno'>Pagina web de intercambio de libros</p>
          </div><br />

          <nav className='navbar'>
              <div>
              <img className='imglogo' src={logo} alt="..." />
              </div>
              <div>    
              <li><Link to= "/pagusuarios">Inicio</Link> </li>
              </div>
              <div> 
              <li> <Link to= "/librosusu">Libros</Link></li>
              </div> 
              <div> 
              <li> <Link to= "/perfilusu">Mi perfil</Link></li>
              </div> 
              <div>
              <li> <Link to= "/contactousu">Contáctanos</Link></li>
              </div>
              <div>
              <li> <Link to= "/acercadeusu">Acerca de</Link></li>
              </div>
          </nav> 

    </div>
  )
}

export default Formpagusuarios