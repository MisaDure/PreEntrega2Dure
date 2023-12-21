import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link>ScisoAderezos</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Producto 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Producto 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Producto 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <button>
          🛒 1
        </button>
      </Container>
    </Navbar>
  );
}

export default NavBar;