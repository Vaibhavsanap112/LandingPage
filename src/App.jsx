import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Pages/Home'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </Router>

    </>
  )
}
export default App
