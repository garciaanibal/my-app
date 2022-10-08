import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js'
import{ Link } from 'react-router-dom';

function NavBar( ) {
  
  return (
    <Navbar bg="light" expand="lg">
    <Container> 
      <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit'}} >
        <Navbar.Brand>Inicio</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link  to={'/category/electrodoméstico'} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                  <Nav.Link href="#link">Electrodomésticos</Nav.Link>
                </Link>
                <Link  to={'/category/herramientas'} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                  <Nav.Link href="#link">Herramientas</Nav.Link>
                </Link>
                <Link  to={'/orders'} style={{ color: 'inherit', textDecoration: 'inherit'}} >
                  <Nav.Link href="#link">Ver Ordenes</Nav.Link>
                </Link>  
                 
                 
              </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse ></Navbar.Collapse>
          <Navbar.Collapse >
            <Nav.Link > 
              <Link to={'/cart'}><CartWidget/></Link> 
            </Nav.Link>
          </Navbar.Collapse>
      </Container>
     </Navbar>
    
    
  );
 
}

export default NavBar;

