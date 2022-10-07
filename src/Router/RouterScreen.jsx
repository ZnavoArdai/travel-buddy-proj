import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from '../components/pages/Community/Community'

const RouterScreen = () => {
  return (
    <Routes>
        <Route path='/Community' element={<Community/>}/>
    </Routes>
  )
}

export default RouterScreen