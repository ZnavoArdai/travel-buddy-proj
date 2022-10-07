import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    {
      document.getElementById("display").innerText = name;
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="inputname">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                onChange={(e) => handleName(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputemail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
                onChange={(e) => handleEmail(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputpassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="enter Password"
                autoFocus
                onChange={(e) => handlePassword(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
