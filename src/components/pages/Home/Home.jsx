import React, { useContext } from "react";
import Signup from "../../features/signUp/Signup";
import Login from "../../features/Login/Login";

const Home = () => {
  return <div className="showCase ">
  <img src='images/homeImage/homeImg.jpg' className='img-fluid shadow-4  ' alt='...' />
<div className=" ">
<div class=" card-img-overlay text-center p-5 ">

  <div class="card-body  ">
    <h1 class="card-title text-bg-light bg-opacity-50 ">Where People Meet
</h1>
    <Login/>
<Signup/>  </div>
 
</div>
  
</div>
  {/* <div className=" flex-column ">
  <Login/>
<Signup/>
  </div> */}

</div>


};

export default Home;
