
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from "firebase/firestore"

function ItemListContainer({greeting}) {
 
      const [items, setItems] = useState([])
      let { categoryid } = useParams()

      useEffect(() => {
        
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
        getDocs(itemsCollection).then((snapshot)=>{
          // console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
          const products = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() }))

        typeof categoryid === 'undefined'? setItems(products) : setItems(products.filter(p=>p.category==categoryid));

      })
    },[categoryid])
 

  return (
    <>
     <div className='center'>
        <h2  align='center'>{greeting}</h2> 
      </div>
      <div className='d-inline-flex p-2 bd-highlight'>
        { items.map(i=>
          <div key={i.id} className='d-grid gap-3'>
            <div align='center' className='p-2 bg-light border'>
              <h2>{i.name}</h2>     
              <img src={i.URLimage} style = {{width:"12rem"}}/>
              <h5>Precio: </h5> 
              <h5>{i.price}</h5>

              <Link to={`/item/${i.id}`}>           
                <Button variant="secondary" size="sm">Ver detalle</Button>
              </Link>  

            </div>
            
          </div>
          
          )
        }
        {'  '}
      </div>
    </>
  )
}

export default ItemListContainer

