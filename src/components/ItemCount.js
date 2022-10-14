import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';


function ItemCount({ stock, inicio , onAdd }) {
    
  const[count, setCount] = useState(parseInt(inicio));
  
  
  const sumarClick = () => {
    
    if(count < stock){
        setCount(count + 1);
      } 
    }
  
  const restarClick = () => {
     if(count > 0){
       setCount(count - 1);
     }
    }
    useEffect(() =>{
      setCount(parseInt(inicio))
    }, [inicio])

    return(
      <>
        <div>
          <Button disabled={count <= 1} onClick={restarClick} variant="outline-primary" size="lg"> - </Button>{' '}
          <Button  variant="outline-secondary" > {count} </Button>{' '}
          <Button disabled={count >= stock} onClick={sumarClick} variant="outline-primary" size="lg"> + </Button>
          <div> 
            <Button disabled={count <= 0}  onClick={ () =>onAdd(count)} >Añadir al Carrito </Button>
            <br></br>
          </div>
        </div>
       
     </>

    ) 
   
}
    export default ItemCount