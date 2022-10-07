import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/Header/Header';
import RouterScreen from './Router/RouterScreen';
import { BrowserRouter } from 'react-router-dom';
import {usercontext} from "./context/Userpovider"
import { useState } from 'react';
import Footer from './components/features/Footer/Footer';
function App() {
  const [user,setUser]=useState("sdsad")
  return (
    <div className="App">
      <BrowserRouter>
      <usercontext.Provider value={{user,setUser}}>

      </usercontext.Provider>
      
      <Header/>
      <RouterScreen/>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
