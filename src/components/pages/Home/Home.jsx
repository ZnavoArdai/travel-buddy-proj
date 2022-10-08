import React, { useContext } from "react";
import Signup from "../../features/signUp/Signup";
import Login from "../../features/Login/Login";

const Home = () => {
  return <div className="showCase">
<h1>home</h1>
<Login/>
<Signup/>
  </div>;
};

export default Home;
