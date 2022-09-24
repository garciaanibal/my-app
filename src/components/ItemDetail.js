import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import{ Link } from 'react-router-dom';
const ItemDetail = ( {item:{name,price,URLimage,description}} ) => {
  
  function onAdd({QuantytoAdd}){
    
    alert(onAdd)    
  }

  return (
    <div className="m-5">
        <li>{name}</li>
        <li>Precio: {price}</li>
        <img src = {URLimage} style = { {width:"15rem"} } />
        <li>Descripcion: {description}</li>
        <ItemCount stock="5" initial={0} onAdd={onAdd} />
        <Link to={'/cart'}><Button>Terminar mi compra</Button></Link>
    </div>
  )
}
export default ItemDetail

