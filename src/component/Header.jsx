import React, { useState } from 'react'

const Header = () => {
  const[toggle,setToggle] = useState(false)
  return (
    <header className='flex justify-between px-5 bg-blue-900 text-white py-5 sticky top-0 '>
        <h3><i class="fa-solid fa-house text-2xl"></i></h3>
        <nav className='hidden md:block'>
            <ul className='flex gap-5 font-bold'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
            {toggle && 
          <nav className='block md:hidden '>
            <ul className='gap-5 font-bold mobile-menu' onClick={()=>setToggle(!toggle)}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> 
        </nav> }
            <button className='block md:hidden'><i class="fa-solid fa-bars" onClick={()=>setToggle(!toggle)}></i></button>
    </header>
  )
}

export default Header