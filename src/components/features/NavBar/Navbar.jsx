import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
// import { Button } from 'react-bootstrap';

function Navbarapp({ userlog }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          {" "}
          TravelBUDDY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
          {userlog ? (

<Nav.Link href="/Login">
  <Image src="https://www.w3schools.com/w3css/img_avatar3.png" width={30}/>
  <p>{userlog}</p>
</Nav.Link>
) : (
<Nav.Link href="/Login">Login</Nav.Link>
)}
            <Nav.Link href="/">Home</Nav.Link>
       
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;
