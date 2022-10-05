import { useCartContext} from "./CartContext";

const CartWidget = () => {
  const{totalProducts}= useCartContext()

  
  return (
    <>
     <img
        src="https://cdn-icons-png.flaticon.com/512/8010/8010043.png"
        width="40"
        height="30"        
    />
    <span>{totalProducts() || ''}</span>
    </>
   
  )
}
export default CartWidget