import React from 'react';
import { React, createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import uuid from "react-uuid";
import products from "./productData";

const productsContext = React.createContext()

export const useproductsContext=()=>useContext(productsContext)

const productsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
  
    const existe = (products) => {
      return products.some((buscada) => buscada.id === products.id);
    };
  
    const addItem = (products) => {
      if (existe(products.id)) {
        return Swal.fire("Ya existe en la lista");
      }
  
      const id = uuid();
      const nuevoproduct = { ...products, id };
      setProducts([...products, nuevoproduct]);
      Swal.fire("Products agregada");
    };
  
    //* Otra forma, es como mostro el profe Adrian
  
    //    const addItem2 = (products) => {
    //     const id = uuid();
    //     const nuevaproducts = { ...products, id };
    //     setProducts((prev) => prev.concat(nuevaproducts));
    //   };
  
    const removeItem = (products) => {
      const removeItem = products.filter((buscada) => buscada.id !== products.id);
      return setProducts(removeItem);
    };
  
    const clear = () => {
      setProducts([]);
    };
  
    const pendientes = () => {
      const pendientes = products.reduce(
        (acum, products) => (products.estado === false ? acum + 1 : acum),
        0
      );
      return pendientes;
    };
  
    const actualizarEstado = (products, estado) => {
      const copiaproductss = [...products];
  
      const actualizarproducts = copiaproductss.map((actual) => {
        if (actual.id === products.id) {
          return { ...actual, estado: estado ? false : true };
        } else {
          return actual;
        }
      });
  
      //!---------------------------------------------------------
      //! Esto no es necesario en la funcion, sino que lo use
      //! para mostrar como el estado original no habia cambiado
      const original = products.find((p) => p.id === products.id);
  
      console.log("products original:", original);
      console.log("Lista products original", products);
      console.log("Lista products actualizadas:", actualizarproducts);
      //! ---------------------------------------------------------
  
      setProducts(actualizarproducts);
    };
  
    return (
      <productsContext.Provider
        value={{
          products,
          existe,
          addItem,
          removeItem,
          clear,
          pendientes,
          actualizarEstado,
        }}
      >
        {children}
      </productsContext.Provider>
    );
  };
  export default productsContextProvider
