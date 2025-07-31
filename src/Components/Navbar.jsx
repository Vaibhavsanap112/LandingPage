import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-around mt-[30px]  cursor-pointer'>
      <div className='flex gap-[45px] list-none items-center'>
        <h1 className='mr-[15px] text-2xl font-bold mt-[0px]'>Lando</h1>
        <li className='font-semibold text-[19px]'>Home</li>
        <li  className='font-semibold text-[19px]'>Pricing</li>
        <li  className='font-semibold text-[19px]'>About us</li>
        <li  className='font-semibold text-[19px]'>Contact Us</li>
      </div>
      <div className='flex list-none gap-[50px] items-center'>
        <li  className='font-semibold text-[19px]' >Log in</li>
        <li  className='font-semibold bg-blue-600 py-[8px] px-[17px] rounded-2xl text-white'>Sign Up</li>
        </div>      
    </div>
  )
}

export default Navbar
