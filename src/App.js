import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Navigation from './components/Navigation';
import github from './assets/images/github.ico';
import Analysis from './components/Analysis/Analysis';

import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <>
      <Navigation />
      <Analysis />
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container className="bg-footer">
          <NavbarBrand className="bg-footer">M. A. I.</NavbarBrand>
          <Nav className="icon-bar bg-footer">
            <Nav.Link
              className="bg-footer"
              href="https://github.com/Moyosooreoluwa"
              target="__blank"
            >
              <Image src={github} className="icon" alt="" roundedCircle />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
