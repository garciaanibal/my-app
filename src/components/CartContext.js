import { createContext, useContext, useState } from "react";
import Item from "./Item";

const CartContext = createContext([]);

export const useCartContext= () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, SetCart] = useState([]); //estado del carrito
    
    //para saber si un producto esta en el carrito
    const isInCart = (id) => { 
      return cart.find(i => i.id === id) ? true : false
    };
  
    const addItem = (item,newquantity) => {
      isInCart(item.id) ? SetCart(cart.map((products) => {
        if(products.id === item.id){
          products.counter += newquantity
        }
        return products
      }))
       :
       SetCart([...cart, {...item,newquantity}])
    };
    //remover producto
    const removeItem = (id) => { SetCart(cart.filter(item => item !== id))}; 
    
    //limpiar el carrito
    const clear = () => { SetCart([]); }; 
    //Total de productos
    const totalItems=()=> cart.reduce((acumulador,pruductoActual) => acumulador + pruductoActual.newquantity,0);
    
    return (
      <CartContext.Provider
        value={{
          isInCart,
          addItem,
          removeItem,
          clear,
          totalItems,
          cart
       
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
