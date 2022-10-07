import React, { useContext } from 'react'
import { usercontext } from '../../../context/Userpovider'

const Home = () => {
  const {user,setUser}=useContext(usercontext)
  return (
    <div className='showCase'>Home{user}
    <div id="display"></div>
    </div>
  )
}

export default Home