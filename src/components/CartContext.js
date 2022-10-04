import { createContext, useContext, useState } from "react";
import Item from "./Item";
import Swal from "sweetalert2";
import uuid from "react-uuid";

const CartContext = createContext([]);

export const useCartContext= () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, SetCart] = useState([]); //estado del carrito
    
    //para saber si un producto esta en el carrito
    const isInCart = (id) => { 
      return cart.find(i => i.id === id) ? true : false
    };
  //agregar Item
    const addItem = (item, quantity) => {
      isInCart(item.id) ? SetCart(cart.map((products) => {
        if(products.id === item.id){
          products.quantity += quantity
          
        }
        return products
       
      }))
       :
       SetCart([...cart, {...item, quantity}]);
       Swal.fire("Producto agregado");
    };
    //remover producto
    const removeItem = (id) => { SetCart(cart.filter(item => item !== id))}; 

    const totalPrice = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };
    
    //limpiar el carrito
    const clear = () => { SetCart([]); }; 
    //Total de productos
    const totalItems = ()=> cart.reduce((acumulador,pruductoActual) => acumulador + pruductoActual.quantity,0);
    
    return (
      <CartContext.Provider
        value={{
          isInCart,
          addItem,
          removeItem,
          clear,
          totalItems,
          totalPrice,
          cart
       
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
