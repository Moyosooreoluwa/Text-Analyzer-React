import './App.css';
import BottomAnalysis from './components/Bottom-Analysis/BottomAnalysis';
import Navigation from './components/Navbar/Navigation';
import TextBox from './components/TextBox/TextBox';
import TopAnalysis from './components/Top-Analysis/TopAnalysis';
import Navbar from 'react-bootstrap/Navbar';

import github from './assets/images/github.ico';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <>
      <Navigation />
      <TopAnalysis />
      <TextBox />
      <BottomAnalysis />
      {/* <Navbar fixed='bottom'></Navbar> */}
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container className="bg-footer">
          <NavbarBrand className="bg-footer">M.A.I.</NavbarBrand>
          <Nav className="icon-bar bg-footer">
            <Nav.Link
              className="bg-footer"
              href="https://github.com/Moyosooreoluwa"
              target="__blank"
            >
              <img src={github} className="icon" alt="" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
