import React from 'react'
import "../../Components/Acercade/acercade.css"
import imgsobrenos from '../../imagenes/leyendo.jpg'
import foto from '../../imagenes/foto.jpeg'


function FormAcercade() {
  return (
    <div>
        <div className='contenedorTitulos'>
            <h1 className='sobrenos'>Sobre Nosotros</h1>
              <div>
                <img className='imgsobre' src={foto} alt=".." />
              </div>
            <h3 className='titulosacer'>- Equipo BookApp -</h3>
            <p className='parrafos'>En BookApp, nos apasiona fomentar el amor por la lectura y la conexión entre personas a través de los libros. Nuestra misión es crear una red social digital dedicada al intercambio de libros, tanto físicos como digitales, donde los usuarios puedan compartir y descubrir nuevas lecturas de una manera sencilla y accesible
            A través de nuestra plataforma, podrás crear un perfil personal, registrar los libros que tienes y aquellos que estás buscando, facilitando el intercambio con otros miembros de nuestra comunidad. Ya sea que tengas un libro que ya no necesitas o estés buscando una obra específica, aquí encontrarás un espacio ideal para intercambiar y disfrutar de nuevas lecturas.
            Además, buscamos crear una comunidad activa de lectores, donde el intercambio de libros no solo sea una práctica, sino una forma de conectar con otros amantes de la literatura. ¡Únete a nosotros y forma parte de esta red de lectores apasionados!.</p>
        </div>

    </div>
  )
}

export default FormAcercade