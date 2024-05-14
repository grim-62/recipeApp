import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/components/Home'
import Recipe from '../src/components/Recipe'
import About from '../src/components/About'
import Update from '../src/components/Update'
import Create from '../src/components/Create'
import Detrecipe from '../src/components/Detrecipe'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/recipe/:id' element={<Detrecipe/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default Router