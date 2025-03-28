import React from 'react'
import {Card, Button, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import leyendo from '../../imagenes/leyendo.jpg'
import "../../Components/Libros/libros.css"

function FormLibros() {
  return (
    <div>

        <h2 className='tituloLibros'>Libros disponibles de intercambio</h2>

        <Container>
    <Row>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={leyendo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>



    </div>
  )
}

export default FormLibros