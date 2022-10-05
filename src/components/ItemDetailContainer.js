import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import {doc, getDoc, getFirestore, } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [data, setData]= useState({});

  const { id } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, 'products', id);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));

	}, [id]);

	return <ItemDetail data={data} />;

}
export default ItemDetailContainer