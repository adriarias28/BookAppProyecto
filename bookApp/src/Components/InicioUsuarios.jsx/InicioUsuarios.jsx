import React from 'react'
import losjuegos from '../../imagenes/losjuegos.jpeg'
import mujercitas from '../../imagenes/mujercitas.jpeg'
import ana from '../../imagenes/anaFrank.jpeg'
import alquimista from '../../imagenes/ElAlquimista.jpeg'

function InicioUsuarios() {
  return (
  <div><br />

        <h2 className='tituloInicio'>Descubre nuestros últimos libros</h2>
    <div className='contenedorInicio'>   
      <div>
        <li>
        <p className='parrafosinicio'>-Últimas publicaciones-</p>  
        <img className='imgjuegos' src={losjuegos} alt="..." /><br /><br />
        <p className='parrafoIni'>"Los Juegos del Hambre" sigue a Katniss, quien lucha por sobrevivir en un evento mortal organizado por un gobierno opresivo.</p>
        </li>        
      </div>
      <div>
        <li>
        <p className='parrafosinicio'>-Últimas publicaciones-</p>  
        <img className='imgjuegos' src={mujercitas} alt="..." /><br /><br />
        <p className='parrafoIni'><p>Un clásico de la literatura estadounidense, que sigue la vida de cuatro hermanas.</p></p>
        </li>        
      </div>
      <div>
        <li>
        <p className='parrafosinicio'>-Libro más populares-</p>  
        <img className='imgjuegos' src={ana} alt="" /> <br /><br />
        <p className='parrafoIni'><p>Ana Frank fue una niña judía que se escondió con su familia durante la Segunda Guerra Mundial. En su diario, relató su vida en el refugio y sus pensamientos hasta su arresto y muerte en un campo de concentración.</p></p>
        </li>        
      </div>
      <div>
        <li >
        <p className='parrafosinicio'>-Libro más populares-</p>  
        <img className='imgjuegos' src={alquimista} alt="" /> <br /><br /><br />
        <p className='parrafoIni'><p>El Alquimista cuenta la historia de Santiago, un joven pastor que emprende un viaje para encontrar su "leyenda personal" y descubrir su tesoro, aprendiendo valiosas lecciones sobre la vida y el destino.</p></p>
        </li>        
      </div>
    </div>
  </div> 
  )
}

export default InicioUsuarios