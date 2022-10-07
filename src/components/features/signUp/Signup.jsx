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
   localStorage.setItem('newName', `${nameSignup}`);
   localStorage.setItem('newEmail', `${emailSignup}`);
   localStorage.setItem('newPassword', `${passwordSignup}`);
   setShowSignup(false);
  };
  const handleShowSignup = () => setShowSignup(true);

  const [nameSignup, setNameSignup] = useState();
  const [emailSignup, setEmailSignup] = useState();
  const [passwordSignup, setPasswordSignup] = useState();

  const handleNameSignup = (e) => {
    setNameSignup(e.target.value);
  };
  const handleEmailSignup = (e) => {
    setEmailSignup(e.target.value);
  };
  const handlePasswordSignup = (e) => {
    setPasswordSignup(e.target.value);
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
                onChange={(e) => handleNameSignup(e)}
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