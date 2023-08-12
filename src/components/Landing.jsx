import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import AddDoctor from './AddDoctor'

const Landing = () => {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/adddoctor' element={<AddDoctor/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Landing