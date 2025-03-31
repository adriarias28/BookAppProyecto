import React, { useState,useEffect } from 'react'

import Swal from 'sweetalert2'
import "../../Components/PerfilUsuarios/perfil.css"
import LlamadosLibros from '../../Services/LlamadosLibros'


function FormPerfil() {

const [nomLibro,setnomLibro]=useState("")
const [nomAutor,setnomAutor]=useState("")
const [nomEditorial,setnomEditorial]=useState("")
const [generoLiterario, setgenerolite]=useState("Ciencia ficción") //valor predeterminado
const [imgs,setImag]=useState()
const [libros,SetLibros]=useState([])
const [edita,Seteditado]=useState()


useEffect(() => { //utilizamos un UseEffect para que el ciclo no sea infinito

  async function fetchDataUsers() { //me trae los libros que guardo en la dbjson
      
      const datos = await LlamadosLibros.getLibros()
      const usuario = JSON.parse(localStorage.getItem("infoUsuario"))
      const librosFiltrados = datos.filter((libro) => libro.usuario === usuario[0].id)
      
      
      SetLibros(librosFiltrados)
  };
  fetchDataUsers()
},[])



const contImagenes=(e)=>{  // funcionamiento de base 64
  const data = new FileReader()
  data.addEventListener("load",()=>{
    setImag(data.result)
  })
  data.readAsDataURL(e.target.files[0])
}


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

function editada(evento) {
         
  Seteditado(evento.target.value)

}

async function btnLibro() {
  
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

    const usuario = JSON.parse(localStorage.getItem("infoUsuario"))

   const datoLibro = await LlamadosLibros.postLibros(usuario[0].id, nomLibro, nomAutor, nomEditorial, generoLiterario, imgs) 
      SetLibros([...libros,datoLibro])
          Swal.fire({
              title: "Tu libro a sido agregado correctamente",
              icon: "success",
              draggable: true,
              customClass: {
              popup: "contenedor",  
              },
            });
            setnomLibro = "";
  }
}

async function botonEliminar(id) {
  const result = await Swal.fire({
    title: "¿Quieres eliminar este libro?",
    text: "No se podrá revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Eliminar libro",
  });

  if (result.isConfirmed) {
    try {
 
      await LlamadosLibros.deleteLibros(id);

      const data = await LlamadosLibros.getLibros();
      SetLibros(data);
            Swal.fire({
              title: "Eliminado",
              text: "El libro fue eliminado correctamente",
              icon: "success",
            });
          } catch (error) {
            console.error("Error eliminando el libro:", error);
      
            // Mensaje de error
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar el libro.",
              icon: "error",
            });
          }
        }
      }


async function btnEditar(id) {     

  const llamarLibro = await LlamadosLibros.getLibro(id)
  console.log(llamarLibro);
  let prueba = llamarLibro.libro
  

  const { value: formValues } = await Swal.fire({
    title: "Edita tus datos",
    html: `
      <input id="swal-input1" class="swal2-input" value="${prueba}">
      <input id="swal-input2" class="swal2-input" value="${llamarLibro.autor}">
      <input id="swal-input3" class="swal2-input" value="${llamarLibro.editorial}">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
    console.log(formValues);

    const datoEditar = await LlamadosLibros.updateLibros(formValues[0], formValues[1], formValues[2], id)
    
  }

}


  return (
    <div><br /> <br />
      <div className='contLibros'>
        <h2 className='tituloLibro'>Agrega tu libro de intercambio</h2>
        <label htmlFor=""> Nombre del Libro:</label><br />
        <input className="inputCampo" value={nomLibro} onChange={libro} type="text"/><br />
        <label htmlFor="">Autor:</label><br />
        <input className="inputCampo" value={nomAutor} onChange={autor} type="text"/><br /> 
        <label htmlFor="">Editorial:</label><br />
        <input className="inputCampo" value={nomEditorial} onChange={editorial} type="text"/><br />
        <label htmlFor="">Genero Literario:</label><br />
        <select className="selectCampo" onChange={genero} value={generoLiterario}>
          <option value="Ciencia ficción" selected>Ciencia ficción</option>
          <option value="Romance">Romance</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Terror">Terror</option>
          <option value="Novela">Novela</option>
          <option value="Autoyuda y espiritualidad">Autoyuda y espiritualidad</option>
          <option value="Biografía">Biografía</option>
        </select><br /><br />

        <input className="inputArchivo" type="file" onChange={contImagenes} /><br /><br />
        <img className="imgPreview" src={imgs} height="100px" width="100px" />
        <button className='btnAgregar' onClick={btnLibro} >Agregar Libro</button>
        
      </div> 

      {libros.map((libroagregado, index) => ( 
            <div key={index} className="libro-card"><br />
            <h2 className="titulo-libro">Libro agregado</h2><br />
          <div className='libro-agregado'>
            <img src={libroagregado.imagen} height='400px' width='300px' className="libro-imagen"/><br />
            <div className="libro-detalles">
            <button className="btn-editar" onClick={e=>btnEditar(libroagregado.id)}>Edita tus datos</button><br /><br />
            <button className="btn-eliminar" onClick={e=>botonEliminar(libroagregado.id)} >Eliminar</button>
            <br /><br />
            <p className="libro-info"><strong>Título: </strong>{libroagregado.libro}</p>
            <p className="libro-info"><strong>Autor: </strong>{libroagregado.autor}</p>
            <p className="libro-info"><strong>Editorial: </strong>{libroagregado.editorial}</p>
            <p className="libro-info"><strong>Genero: </strong>{libroagregado.genero}</p>
          </div>
              </div>
            </div>
        ))}



    </div>
  )
}

export default FormPerfil