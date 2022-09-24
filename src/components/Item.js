import React from 'react'
import Button from 'react-bootstrap/esm/Button'
// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const Item = ({name,URLimage,id}) => {
  return (
    <>
        <div className='p-2 bg-light border'>
          
          <Row >
            <Col>
              <img src = {URLimage} style = { {width:"2rem"} } />
              <h4>{name}</h4>
              <NavLink to={`/item/${id}`}><Button variant="secondary" size="sm">Ver detalle</Button></NavLink>
            </Col>               
          </Row>
            
        </div>
   
    </>
    
  )
}

export default Item