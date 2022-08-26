import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';


function App(props) {
  
  return (
    <>
    <NavBar/>
    
    <ItemListContainer greeting='CATALOGO DE PRODUCTOS'/> 
    
    
    </>
   );
}

export default App;
