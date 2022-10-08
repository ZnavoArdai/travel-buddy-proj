import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from '../components/pages/Community/Community'

const RouterScreen = () => {
  return (
    <Routes>
        <Route path='/' element={<Community/>}/>
        <Route path='/clients' element={<Community/>}/>
        <Route path='/about' element={<Community/>}/>
        <Route path='/contact' element={<Community/>}/>
        <Route path='/profile' element={<Community/>}/>


    </Routes>
  )
}

export default RouterScreen