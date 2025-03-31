import FormFooder from '../Components/Fooder/FormFooder'
import FormNav from '../Components/NavBar/FormNav'
import FormPrincipal from "../Components/PaginaPrincipal/FormPrincipal"


function PagPrincipal() {
  return (
    <div>
      
        <FormNav />
        <FormPrincipal />
        <FormFooder />

    </div>
  )
}

export default PagPrincipal