// import { CartContext, useContext } from "react";

const Cart = () => {
  
  // const { items, removeItem,clear} = useContext(CartContext);
 
  return (
    <div className='m-5'>
      <h1>Cart</h1>
        {/* {
              items.map((item) => (
                <div key={(item.id)}>
                  <br></br>
                  <h3>{item.cant} {item.name}</h3>
                  <h5 onClick={()=> removeItem(item.id)}>Eliminar </h5>
                </div>
              ))
        }*/
        <h4 >Vaciar carrito</h4> }
    </div>
  )
}

export default Cart