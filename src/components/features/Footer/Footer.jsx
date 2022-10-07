import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import Image from 'react-bootstrap/Image'
// import { Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (

    <Navbar className='Footercontainer' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      
            
            <Nav.Link href="#deets"><FaFacebook color='red' size={30}/></Nav.Link>
           
      </Container>
    </Navbar>
    
  );
}

export default Footer;