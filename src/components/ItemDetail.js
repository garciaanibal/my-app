import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import{ Link } from 'react-router-dom';
import {useState,useEffect } from "react";
import { useCartContext } from './CartContext';
import Loader from './Loader'

const ItemDetail = ( {item} ) => {
  const [loading, setLoading] = useState(true)
  const { addItem} = useCartContext();  
 
 
    const onAdd = (quantity) => {
    console.log({quantity})
    addItem(item,quantity)

    
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 2000);
    
  }, [])
  return (
    <>
     
     <div align='center'>
       { loading ? 
         <Loader/> :
         <div>
            <h2>{item.map(i=>i.name)}</h2>     
            <img src = {item.map(i=>i.URLimage)} style = { {width:"15rem"} } />
            <h5>Precio: </h5> <li>{item.map(i=>i.price)}</li>
            <h5>Descripción:</h5> <li>{item.map(i=>i.description)}</li>
          
           <br></br>
             
             <div className='m-0 row justify-content-center'>
               <div className='col-md-2 col-auto text-center'>
                  <ItemCount inicio={0} stock={item.map(i=>i.stock)}  onAdd={onAdd} />
               </div>
             </div>
           
             <Link to={`/cart`}>            
               <Button variant="secondary" size="sm">Terminar compra</Button>
             </Link>
             
          </div> 
             
       }  
     </div>
     </>

    
  )
}
export default ItemDetail

