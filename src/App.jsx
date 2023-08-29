
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  
  const greeting = "Welcome to the best pizzeria in Copenhagen"

  return (
    
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
    
  )
}

export default App


