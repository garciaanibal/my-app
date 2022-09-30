import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "./productData";
import { collection, getDocs, getFiresore, getFirestore, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
   const [item, setItem]= useState([]);
   const {id} = useParams();
    useEffect(()=>{
        // getItem().then( data => {
        //     console.log(data);
        //     setItem(data)

        // })

        const db = getFirestore();
        const itemsCollection = query(collection(db, "products"), where("id","==",parseInt(id)));
        getDocs(itemsCollection).then((snapshot)=>{
          console.log(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
          setItem(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data() })))
          //console.log("ITEM:"+item[id]);
        })
      
        return () => {
        }
   },[])
   
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