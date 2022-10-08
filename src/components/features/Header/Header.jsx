import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'
import Navbarapp from '../NavBar/Navbar'


const Header = () => {
  const {newName, newEmail, newLastName,NEWphoto}=useContext(usercontext)
  return (
    <Navbarapp newName={newName} newEmail={newEmail} newLastName={newLastName} NEWphoto={NEWphoto}/>
  )
}

export default Header;
