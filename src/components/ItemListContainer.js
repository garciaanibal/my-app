import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
function ItemListContainer({greeting}) {
  
  function onAdd({onAdd}){
   alert(onAdd)    
    
   }
 
  return (
    <div> 
       <h1> {greeting} </h1>
            <li className="fs-3 mx-5">ÍTEM 1</li>
            <li className="fs-3 mx-5">ÍTEM 2</li>
            <li className="fs-3 mx-5">ÍTEM 3</li>
            <li className="fs-3 mx-5">ÍTEM 4</li>
            <br></br>
            <ItemCount stock="5" initial={0} onAdd={onAdd} />
            <Button onClick={onAdd} variant="outline-secondary" size="lg">Aletra{onAdd} </Button>
               

    </div>
    

  )
}
export default ItemListContainer

