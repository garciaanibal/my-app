import { useState } from 'react';
import Button from 'react-bootstrap/Button';

  function ItemCount({ stock, initial, onAdd }) {
    
    const[counter, setCounter] = useState(initial);
    
   const handleClick = () => {
     if(counter < stock){
           setCounter(counter + 1);
      } 
    
    }
  
    const handleClick2 = () => {
     if(counter > 0){
       setCounter(counter - 1);
     }
    }
    
    return(
        <>
           <div className="container">
              <Button onClick={handleClick} variant="outline-primary">Add</Button>{' '}
              <Button onClick={onAdd} variant="outline-secondary" size="lg"> Contador: {counter} </Button>
              <Button onClick={handleClick2} variant="outline-danger">Remove</Button>{' '}
              <br></br>
              
            </div>
            

        </>

    ) 
   
}
    export default ItemCount