import React from 'react'
import "../../Components/Contactos/contactos.css"

function FormContactos() {
  return (
    <div>


      <div className='contenedorInfo' > 

        <h2 className='contac'>Contacto</h2>
        <p className='parrafoUno'>Somos BookApp, una plataforma digital dedicada al intercambio de libros entre usuarios. 
          Para obtener más información, contáctanos a través de:</p>
        <p className='correo'>bookapp@gmail.com</p><br />
        <h3 className='parrafoDos'>Si tienes dudas o comentarios, no dudes en enviarnos un mensaje. Estamos aquí para ayudarte.</h3><br />
      
       <div className='contInputs'>
        <input className='inputUno' placeholder='Nombre' type="text" />
        <input className='inputUno' placeholder='Email ' type="text" /><br />
        <input className='inputDos' placeholder='Escribe tu mensaje aquí...' type="text" /><br />
        <button className='btnEnviar'>Enviar mensaje</button>
       </div>

      </div>

    </div>
  )
}

export default FormContactos