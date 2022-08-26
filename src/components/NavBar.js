import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Fomas de pagos</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="justify-content-right">
          <Nav.Link href="#link"> <CartWidget/> </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
 
}

export default NavBar;

