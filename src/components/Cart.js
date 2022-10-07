 import { useCartContext} from "./CartContext";
 import{ Link } from 'react-router-dom';
import ItemCart from "./ItemCart";
import Button from 'react-bootstrap/Button';
const Cart = () => {
  const { cart, totalPrice,clearCart } = useCartContext();
  
  if(cart.length === 0){
    return (
      <>
        <h1>Cart</h1>
        <p>No hay elementos en el carrito</p>
        <Link to= {'/'}> Hacer compra</Link>
      </>
    )
  }

  return (
   <>
    {cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
    <br></br>
     <h2>total: {totalPrice()}</h2>

     <br></br>
     <Button onClick={()=>clearCart()} variant="secondary" size="lg">Vaciar carrito</Button>
   </>
   
  )
}

export default Cart