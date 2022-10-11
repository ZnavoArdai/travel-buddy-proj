import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaCartArrowDown } from 'react-icons/fa';


// import { Button } from 'react-bootstrap';

function Navbarapp({ newUser,cart }) {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="red"
      style={{ backgroundColor: "#563D7C" }}
    >
      <Container>
        <Navbar.Brand className="acc" as={Link} to={"/"}>
          {" "}
          TravelBUDDY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center ">
            {newUser.NEWphoto ? (
              <Image width={50} src={newUser.NEWphoto} />
            ) : (
              <Image
                width={50}
                src="https://www.w3schools.com/w3css/img_avatar3.png"
              />
            )}{" "}
            <p className="text-light position-fixed ">{newUser.newName}</p>
          </Nav>

          <Nav>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>cart <FaCartArrowDown/> <span style={{color:"red"}}>{cart.length}</span></Nav.Link>

            <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/about"}>About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/contact"}>contact</NavDropdown.Item>
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
