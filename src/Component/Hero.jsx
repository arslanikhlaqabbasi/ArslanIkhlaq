import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";





export default function Hero() {
  return (<>
    <div className='grid grid-cols-12 h-[500px] bg-[#f6f6f8]'>
        <div className='  col-span-1 grid   place-content-center gap-4 grid-flow-row-dense items-center'>
        <FiFacebook  className='w-7 h-7'/>
        <FiInstagram  className='w-7 h-7'/>
        <FiTwitter className='w-7 h-7'/>
        <FiLinkedin className='w-7 h-7'/>




        </div>
        <div className=' col-span-1'></div>
        <div className='grid items-center justify-items-center place-content-center pr-5  col-span-5 bg-red'>
         <div><div><h1 className='text-yellow-500 text-[18px]  font-semibold'>Hi, I`am</h1></div>
          <div><h1 className='text-[30px] font-extrabold'>ARSLAN IKHLAQ</h1></div>
          <div><h1 className=' font-semibold text-[20px]'>Full Stack Web Developer</h1></div>
          <div><h1 className=' line-clamp-2 text-[16px] font-light '>Skilled React Full Stack Developer proficient in modern web technologies, passionate about creating intuitive user experiences and optimizing backend systems.</h1></div>
          <div className='flex py-4 gap-4'><button className='bg-[#ff9543] px-5 py-2 rounded-full'>Download CV</button><button className='border-2 px-5 py-2 border-[#ff9543] rounded-full'>Contact Me</button></div>
          </div> 
        </div>
        <div className="  col-span-4  bg-cover bg-no-repeat  bg-origin-content origin-left" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/arsalan.png)`}}> </div>
        <div className='col-span-1'></div>
    </div>
    <div className='relative flex justify-center py-2  rounded-full '>  <div className='  absolute m-[-60px] h-24 w-[60%] bg-white rounded-full py-6 shadow-lg  '><div className='flex  w-[100%] rounded-full h-full gap-1 bg-slate-200 overflow-hidden'><div className='w-[33%] h-full bg-white'></div><div className='w-[33%] bg-white h-full'></div><div className='w-[33%] h-full bg-white'></div></div></div></div>
    </>
  )
}
