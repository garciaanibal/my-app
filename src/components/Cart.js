 import { useCartContext} from "./CartContext";
 import{ Link } from 'react-router-dom';
import ItemCart from "./ItemCart";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import {collection, getFirestore,addDoc, Timestamp } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice,clearCart } = useCartContext();
  
  const [orders, setOrders]=useState([]);
 
  const order = {
		buyer: {
			name: "Pablo",
			email: "Pablo@gmail.com",
			phone: "123123",
			address: "asdd",
      date : Timestamp.fromDate(new Date()) //agregamos la fecha del momento de la compra
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.name,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id.docs.map( d => ({id: d.id, ...d.data()}) )));
	};

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
    <h1>Cart</h1>
    <div align='center'>
        {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
    <br></br>
    <h2>total: {totalPrice()}</h2>
    <br></br>
        <Button onClick={()=>clearCart()} variant="secondary" size="lg">Vaciar carrito</Button>
        <Button onClick={handleClick} variant="info" size="lg">Emitir compra</Button>
    </div>


     
   </>

  )
}

export default Cart