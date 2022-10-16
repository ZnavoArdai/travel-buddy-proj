import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Signup() {
  const [showSignup, setShowSignup] = useState(false);
  const handleShowSignup = () => setShowSignup(true);
  const [nameSignup, setNameSignup] = useState("");
  const [lastNameSignup, setLastNameSignup] = useState("");
  const [photoSignup, setPhotoSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [secPasswordSignup, setSecPasswordSignup] = useState("");
  const [formEror,setFormEror]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)



  const handleCloseSignup = () => {
    setShowSignup(false);

  };



  const handleSignup = () => {
   localStorage.setItem('nameSignup', `${nameSignup}`);
   localStorage.setItem('emailSignup', `${emailSignup}`);
   localStorage.setItem('passwordSignup', `${passwordSignup}`);
   localStorage.setItem('secPasswordSignup', `${secPasswordSignup}`);
   localStorage.setItem('lastNameSignup', `${lastNameSignup}`);
   localStorage.setItem('photoSignup', `${photoSignup}`);

   setFormEror(validate())
   setIsSubmit(true);
   if(Object.keys(formEror).length==0&&isSubmit){
   setShowSignup(false);

  }

   
  };

  const validate=()=>{
    const eror={};
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if(!nameSignup){
      eror.userName="name required"
    }
    if(!lastNameSignup){
      eror.userLastName="name required"
    }
    if(!emailSignup){
      eror.userEmail="email required"
    }
    else if(!regex.test(emailSignup)){
      eror.userEmail="not valid"
    }
    if(!passwordSignup){
      eror.userPassword="password required"
    }
    if(!secPasswordSignup){
      eror.userPasswordTwo="second password required"
    }
    else if(passwordSignup!==secPasswordSignup){
      eror.userPasswordTwo="password not equals"
    }
    return eror;
  }

  useEffect(()=>{
    console.log(formEror)
if(Object.keys(formEror).length==0&&isSubmit){
}
  },[formEror])



  const handleNameSignup = (e) => {
    setNameSignup(e.target.value);
  };
  const handleLastNameSignup = (e) => {
    setLastNameSignup(e.target.value);
  };
  const handlePhotoSignup = (e) => {
    setPhotoSignup(e.target.value);
  };
  const handleEmailSignup = (e) => {
    setEmailSignup(e.target.value);
  };
  const handlePasswordSignup = (e) => {
    setPasswordSignup(e.target.value);
  };
  const handleSecPasswordSignup = (e) => {
    setSecPasswordSignup(e.target.value);
  };


  return (
    <>
      <Button style={{width:120,backgroundColor: "#563D7C" }} variant="primary" onClick={handleShowSignup}>
        sign up
      </Button>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="inputnameSignup">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                required
                onChange={(e) => handleNameSignup(e)}
              />
              <p style={{color:"red"}}>{formEror.userName}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputLastnameSignup">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter last name"
                autoFocus
                required
                onChange={(e) => handleLastNameSignup(e)}
              />
            <p style={{color:"red"}}>{formEror.userLastName}</p>

            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPhotoSignup">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="put Photo"
                autoFocus
                onChange={(e) => handlePhotoSignup(e)}
              />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputemailSignup">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
                required
                onChange={(e) => handleEmailSignup(e)}
              />
            <p style={{color:"red"}}>{formEror.userEmail}</p>

            </Form.Group>
            <Form.Group className="mb-3" controlId="inputpasswordSignup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="enter Password"
                autoFocus
                required
                onChange={(e) => handlePasswordSignup(e)}
              />
             <p style={{color:"red"}}>{formEror.userPassword}</p>

            </Form.Group>
            <Form.Group className="mb-3" controlId="inputSecpasswordSignup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password check"
                autoFocus
                required
                onChange={(e) => handleSecPasswordSignup(e)}
              />
             <p style={{color:"red"}}>{formEror.userPasswordTwo}</p>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignup}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Signup;