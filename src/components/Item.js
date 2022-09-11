import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({name,URLimage}) => {
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
                
                <Link to={'/item/1'}><Button variant="secondary" size="sm">Ver detalle</Button></Link>
              
                </Col>
          </Row>
            
        </div>
    </Container>    
    </>
    
  )
}

export default Item