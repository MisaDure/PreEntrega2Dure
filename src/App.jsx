import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBarComponent/NavBarComponents'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import { getProducts } from './services';


const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina de aderezos" productsData={productsData}/>
    </div>
  )
}

export default App
