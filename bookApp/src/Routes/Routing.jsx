import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PagPrincipal from '../Pages/PagPrincipal';


function Routing() {

  return (
    <div>
      <Router>
        <Routes>
      
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/pagprincipal" element={<PagPrincipal/>}/>
                    
        </Routes>
      </Router>
    </div>
  );
}

export default Routing