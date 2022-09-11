import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = ({name,price,URLimage,description}) => {
  return (
    <>
    <Container>
        <div className="d-grid gap-2 justify-content-md-center">
          <Row className="justify-content-md-center">
            <Col>
              <h1>{name}</h1>
              <img src = {URLimage} style = { {width:"25rem"} }/>
             
            </Col>
                          
          </Row>
          <Row className="justify-content-md-center">
              <Col xs lg="3">
                
                <Button variant="secondary" size="sm">Ver detalle</Button>
              
                </Col>
          </Row>
            
        </div>
    </Container>    
    </>
    
  )
}

export default Item