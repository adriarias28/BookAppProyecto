import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LlamadosUsuarios from '../Services/LlamadosUsuarios';
import Swal from 'sweetalert2'
import "../Styles/register.css"
import imaglogin from '../imagenes/imaglogin.jpg' //import para la imagen 


function FormRegister() {

    const [nombrePersonal,setnombrePersonal]=useState("")
    const [apellidosUsuario,setapellidosUsuario]=useState("")
    const [nomUsuario,setnomUsuario]=useState("")
    const [correoUsu,setcorreoUsu]=useState("")
    const [passUsuario,setpassUsuario]=useState("")


    function nombre(evento) {

      setnombrePersonal(evento.target.value)

    }

    function apellidos(evento) {

      setapellidosUsuario(evento.target.value)
    }

    function usuario(evento) {
      
      setnomUsuario(evento.target.value)

    }

    function correo(evento) {

      setcorreoUsu(evento.target.value)
      
    }

    function password(evento) {
      
      setpassUsuario(evento.target.value)

    }

    function valRegis() {

      if (nombrePersonal === "" || apellidosUsuario === "" || nomUsuario === "" || correoUsu === "" || passUsuario === "") {
        Swal.fire({
          icon: "error",
          title: "Llenar campos vacios",
          text: "Por favor llene todos los datos solicitados", 
          customClass: {
            popup: "contenedorAlert",
            title: 'title'  
          }, 
        });
  }else{ 
      LlamadosUsuarios.postUsuarios(nombrePersonal, apellidosUsuario, nomUsuario, correoUsu, passUsuario);
      Swal.fire({
          title: "Registrado correctamente",
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
      <div className='contenedorPrincipal'>
            <div>
              <img className='imglogin' src={imaglogin} alt="..." />
            </div>
            <div className='contenedorDos'>  
              <h1>¡Bienvenido a BookApp!</h1>
              <p>Create una cuenta con nosotros y disfruta de los beneficios y de la mejor pagina de intercambio de libros.</p>
              <h3>Registrarse</h3>
              <input className='inpuesti' value={nombrePersonal} onChange={nombre} placeholder='Ingrese tu nombre' type="text" /><br /><br />
              <input className='inpuesti' value={apellidosUsuario} onChange={apellidos} placeholder='Ingrese tu apellido' type="text" /><br /><br />
              <input className='inpuesti' value={nomUsuario} onChange={usuario} placeholder='Ingrese un nombre de usuario' type="text" /><br /><br />
              <input className='inpuesti' value={correoUsu} onChange={correo} placeholder='Ingrese tu correo electronico' type="text" /><br /><br />
              <input className='inpuesti' value={passUsuario} onChange={password} placeholder='Ingrese una contraseña' type="password" /><br /><br />
              <button onClick={valRegis} >Registrarse</button>
              <p>¿Ya tienes una cuenta? <Link to= "/login">¡Inicia sesión aquí!</Link> </p> 
            </div>
      </div>  

    </div>
  )
}

export default FormRegister
