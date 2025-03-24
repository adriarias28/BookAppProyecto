import React, { useState } from 'react'
import LlamadosLibros from '../Services/LlamadosLibros'
import Swal from 'sweetalert2'
import "../Styles/perfil.css"


function FormPerfil() {

const [nomLibro,setnomLibro]=useState("")
const [nomAutor,setnomAutor]=useState("")
const [nomEditorial,setnomEditorial]=useState("")
const [generoLiterario, setgenerolite]=useState("Ciencia ficción") //valor predeterminado


function libro(evento) {
  
  setnomLibro(evento.target.value)

}

function autor(evento) {

  setnomAutor(evento.target.value)
  
}

function editorial(evento) {

  setnomEditorial(evento.target.value)
  
}

function genero(evento) {
  
  setgenerolite(evento.target.value)
}



function btnLibro() {
  
  if (nomLibro === "" || nomAutor === "" || nomEditorial === "") {
          Swal.fire({
              icon: "error",
              title: "Llenar campos vacios",
              text: "Por favor llene todos los datos solicitados", 
              customClass: {
                popup: "contenedorAlert",
                title: 'title'  
              }, 
            });
  } else {
    LlamadosLibros.postLibros(nomLibro, nomAutor, nomEditorial, generoLiterario) //    
          Swal.fire({
              title: "Tu libro a sido agregado correctamente",
              icon: "success",
              draggable: true,
              customClass: {
              popup: "contenedor",  
              },
            });
  }

}

  return (
    <div>
      <div className='contLibros'>
        <h2 className='tituloLibro'>Agrega tu libro de intercambio</h2>
        <label htmlFor=""> Nombre del Libro:</label><br />
        <input value={nomLibro} onChange={libro} type="text" /><br />
        <label htmlFor="">Autor:</label><br />
        <input value={nomAutor} onChange={autor} type="text" /><br /> 
        <label htmlFor="">Editorial:</label><br />
        <input value={nomEditorial} onChange={editorial} type="text" /><br />
        <label htmlFor="">Genero Literario:</label><br />
        <select onChange={genero} value={generoLiterario}>
          <option value="Ciencia ficción" selected>Ciencia ficción</option>
          <option value="Romance">Romance</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Terror">Terror</option>
          <option value="Novela">Novela</option>
          <option value="Autoyuda y espiritualidad">Autoyuda y espiritualidad</option>
          <option value="Gastronomía">Gastronomía</option>
        </select><br /><br />
        <input type="file" /><br /><br />
        <button className='btnAgregar' onClick={btnLibro} >Agregar Libro</button>
      </div> 

    </div>
  )
}

export default FormPerfil