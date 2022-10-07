import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Item = ({info}) => {
  return (
    <>
        <div className='p-2 bg-light border' >
          
          <Row >
            <Col>
              <img src = {info.URLimage} style = { {width:"2rem"} } />
              <h4>{info.name}</h4>
              <h5>{info.price}</h5>
             
            </Col>               
          </Row>
            
        </div>
   
    </>
    
  )
}

 export default Item

