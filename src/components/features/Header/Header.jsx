import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'
import Navbarapp from '../NavBar/Navbar'


const Header = () => {
  const {newUser}=useContext(usercontext)
  return (
    <Navbarapp newUser={newUser}/>
  )
}

export default Header;
