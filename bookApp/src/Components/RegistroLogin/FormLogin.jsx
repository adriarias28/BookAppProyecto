import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LlamadosUsuarios from '../../Services/LlamadosUsuarios'
import Swal from 'sweetalert2'
import imaglogin from '../../imagenes/imaglogin.jpg'
import "../../Components/RegistroLogin/register.css"


function FormLogin() {

    const [nomUsuario,SetnomUsuario]=useState("")
    const [passUsuario,SetpassUsuario]=useState("")
    const [personas,SetPersonas]=useState([])

    const navigate = useNavigate() 
    
  useEffect(() => { //utilizamos un UseEffect para que el ciclo no sea infinito

      async function fetchDataUsers() {
          
          const datos = await LlamadosUsuarios.getUsuarios()

          SetPersonas(datos)
      };
      fetchDataUsers()
  })


    function usuario(evento) {
        
      SetnomUsuario(evento.target.value)

    }

    function password(evento) {
        
      SetpassUsuario(evento.target.value)

    }

    function valInicio() {
      
      const encontrar = personas.filter(persona => persona.usuario === nomUsuario && persona.password===passUsuario)
      console.log(encontrar);
      

      if (encontrar.length === 0 || nomUsuario === "" || passUsuario === "" ) {
          Swal.fire({
            icon: "error",
            title: "Llenar campos vacios",
            customClass: {
              popup: "contenedor",
              title: 'title'  
            }, 
          });
      }else{ 
          localStorage.setItem("infoUsuario", JSON.stringify(encontrar)) //stringify para convertido en formato lista
            navigate('/pagusuarios')
            Swal.fire("Bienvenido!");
          }
    }

  return (
    <div>
      <div className='contenedorPrincipal'>
            <div>
              <img className='imglogin' src={imaglogin} alt="..." />
            </div>
            <div className='contInfo'>
              <h1>¡Bienvenido a BookApp!</h1>
              <p className='parra'>Ingresa a tu cuenta y disfruta de los beneficios y de la mejor pagina de intercambio de libros.</p>
              <h3>Iniciar sesión</h3>
              <input className='inpuesti' value={nomUsuario} onChange={usuario} placeholder='Nombre de usuario ' type="text" /><br /><br />
              <input className='inpuesti' value={passUsuario} onChange={password} placeholder='Contraseña' type="password" /><br /><br />
              <button className='btnvalidar' onClick={valInicio} >Iniciar Sesión</button><br />
              <p>¿No tienes una cuenta? <Link to= "/register">¡Registrate aquí!</Link></p>
            </div>
        </div>

    </div>
  )
}

export default FormLogin
