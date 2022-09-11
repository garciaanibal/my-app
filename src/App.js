import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            
            <Route path='/' element={<ItemListContainer greeting='CATALOGO DE PRODUCTOS'/>} />
            <Route path='/category/:id' element={ <ItemListContainer />} />
            <Route path='/item/:id' element={ <ItemDetailContainer/> } />
           
           
        </Routes> 
    </BrowserRouter>
    {/* <NavBar/>
    <ItemListContainer greeting='CATALOGO DE PRODUCTOS'/>  */}
    
    </>
   );
}

export default App;
