import React from 'react'
function Component1() {
  return (
    <div className='flex justify-between mt-[50px] items-center ml-[30px]'>
      <div className='ml-[210px]'>
        <p className='font-bold text-6xl'>The Best Way <br /> To ShowCase <br /> your Project</p>
        <p  className='mt-[31px]'>Here you can put a short description about your project.</p>
        <div className='flex mt-[40px] '>
          <p className='bg-blue-400  mx-[20px] px-[9px] py-[6px] rounded-[8px]'>Try for free</p>
          <p className='border border-black px-[12px] items-center py-[6px] rounded-[8px]'>See how it works</p>
        </div>
      </div>
      <div className='ml-auto'>
        <img className='w-[70%]' src="/Home/Image1.png" alt="" />
      </div>
    </div>
  )
}
export default Component1