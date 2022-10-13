import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditProfile from '../../../EditProfile/EditProfile';

const Profile = () => {

  const {newUser}=useContext(usercontext)
  return (
    <div className='showCase'>
            <h1>profile</h1>

    <div className=' d-flex justify-content-center mt-5'>

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
        <Button  style={{background:"#FFE484",borderBlockColor:"#563D7C",color:"black"}}>send massage</Button>
      </Card.Body>
    </Card>
      </div>
 
    </div>
    <div className='d-flex justify-content-center '>
<EditProfile/>

      </div>
    </div>
  )
}

export default Profile