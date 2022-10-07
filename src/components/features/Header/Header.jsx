import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'
import Navbarapp from '../NavBar/Navbar'


const Header = () => {
  const {user}=useContext(usercontext)
  return (
    <Navbarapp userlog={user}/>
  )
}

export default Header;
