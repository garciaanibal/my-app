import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
  
  const [item, setItem]= useState([]);
   
  const {id} = useParams();
  
  
   useEffect(()=>{
    // getProductsByCategory()

         const db = getFirestore();
         const itemsCollection = query(collection(db, "products"), where("id","==",(id)));
         getDocs(itemsCollection).then((snapshot)=>{
           console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
           setItem(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
           ;
         })
      
     
   },[])

  //  const getProductsByCategory = () => {
  //     const db=getFirestore()
  //     const itemsCollection = collection(db,'products')
  //     const q =query(itemsCollection, where ('category','==',categoryId))
  //     getDocs(q).then(snapshot=>{
  //       setItem(snapshot.docs.map(d=>({id: d.id, ...d.data()})));
  //     })

  // }



    // const getItem = () => { 
    //     return new Promise(resolve => {
    //       setTimeout(()=>{
    //         resolve( products.find( p => p.id == id));

    //       },2000)  
    //     })
    //  }

  return (
    <ItemDetail item={item}/>
  )
}
export default ItemDetailContainer