import React from 'react'
import Form from "react-bootstrap/Form";

const EditProfile = () => {
  return (
    <div>

<Form >
            <Form.Group className="mb-3" controlId="inputnameSignup">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                required
                // onChange={(e) => handleNameSignup(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputLastnameSignup">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter last name"
                autoFocus
                required
                // onChange={(e) => handleLastNameSignup(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputPhotoSignup">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="put Photo"
                autoFocus
                // onChange={(e) => handlePhotoSignup(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputemailSignup">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
                required
                // onChange={(e) => handleEmailSignup(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputpasswordSignup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="enter Password"
                autoFocus
                required
                // onChange={(e) => handlePasswordSignup(e)}
              />
            </Form.Group>
            
          </Form>
    </div>
  )
}

export default EditProfile