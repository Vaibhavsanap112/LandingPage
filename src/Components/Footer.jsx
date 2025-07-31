import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-center gap-[95px] list-none font-semibold text-[19px] mt-[12%]'>
      <div className=''>
        <h1 className='mb-[13px] text-2xl font-bold'>Lando</h1>
        <p className=''>2021 @ Lando</p>
        <p>All rights reserved</p>
      </div>
      <div className=" flex flex-col gap-[17px]">
        <li>Home</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </div>
      <div className=" flex flex-col gap-[17px]">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
    
      </div>
      <div>
        <p>Privacy Policy</p>
        <p>Terms Of service</p>
      </div>
      
    </div>
  )
}

export default Footer
