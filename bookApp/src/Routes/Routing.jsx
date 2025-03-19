import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PagPrincipal from '../Pages/PagPrincipal';
import FormNav from '../Components/FormNav';
import Contactenos from '../Pages/Contactenos';
import Acercade from '../Pages/Acercade';
import Libros from '../Pages/Libros';
import PagUsuarios from '../Pages/PagUsuarios';

function Routing() {

  return (
    <div>
      <Router>
        <Routes>
      
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<PagPrincipal/>}/>
                    <Route path="/navbar" element={<FormNav/>}/>
                    <Route path="/contactos" element={<Contactenos/>}/>
                    <Route path="/acercade" element={<Acercade/>}/>
                    <Route path="/libros" element={<Libros/>}/>
                    <Route path="/pagusuarios" element={<PagUsuarios/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing