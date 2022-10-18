
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
<FaFacebook size={35}/>
      </a>
      <a href="https://github.com/ZnavoArdai" class="me-4 link-secondary " target="blank">
        <FaGithub size={35}/>
      </a>
      <a href="https://www.instagram.com/ardai_z/" class="me-4 link-secondary" target="blank">
      <FaInstagramSquare size={35}/>

      </a>
      <a href="https://www.linkedin.com/in/znavo-ardai-4035a9238/" class="me-4 link-secondary" target="blank">
      <FaLinkedin size={35}/>

      </a>
     
    </div>
    
  </section>

  <div class="text-center p-4">
    © 2021 Copyright:Znavo
  </div>
  
</footer>
    
  );
}

export default Footer;