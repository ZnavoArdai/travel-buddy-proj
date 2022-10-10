import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/features/Header/Header";
import RouterScreen from "./Router/RouterScreen";
import { BrowserRouter } from "react-router-dom";
import { usercontext } from "./context/Userpovider";
import { useState } from "react";
import Footer from "./components/features/Footer/Footer";
import Login from "./components/features/Login/Login";
import Home from "./components/pages/Home/Home";
function App() {

  const newUser={
    newName: localStorage.getItem("NEWnameSignup"),
    newEmail:localStorage.getItem("NEWemailSignup"),
    NEWphoto:localStorage.getItem("NEWphotoSignup"),
    newLastName:localStorage.getItem("NEWlastNameSignup")
  }


console.log(newUser.newEmail)
  return (
    <div className="App">
      <usercontext.Provider value={{newUser}}>
        {newUser.newName &&newUser.newEmail && newUser.newLastName ? (
          <BrowserRouter>
            <Header />
            <RouterScreen />
            <Footer />
          </BrowserRouter>
        ) : (
          <Home />
        )}
      </usercontext.Provider>
    </div>
  );
}

export default App;
