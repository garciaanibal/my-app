import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [item, setItem]= useState({});

  const {id} = useParams();


   useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = query(collection(db, 'products'), where("id","==",parseInt(id)));
    getDocs(itemsCollection).then((snapshot)=>{
      console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
      setItem(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
    })
  


   },[])


  return (
    <ItemDetail item={item}/>
  )
}
export default ItemDetailContainer