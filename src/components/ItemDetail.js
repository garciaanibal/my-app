import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import{ Link } from 'react-router-dom';
import { CartContext, useContext, useState,useEffect } from "react";

import Loader from './Loader'
const ItemDetail = ( {item} ) => {
  const [loading, setLoading] = useState(true)
  const [inicio, setInicio]=useState(1)
  const [stock, setStock]=useState(6)
  const [total, setTotal]=useState(1)


  // const { addItem} = useContext(CartContext);  
  const[add,setAdd]=useState(false);
 
    const onAdd = () => {
    setAdd(add);
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
               <ItemCount stock={10} initial={0} onAdd={onAdd} />
              
               </div>
             </div>
           
             <Link to={`/cart/`}>            
               <Button variant="secondary" size="sm">Terminar compra</Button>
             </Link>
             
             </div>
             
       }  
     </div>
     </>

    
  )
}
export default ItemDetail

