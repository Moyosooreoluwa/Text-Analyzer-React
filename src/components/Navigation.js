import './Navigation.css';

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import github from '../assets/github.ico';
const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="/">Text-Analyzer</NavbarBrand>
          <Nav className="icon-bar">
            <Nav.Link href="https://github.com/Moyosooreoluwa" target="__blank">
              <Image src={github} className="icon" alt="" roundedCircle />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
