import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
// import { Button } from 'react-bootstrap';

function Navbarapp({ newName, newEmail, newLastName, NEWphoto }) {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" bg="red" style={{backgroundColor:"#563D7C"}}>
      <Container>
        <Navbar.Brand className="acc" as={Link} to={"/Community"}>
          {" "}
          TravelBUDDY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center ">
            {NEWphoto?(<Image width={50} src={NEWphoto} />):(<Image width={50} src="https://www.w3schools.com/w3css/img_avatar3.png" />)

}            <p className="text-light position-fixed ">{newName }</p>

          </Nav>

          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>

            <Nav.Link>Profile</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/"}>
                Community
              </NavDropdown.Item>
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
