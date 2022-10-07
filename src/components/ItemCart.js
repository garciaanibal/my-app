import { useCartContext } from "./CartContext"
import { Button } from "react-bootstrap"

const ItemCart = ({product}) => {
    const{ removeProduct }= useCartContext();
  return (
    <div>
       <img src= {product.URLimage}  style = { {width:"10rem"}}/>
       <p> {product.name}</p>
       <p>Cantidad: {product.quantity}</p>
       <p>Precio:{product.price} </p>
       <Button onClick={()=>removeProduct(product.id)}>Eliminar</Button>
       
    </div>
  )
}
export default ItemCart