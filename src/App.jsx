import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>

    </>
  )
}
export default App
