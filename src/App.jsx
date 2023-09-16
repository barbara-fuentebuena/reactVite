
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import { initialProducts } from './components/ItemDetailContainer';

function App() {


  return (

    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* <ItemListContainer /> */}
          {/* <ItemDetailContainer/> */}

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer/>}/>
          <Route exact path="/product/:id" element={<ItemDetail products={initialProducts} />} />


        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App


