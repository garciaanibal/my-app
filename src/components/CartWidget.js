import { useCartContext} from "./CartContext";

const CartWidget = () => {
  const{totalItems}= useCartContext()

  
  return (
    <>
     <img
        src="https://cdn-icons-png.flaticon.com/512/8010/8010043.png"
        width="40"
        height="30"        
    />
    <span>{totalItems() || ''}</span>
    </>
   
  )
}
export default CartWidget