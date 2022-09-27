import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext, useContext } from "react";

function ItemCount({ stock, initial, onAdd }) {
    
  const[counter, setCounter] = useState(initial);
  // const { item, addItem} = useContext(CartContext);  
  
  const sumarClick = () => {
     if(counter < stock){
        setCounter(counter + 1);
      } 
    }
  
  const restarClick2 = () => {
     if(counter > 0){
       setCounter(counter - 1);
     }
    }
    
    return(
      <>
        <div>
          <Button onClick={sumarClick} variant="outline-primary" btn-lg> + </Button>{' '}
          <Button onClick={onAdd} variant="outline-secondary" btn-lg> {counter} </Button>{' '}
          <Button onClick={restarClick2} variant="outline-danger" btn-lg> - </Button>
        </div>
        {
          counter > 0 ? 
          // <div className='ui botton attached button' onClick={ () =>addItem(item, counter)} >
          <div className='ui botton attached button' onClick={onAdd} >
            <i className='cart icon'></i>
              Añadir al Carrito
          </div>
          :
          <div className='ui botton attached disable' >
              <i className='cart icon'></i>
                Añadir al Carrito
          </div>

        }
     </>

    ) 
   
}
    export default ItemCount