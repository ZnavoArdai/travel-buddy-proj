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
import { cartContext } from "./context/CartContext";
function App() {
  const [cart, setCart] = useState([]);
  const newUser = {
    newName: localStorage.getItem("NEWnameSignup"),
    newEmail: localStorage.getItem("NEWemailSignup"),
    NEWphoto: localStorage.getItem("NEWphotoSignup"),
    newLastName: localStorage.getItem("NEWlastNameSignup"),
  };

  return (
    <div className="App">
      <usercontext.Provider value={{ newUser }}>
        <cartContext.Provider value={{cart,setCart}}>
          {newUser.newName && newUser.newEmail && newUser.newLastName ? (
            <BrowserRouter>
              <Header />
              <RouterScreen />
              <Footer />
            </BrowserRouter>
          ) : (
            <Home />
          )}
        </cartContext.Provider>
      </usercontext.Provider>
    </div>
  );
}

export default App;
