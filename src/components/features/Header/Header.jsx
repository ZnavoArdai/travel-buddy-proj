import React, { useContext } from 'react'
import { cartContext } from '../../../context/CartContext'
import { usercontext } from '../../../context/Userpovider'
import Navbarapp from '../NavBar/Navbar'


const Header = () => {
  const {newUser}=useContext(usercontext)
  const {cart}=useContext(cartContext)

  return (
    <div>
    <Navbarapp newUser={newUser} cart={cart} />
    </div>
  )
}

export default Header;
