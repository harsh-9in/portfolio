import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarHeader.css';
import '../index.css';


function NavbarHeader() {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="/">Harsh Kumar</Navbar.Brand>
        </Container>
        <Nav className="me-auto">
            <Nav.Link href="resume">Resume</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
      </Navbar>
    )
}

export default NavbarHeader;