import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Signup() {
  const [showSignup, setShowSignup] = useState(false);
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



   setShowSignup(false);
  };
  const handleShowSignup = () => setShowSignup(true);

  const [nameSignup, setNameSignup] = useState("");
  const [lastNameSignup, setLastNameSignup] = useState("");
  const [photoSignup, setPhotoSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [secPasswordSignup, setSecPasswordSignup] = useState("");

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
      <Button variant="primary" onClick={handleShowSignup}>
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
                pattern="[a-zA-Z0-9]+"
                onChange={(e) => handleNameSignup(e)}
              />
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