import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


const EditProfile = () => {

const [changeProfile,setChangeProfile]=useState({fname:"",lname:"",photo:"",email:"",password:""})


const onsubmit=()=>{
  localStorage.setItem('NEWnameSignup', changeProfile.fname);
  localStorage.setItem('NEWemailSignup', changeProfile.email);
  localStorage.setItem('NEWpasswordSignup', changeProfile.password);
  localStorage.setItem('NEWlastNameSignup', changeProfile.lname);
  localStorage.setItem('NEWphotoSignup', changeProfile.photo);
}
const handeProfileINputs=(e)=>{
  setChangeProfile({...changeProfile,[e.target.name]:e.target.value})
}
  return (
    <div className='profileform text-center '>
<Form>
            <Form.Group className="mb-3" controlId="newNAME">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter name"
                autoFocus
                required
                name='fname'
                onChange={(e) => handeProfileINputs(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="NEWLANEM">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter last name"
                autoFocus
                required
                name='lname'
                onChange={(e) => handeProfileINputs(e)}              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="put Photo"
                autoFocus
                name='photo'
                onChange={(e) => handeProfileINputs(e)}              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
                required
                name='email'
                onChange={(e) => handeProfileINputs(e)}              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="enter Password"
                autoFocus
                required
                name='password'
                onChange={(e) => handeProfileINputs(e)}              />
            </Form.Group>

            
          </Form>
          <Button style={{background:"#FFE484",borderBlockColor:"#563D7C"}} onClick={onsubmit} >Submit</Button>

    </div>
  )
}

export default EditProfile