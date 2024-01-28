import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import {useState} from 'react'



export default function Menu() {
    const [toggle, setToggle]=useState(true);

    function toggleFunction() {
        setToggle(!toggle);
        console.log(toggle)
    }
  return (
<div class='flex flex-wrap'>
    <div class='flex sm:justify-center justify-start items-center sm:w-[30%]  w-[50%] '>
        <div class='px-5 py-1'>
            <img src='https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-5912.jpg' alt='no image' width='70' height='70'/>
        </div>
    </div>
    <div class='lg:w-[10%] w-[50%] items-center  sm:hidden flex justify-end sm:justify-center' onClick={toggleFunction}><div className='p-5'>{toggle}<FiAlignJustify   className='w-10 h-10'/></div>
</div>
    <div className={'sm:w-[70%] sm:flex sm:justify-center ' + (toggle ? 'w-[100%] flex justify-center' : 'hidden')}>
        <ul className='px-5  sm:flex sm:justify-center sm:items-center  grid grid-cols-1 text-[15px] sm:space-x-4  font-medium'>
            <li className='px-2'>
                Home
            </li>
            <li className='px-2'>
                Services
            </li>
            <li className='px-2'>
                About Us
            </li>
            <li className='px-2'>
                Contact Us
            </li>
            <li><button className=' bg-[#ff9543] px-5 py-2 rounded-full'>Contact Me</button></li>
        </ul>
    </div>
</div>


  )
}
