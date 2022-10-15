// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// // import Image from 'react-bootstrap/Image'
// // import { Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




function Footer() {
  return (
<footer class="text-center text-lg-start  text-muted container-fluid"     style={{ backgroundColor: "#563D7C" }}>
  <section class="d-flex justify-content-center justify-content-lg-between p-4">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="" class="me-4 link-secondary ">
<FaFacebook size={50}/>
      </a>
      <a href="" class="me-4 link-secondary">
        <FaGithub size={50}/>
      </a>
      <a href="" class="me-4 link-secondary">
      <FaInstagramSquare size={50}/>

      </a>
      <a href="" class="me-4 link-secondary">
      <FaLinkedin size={50}/>

      </a>
     
    </div>
    
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
asdasd
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
         
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          
        </div>
         
      </div>
      
    </div>
  </section>

  
  <div class="text-center p-4">
    © 2021 Copyright:Znavo
  </div>
  
</footer>


    // <Navbar className='Footercontainer' collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:"#563D7C"}}>
    //   <Container>
      
            
    //         <Nav.Link href="#deets"><FaFacebook color='red' size={30}/></Nav.Link>
           
    //   </Container>
    // </Navbar>
    
  );
}

export default Footer;