
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({ data }) => {
	const [irAlCart, setIrAlCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setIrAlCart(true);
		addProduct(data, quantity);
		console.log(data)  
	};

	return (
		<div align='center'>

				<img src={data.URLimage} style = { {width:"15rem"} } />
				<div className="content">
					<h1>{data.name}</h1>
					<h5>Precio: {data.price} </h5> 
					{
					irAlCart ? (
					<div>
						<Link to={'/Cart'}>      
							
						<Button variant="secondary" size="sm">Terminar compra</Button>
						</Link>{' '}
					
						<Link to={'/'}>
						<Button variant="primary" size="sm">Seguir comprando</Button>
						</Link>
					</div>
						  ) : (
					<div className='m-0 row justify-content-center'>
						<div className='col-md-2 col-auto text-center'>
							<ItemCount inicio={0} stock={5}  onAdd={onAdd} />
						</div>
					</div>
					)}
				</div>
			
		</div>
	);
};

export default ItemDetail;
