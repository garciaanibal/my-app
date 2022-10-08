import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import { CartContextProvider } from './components/CartContext';
import PiePagina from './PiePagina';

function App() {

  return (
    <>
    <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route path='/' element={<ItemListContainer greeting='CATALOGO DE PRODUCTOS'/>} />
                <Route path='/category/:categoryid' element={ <ItemListContainer />} />
                <Route path='/item/:id' element={ <ItemDetailContainer/> } />
                <Route path='/cart' element={ <Cart/> } />
 
            </Routes> 
        </BrowserRouter>
        <PiePagina/>
      </CartContextProvider>
    
    </>
   );
}

export default App;
