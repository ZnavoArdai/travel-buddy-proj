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
  const newName = localStorage.getItem("NEWnameSignup");
  const newEmail = localStorage.getItem("NEWemailSignup");
  const NEWphoto = localStorage.getItem("NEWphotoSignup");
  const newLastName = localStorage.getItem("NEWlastNameSignup");


  return (
    <div className="App">
      <usercontext.Provider value={{ newName, newEmail, newLastName,NEWphoto }}>
        {newName && newEmail && newLastName ? (
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
