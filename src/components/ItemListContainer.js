import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
 
  function onAdd({onAdd}){
    alert(onAdd)    
  }

  return (
    <div> 
      <h1> {greeting} </h1>
    
      <ItemList/>
      <br></br>
      <ItemCount stock="5" initial={0} onAdd={onAdd} />
    
     </div>
  )
}
export default ItemListContainer

