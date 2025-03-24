import React from 'react'
import "../Styles/acercade.css"
import imgsobrenos from '../imagenes/leyendo.jpg'

function FormAcercade() {
  return (
    <div>
        <div className='contenedorTitulos'>
            <h1 className='sobrenos'>Sobre Nosotros</h1>
              <div>
                <img className='imgsobre' src={imgsobrenos} alt=".." />
              </div>
            <h3 className='titulosacer'>- Equipo BookApp -</h3>
            <p className='parrafos'>Consiste en desarrollar una red social digital enfocada en el intercambio de libros entre usuarios. 
            Su propósito principal es proporcionar una plataforma accesible y fácil de usar que permita a las personas compartir, 
            intercambiar o vender libros (tanto digital como físico), fomentando una comunidad activa en torno a la literatura.</p><br /><br />
            <h3 className='titulosacer'>- Equipo de Desarrollo -</h3>
            <p className='parrafos'>Sobre el equipo de desarrollo de la web</p>
        </div>

    </div>
  )
}

export default FormAcercade