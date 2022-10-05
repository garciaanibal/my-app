import { createContext, useContext, useState } from "react";
import Item from "./Item";
import Swal from "sweetalert2";


const CartContext = createContext([]);

export const useCartContext= () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  //   const [cart, setCart] = useState([]); //estado del carrito
    
  //   //para saber si un producto esta en el carrito
  //   const isInCart = (id) => { 
  //     return cart.find(i => i.id === id) ? true : false
  //   };
  // //agregar Item
  // const addItem = (item, quantity) => {
	// 	if (isInCart(item.id)) {
	// 		setCart(
	// 			cart.map((product) => {
	// 				return product.id === item.id
	// 					? { ...product, quantity: product.quantity + quantity }
	// 					: product;
	// 			}),
	// 		);
	// 	} else {
	// 		setCart([...cart, { ...item, quantity }]);
	// 	}
	// };
  //   //remover producto
  //   const removeItem = (id) => { setCart(cart.filter(item => item !== id))}; 

  //   const totalPrice = () => {
  //     return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  //   };
    
  //   //limpiar el carrito
  //   const clear = () => { setCart([]); }; 
  //   //Total de productos
  //   const totalItems = ()=> cart.reduce((acumulador,pruductoActual) => acumulador + pruductoActual.quantity,0);
  const [cart, setCart] = useState([]);
  const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

    return (
      <CartContext.Provider
        value={{
          isInCart,
          addProduct,
          removeProduct,
          clearCart,
          totalProducts,
          totalPrice,
          cart
       
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
