import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    // <Navbar expand='lg' className='bg-body-tertiary'></Navbar>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="/">Text-Analyzer</NavbarBrand>
        <Nav>
          <Nav.Link href="#">Github</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
