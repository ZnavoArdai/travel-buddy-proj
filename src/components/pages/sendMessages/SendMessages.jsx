import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaCircle } from 'react-icons/fa';


function SendMessages({item}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message,setMessage]=useState();


  const handelMessageChange=(e)=>{
    setMessage(e.target.value)
  }
  const sendMessage=()=>{
    window.location.replace("https://wa.me/+9720523549180?text="+message)

  }

 
  return (
    <>
      <Button style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}} variant="primary" onClick={handleShow}>
    Send Message
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MAKE NEW FRIENDS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Image src={item.image} className="img-fluid"/>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>send message to:{item.name} <FaCircle className='text-success'/></Form.Label>
              <Form.Control placeholder='enter message here' as="textarea" rows={3} onChange={(e)=>handelMessageChange(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendMessage} target="blank">
            SEND
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendMessages;