import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/pages/Cart/Cart'
import Products from '../components/pages/Product/Products'
import { Product } from '../service/productItems'
import Clients from "../components/pages/Clients/Clients"
import About from '../components/pages/About/About'
import Contact from '../components/pages/Contact/Contact'
import Profile from '../components/pages/Profile/Profile'

const RouterScreen = () => {
  return (
    <Routes>
         <Route path='/' element={<Clients/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default RouterScreen;