import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa';
import { json } from 'react-router-dom';


function AddItem({productS,setProductS}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addForm,setAddForm]=useState({id: JSON.stringify(productS.items.length+1),name:"znavooo ",image:"ASd",describe:"sadasd",price:20,amount:1})

  const addnewProduct=()=>{
const newArrayOfPRO={...productS,...productS.items.push(addForm)}

    setProductS(newArrayOfPRO)
    console.log(newArrayOfPRO);
    setShow(false)
    
  }
const handelAddForm=(e)=>{
  setAddForm({...addForm,[e.target.name]:e.target.value})
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaPlus/>
    
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        
            <Form.Group className="mb-3" >
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                name='name'
                onChange={(e)=>handelAddForm(e)}
              />

            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                name='image'
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>handelAddForm(e)}

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>describe</Form.Label>
              <Form.Control
                type="text"
                placeholder="describe"
                name='describe'
                autoFocus
                onChange={(e)=>handelAddForm(e)}

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                autoFocus
                name='price'
                onChange={(e)=>handelAddForm(e)}

              />
            </Form.Group>
         
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary " onClick={addnewProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;