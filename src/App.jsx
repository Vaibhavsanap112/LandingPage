import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Pricing from './Pages/Pricing'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>} ></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>

    </>
  )
}
export default App
