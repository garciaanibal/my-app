import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import{ Link } from 'react-router-dom';
import { CartContext, useContext, useState } from "react";

const ItemDetail = ( {item} ) => {
  
  // const { addItem} = useContext(CartContext);  
  const[add,setAdd]=useState(false);
 
    const onAdd = () => {
    setAdd(add);
  }
  return (
    <>
    <div className="m-5">
        <li>{item.name}</li>
        <li>Precio: {item.price}</li>
        <img src = {item.URLimage} style = { {width:"15rem"} } />
        <li>Descripcion: {item.description}</li>
   </div>
   <div>
       { add ?
          <div className='meta'> Añadido</div>
          :
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
          // <ItemCount item={item} stock={10} initial={0} addItem={addItem} />
       }
   <div>
         <Link to={'/cart'}><Button>Terminar mi compra</Button></Link>
     </div>
         
    </div>
    </>
    
  )
}
export default ItemDetail

