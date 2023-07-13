import './Navigation.css';

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import github from '../../assets/images/github.ico';
//  '../../assets/images/github.ico';
const Navigation = () => {
  return (
    // <Navbar expand='lg' className='bg-body-tertiary'></Navbar>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBrand href="/">Text-Analyzer</NavbarBrand>
        <Nav className="icon-bar">
          <Nav.Link href="https://github.com/Moyosooreoluwa" target="__blank">
            <img src={github} className="icon" alt="" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
