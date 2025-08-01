import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row justify-around mt-[30px]  cursor-pointer'>
      <div className='flex flex-col md:flex-row gap-[45px] list-none items-center'>
        <h1 className='mr-[15px] text-2xl font-bold mt-[0px]'><Link to={"/"}>Lando</Link></h1>
        <li className='font-semibold text-[19px]'> <Link to={"/"}> Home</Link></li>
        <li  className='font-semibold text-[19px]'><Link to={"/pricing"}> Pricing</Link> </li>
        <li  className='font-semibold text-[19px]'> <Link to={"/aboutus"}>About Us</Link></li>
        <li  className='font-semibold text-[19px]'><Link to={"/contact"}>Contact Us</Link> </li>
      </div>
      <div className='flex flex-col md:flex-row list-none gap-[50px] items-center'>
        <li  className='font-semibold text-[19px]'  ><Link to={"/login"}>Log in</Link></li>
        <li  className='font-semibold bg-blue-600 py-[8px] px-[17px] rounded-2xl text-white'>Sign Up</li>
        </div>      
    </div>
  )
}

export default Navbar
