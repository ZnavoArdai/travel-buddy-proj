import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditProfile from '../EditProfile/EditProfile';

const Profile = () => {

  const {newUser}=useContext(usercontext)
  return (
    <div className='showCase'>

    <div className=' d-flex justify-content-center m-5 text-center '>

      <div>
      <Card className='container  '>
      {newUser.NEWphoto ? (
      <Card.Img  variant="top"   style={{height:"17rem"}} src={newUser.NEWphoto} />
      ) : (
        <Card.Img  variant="top"   style={{height:"17rem"}} src="https://www.w3schools.com/w3css/img_avatar3.png" />

            )}
      <Card.Body>
        <Card.Title>{newUser.newName}{" "}{newUser.newLastName}</Card.Title>
        <Card.Text>
          {newUser.newEmail}
        </Card.Text>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <EditProfile/>

    </Card>
      </div>
 
    </div>
   
    </div>
  )
}

export default Profile