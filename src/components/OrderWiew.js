import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const OrdersView = () => {
    const [orders, setOrders]=useState([]);

    useEffect(() => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
       getDocs( orderCollection ).then( snapshot => {
            // console.log(
            //     snapshot.docs.map( d => ({id: d.id, ...d.data()}) )
            // );
            setOrders(snapshot.docs.map( d => ({id: d.id, ...d.data()}) ));
            
        })

    
    }, [])


    
  return (
    <div>
      <div className="container-sm inline"><h1>Órdenes de compra</h1></div>
       { orders.length ? (
        
        orders.map((order) => (
          
          <article className="container-sm inline" key={order.id}>
             <div className="square border border-info p-2">              
                <div className="m-1">
                <div><h4>Orden nro: {order.id}</h4></div>
                    <div><b>Comprador:</b> {order.buyer.name} - email: {order.buyer.email}</div>
                     <div><b>Fecha: </b>{order.buyer.date.toDate().toLocaleDateString('es-AR', 
                       {year:"numeric", month:"short", day:"numeric",hour: "numeric", minute: "numeric",  second: "numeric"}
                     ) }</div>
                    <div> <b>Total: </b>{order.total}</div>
                </div>
                 {order.items.map((item)=>
                        <div key={item.key} className="square border border-success m-2">
                            <div>
                                <b>Producto: {item.title}</b>
                            </div>
                            <div>
                                <b>Cantidad: {item.quantity}</b>
                            </div>
                            <div>
                                <b>Precio * unidad: {item.price}</b>
                            </div>
                        </div>
                    )                
                 }
                
              </div>
          
          </article>
          
        ))
      ) : (
        <h3 style={{ margin: "5rem" }}></h3>
      )} 
    </div>
    
  )
}

export default OrdersView
