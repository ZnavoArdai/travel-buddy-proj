import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/Header/Header';
import RouterScreen from './Router/RouterScreen';
import { BrowserRouter } from 'react-router-dom';
import {usercontext} from "./context/Userpovider"
import { useState } from 'react';
import Footer from './components/features/Footer/Footer';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
function App() {

  const newName = localStorage.getItem('newName2');
    const newEmail= localStorage.getItem('newEmail2');
    const newPassword = localStorage.getItem('newPassword2');

  return (
    <div className="App">
   <usercontext.Provider value={{newName,newEmail,newPassword}}>
      {newName&&newEmail&&newPassword?(
   <BrowserRouter>
   <Header/>
   <RouterScreen/>
   <Footer/>
   </BrowserRouter>
      ):<Home/>}
      </usercontext.Provider>

    </div>
  );
}

export default App;
