import"./Clients.css"
import React, { useEffect, useState } from 'react'
import { getUser } from '../../../service/OnlineUsersServise';
import OnlineUsersCard from '../OnlineUsersCard/OnlineUsersCard';
const Clients = () => {

  const [apiUser,setApiUser]=useState([])

  useEffect(()=>{
  setTimeout(()=>{
    getUser().then((res)=>setApiUser(res))

  },3000)
  },[])
  console.log(apiUser)
  return (
    <div>
    <div className='ClientsItemCards mt-5 container-fluid d-flex justify-content-center mb-5'>
<div className="row justify-content-center" id="dis"> 

{!apiUser.length?(
  <img src="images/loding/loadinggif.gif" alt="" />
):(

  apiUser.map((item,index)=>

  <OnlineUsersCard item={item} index={index}/>)
)}

</div>
    </div>
   
    </div>
  )
}

export default Clients;