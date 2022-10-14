import"./Clients.css"
import React, { useEffect, useState } from 'react'
import OnlineUsersCard from '../OnlineUsersCard/OnlineUsersCard';
import {ClientsData} from "../../../service/ClientsData"
const Clients = () => {

  const [apiUser,setApiUser]=useState([])
  const [searchClients,setSearchClients]=useState("")

  useEffect(()=>{
  setTimeout(()=>{
    setApiUser(ClientsData.items)
  },3000)
  },[])
console.log(apiUser)
  const serchInputClientes=(e)=>{
    setSearchClients(e.target.value)
  }
  return (
    <div className="showCase">
           <div className="  d-flex justify-content-center mt-5">
        <div className="input-group rounded w-25 ">
          <input
            type="search"
            onChange={(e) => serchInputClientes(e)}
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            style={{
              background: "#FFE484",
              borderBlockColor: "#563D7C",
              color: "black",
            }}
          >
            search
          </button>
        </div>
      </div>
    <div className='ClientsItemCards mt-5 container-fluid d-flex justify-content-center mb-5'>
<div className="row justify-content-center" id="dis"> 

{!apiUser.length?(
  <img src="images/loding/loadinggif.gif" alt="" />
):(

  apiUser.filter((items)=>items.name.toLowerCase().includes(searchClients.toLowerCase())).map((item)=>

  <OnlineUsersCard item={item} />)
)}

</div>
    </div>
   
    </div>
  )
}

export default Clients;