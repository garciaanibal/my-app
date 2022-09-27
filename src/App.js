import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import CartWidget from './components/CartWidget';
import { CartContextProvider } from './components/CartContext';



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
                <Route path='/CartWidget' element={ <CartWidget/> } />     
              
            </Routes> 
        </BrowserRouter>
      </CartContextProvider>
    
    </>
   );
}

export default App;
