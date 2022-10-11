import"./Clients.css"
import React, { useEffect, useState } from 'react'
import { getUser } from '../../../service/OnlineUsersServise';
import OnlineUsersCard from '../OnlineUsersCard/OnlineUsersCard';
const Clients = () => {

  const [apiUser,setApiUser]=useState([])

  useEffect(()=>{
    getUser().then((res)=>setApiUser(res))
  },[])
  console.log(apiUser)
  return (
    <div className='onlineUsers mt-5 '>
{
  apiUser.map((item)=>

  <OnlineUsersCard item={item}/>
  )
}

    </div>
  )
}

export default Clients;