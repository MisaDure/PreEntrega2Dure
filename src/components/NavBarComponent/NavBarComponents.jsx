import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UseCategories } from '../../hooks/UseCategories';
import { Link } from 'react-router-dom';

function NavBar() {

  const {category} = UseCategories();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ScisoAderezos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {
                category.map((item, index) =>{
                  return( 
                  <NavDropdown.Item key={index} href='#action/3.1'>
                    <Link to={`/category/${item}`}>{item}</Link>
                    </NavDropdown.Item>);
                })
              }
              
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