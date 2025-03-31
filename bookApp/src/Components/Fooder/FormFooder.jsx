import React from 'react'
import logo from '../../imagenes/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import "../../Components/Fooder/fooder.css"
import facebook from '../../imagenes/facebook.png'
import instagram from '../../imagenes/instagram.png'
import tiktok from '../../imagenes/tiktok.png'

function FormFooder() {
  return (

    <div>
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <img className='imglogo' src={logo} alt="Logo de Intercambio de Libros" />
      </div>
      <div className="footer-links">
        <ul>
          <li><Link to="/acercade">Acerca de</Link></li>
          <li><a href="#">Política de Privacidad</a></li>
          <li><Link to="/contactos">Contáctanos</Link></li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li><Link to="https://www.facebook.com/"> <img src={facebook} height="20px"/> Facebook</Link></li>
          <li><Link to="https://www.instagram.com/"><img src={instagram} height="20px" />  Instagram</Link></li>
          <li><Link to="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"><img src={tiktok} height="20px" /> TikTok</Link></li>
        </ul>
      </div>
    </div>
    <div>
      <p className="footer-bottom">&copy; 2025 Intercambio de Libros. Todos los derechos reservados.</p>
    </div>
  </footer>

    </div>
  )
}

export default FormFooder