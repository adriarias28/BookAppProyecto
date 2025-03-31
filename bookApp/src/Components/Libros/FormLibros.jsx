import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Libros/libros.css"
import LlamadosLibros from '../../Services/LlamadosLibros';


function FormLibros() {

  const [libros, SetLibros]= useState([])

  useEffect(() => {
    async function fetchDataUsers() {
      const dataLibro = await LlamadosLibros.getLibros();
      SetLibros(dataLibro);

    }

    fetchDataUsers()

  },[]);





  return (
    <div>

        <h2 className='tituloLibros'>Libros disponibles de intercambio</h2>
        
     <div className='librosContenedor'> 
      {libros.map((libroagregado, index) => ( 
          <div key={index} className="libroCard"><br />
        <div className='libroAgregado'>
          <img src={libroagregado.imagen} height='300px' width='200px' className="libroImagen"/>
          <p className="libroInfo"><strong>Título: </strong>{libroagregado.libro}</p>
            <p className="libroInfo"><strong>Autor: </strong>{libroagregado.autor}</p>
            <p className="libroInfo"><strong>Editorial: </strong>{libroagregado.editorial}</p>
            <p className="libroInfo"><strong>Genero: </strong>{libroagregado.genero}</p><br />
            <button className='btnCambiar'>Intercambiar Libro</button>
        </div>
              </div>
        ))}
    </div>


    </div>
  )
}

export default FormLibros