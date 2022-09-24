import React, { useEffect, useState } from 'react'
import Item from './Item'
import products from "./productData";

const ItemList = () => {
  const [items, setItems]= useState([]);
  
  useEffect(()=>{
  
   setItems(products)
   
 },[])
    
  return (
    <>
      
         <div>
            { items.map(i => <Item key={i.id} nombre={i.name} {...i} />  
            
             ) }
        </div>
       
    </>
    
  )
}

export default ItemList