
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendOrder from './components/SendOrder'
import PurchaseConfirmation from './components/PurchaseConfirmation'
import BookingForm from './components/BookingForm'
import BookingConfirmation from './components/BookingConfirmation'
import ModalMenu from './components/ModalMenu'
import './styles/styles.css'; 

function App() {


  return (

    <>
      <BrowserRouter>
        <ShoppingCartProvider>
       
        
          <NavBar />
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/sendorder" element={<SendOrder />} />
            <Route exact path="/purchase-confirmation/:email" element={<PurchaseConfirmation/>}/>
            <Route exact path="/booking" element={<BookingForm />} />
            <Route exact path="/booking-confirmation" element={<BookingConfirmation/>}/>
            <Route exact path="/menu" element= {<ModalMenu/>}/>



          </Routes>
          <Footer />

          <ToastContainer 
          autoClose={1000}
          hideProgressBar />

        </ShoppingCartProvider>
      </BrowserRouter>
    </>

  )
}

export default App


