import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PagPrincipal from '../Pages/PagPrincipal';
import Contactenos from '../Pages/Contactenos';
import Acercade from '../Pages/Acercade';
import Libros from '../Pages/Libros';
import PagUsuarios from '../Pages/PagUsuarios';
import PerfilUsuarios from '../Pages/PerfilUsuarios';
import ContactenosUsu from '../Pages/ContactenosUsu';
import AcercadeUsu from '../Pages/AcercadeUsu';
import LibrosUsu from '../Pages/LibrosUsu';
import Fooder from '../Pages/Fooder';

function Routing() {

  return (
    <div>
      <Router>
        <Routes>
      
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<PagPrincipal/>}/>
                    <Route path="/contactos" element={<Contactenos/>}/>
                    <Route path="/acercade" element={<Acercade/>}/>
                    <Route path="/libros" element={<Libros/>}/>
                    <Route path="/pagusuarios" element={<PagUsuarios/>}/>
                    <Route path="/perfilusu" element={<PerfilUsuarios/>}/>
                    <Route path="/contactousu" element={<ContactenosUsu/>}/>
                    <Route path="/acercadeusu" element={<AcercadeUsu/>}/>
                    <Route path="/librosusu" element={<LibrosUsu/>}/>
                    <Route path="/fooder" element={<Fooder/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default Routing