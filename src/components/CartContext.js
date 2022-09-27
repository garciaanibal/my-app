import { createContext, useContext, useState } from "react";
import Item from "./Item";
import products from "./productData";


const CartContext = createContext();

export const useCartContext=()=>useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    const isInCart = (id) => {
      const found= items.find(item => item.id === id)
      return found
    };
  
    const addItem = (item,counter) => {
      isInCart(item.id) ? setItems(items.map((products) => {
        if(products.id === item.id){
          products.counter+=counter
        }
        return products
      }))
       :
       setItems([...items, {id: item.id, name: item.name, price: item.price, counter:counter}])
    };
  
    const removeItem = (id) => {
      setItems(items.filter(item=> item !== id))
    };
  
    const clear = () => {
      setItems([]);
    };

 
  
    return (
      <CartContext.Provider
        value={{
          isInCart,
          addItem,
          removeItem,
          clear,
       
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
