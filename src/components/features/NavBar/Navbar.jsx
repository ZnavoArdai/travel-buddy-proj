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
        <Navbar.Brand className="acc w-25 " as={Link} to={"/"}>
          <Image className="w-25" src="images/homeImage/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center ">
      
          </Nav>

          <Nav>
          <Nav.Link as={Link} to={"/profile"}  >

{newUser.NEWphoto ? (
  <div className=" ">

  <div className="card-img ">
  <Image width={59} className="img-fluid "
     
     src={newUser.NEWphoto}
   />
  </div>

   </div>
  
) : (
  <div className="card ">

 <div className="card-img">
 <Image width={59} className="img-fluid "
    
    src="https://www.w3schools.com/w3css/img_avatar3.png"
  />
 </div>

  </div>
)}{" "}
</Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>cart <FaCartArrowDown/> <span style={{color:"red"}}>{cart.length}</span></Nav.Link>

            <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/"}>Online users</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/about"}>About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/contact"}>contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  > 
              <div  onClick={logout}>Logout</div>
              </NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;
