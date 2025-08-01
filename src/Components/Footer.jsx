import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-[95px] list-none font-semibold text-[19px] mt-[12%]'>
      <div className=''>
        <h1 className='mb-[13px] text-2xl font-bold'><Link to={"/"}>Lando</Link></h1>
        <p className=''>2021 @ Lando</p>
        <p>All rights reserved</p>
      </div>
      <div className=" flex  flex-col gap-[17px]">
        <li><Link to={"/"}>Home</Link></li>
        <li> <Link to={"/pricing"}> Pricing</Link></li>
        <li>  <Link to={"/aboutus"}>About Us</Link></li>
        <li> <Link to={"/contact"}>Contact Us</Link></li>
      </div>
      <div className=" flex  flex-col gap-[17px]">
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
