import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <ChakraProvider>
    <>
      <NavBar/>
      <ItemListContainer/>

      <h1>hola</h1>
    </>
    </ChakraProvider>
  )
}

export default App


