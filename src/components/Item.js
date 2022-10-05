import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const Item = ({info}) => {
  return (
    <>
        <div className='p-2 bg-light border' >
          
          <Row >
            <Col>
              <img src = {info.URLimage} style = { {width:"2rem"} } />
              <h4>{info.name}</h4>
              <h5>{info.price}</h5>
              {/* <NavLink to={`/item/${id}`}><Button variant="secondary" size="sm">Ver detalle</Button></NavLink> */}
            </Col>               
          </Row>
            
        </div>
   
    </>
    
  )
}

 export default Item

// import React from "react";
// import { Link } from "react-router-dom";
// import "./item.css";

// const Item = ({ info }) => {
// 	return (
// 		<Link to={`/detalle/${info.id}`} className="film">
// 			<img src={info.image} alt="" />
// 			<p>{info.title}</p>
// 		</Link>
// 	);
// };

// export default Item;