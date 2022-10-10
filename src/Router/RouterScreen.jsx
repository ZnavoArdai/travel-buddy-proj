import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/pages/Cart/Cart'
import Products from '../components/pages/Community/Products'
import { Product } from '../service/productItems'
import Clients from "../components/pages/Clients/Clients"

const RouterScreen = () => {
  return (
    <Routes>
         <Route path='/' element={<Clients/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<Products/>}/>
        <Route path='/contact' element={<Products/>}/>
        <Route path='/profile' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>


    </Routes>
  )
}

export default RouterScreen;