import React, { useContext } from "react";
import { usercontext } from "../../../context/Userpovider";
import Signup from "../../features/signUp/Signup";
import Login from "../Login/Login";

const Home = () => {
  const { user, setUser } = useContext(usercontext);
  return <div className="showCase">
<h1>home</h1>
<Login/>
<Signup/>
  </div>;
};

export default Home;
