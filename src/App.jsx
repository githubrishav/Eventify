import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Events from './components/Events'


const App = () => {
  return (
  
   <BrowserRouter>
     <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<Signup/>}> </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/events' element={<Events/>}></Route>
  
    
   </Routes>
   </BrowserRouter>
  )
}

export default App