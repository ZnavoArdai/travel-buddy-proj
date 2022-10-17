import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { usercontext } from "../../../context/Userpovider";

function Login() {
    const {user,setUser}=useContext(usercontext)
  const [show, setShow] = useState(false);

  const getInfoFromLocalStorge=()=>{
    if(name==localStorage.getItem('nameSignup')&&email==localStorage.getItem('emailSignup')&&password==localStorage.getItem('passwordSignup')){
        localStorage.setItem('NEWnameSignup', `${localStorage.getItem('nameSignup')}`);
        localStorage.setItem('NEWemailSignup', `${localStorage.getItem('emailSignup')}`);
        localStorage.setItem('NEWpasswordSignup', `${localStorage.getItem('passwordSignup')}`);
        localStorage.setItem('NEWsecPasswordSignup', `${localStorage.getItem('secPasswordSignup')}`);
        localStorage.setItem('NEWlastNameSignup', `${localStorage.getItem('lastNameSignup')}`);
        localStorage.setItem('NEWphotoSignup', `${localStorage.getItem('photoSignup')}`);
        setShow(false);
        window.location.reload()
    }
  }
  const handleClose = () => {
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
      <Button style={{width:120, backgroundColor: "#563D7C"}} variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
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
          <Button id="loginbtn" variant="primary" onClick={getInfoFromLocalStorge}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
