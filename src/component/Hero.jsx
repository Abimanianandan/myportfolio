import React from 'react'
import hero1 from '../assets/images/hero-1.png'
import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineFacebook } from "react-icons/ai";
const Hero = () => {
   const config = {
      subTitle : "Full-stack developer(MERN)"
   }
  return (
     <section className='md:flex justify-center px-5 py-20 bg-blue-600 ' id='hero'>
        <div >
            <h1 data-aos="fade-up-right" data-aos-duration="1000" className=' text-6xl ibrand text-white'>Hi, <br /> I am Abimani
               <p className='text-2xl'>{config.subTitle}</p>
             </h1>
             <div className="flex py-10" data-aos="fade-up-right" data-aos-duration="1000">
                <a href="https://github.com/Abimanianandan" target='blank' className='pr-5  hover:text-white'><AiOutlineGithub size={40} /> </a>
                <a href="https://www.linkedin.com/in/abimani18/" className='pr-5 hover:text-white' target='blank'> <AiOutlineLinkedin size={40}/> </a>
                <a href="https://www.facebook.com/abimani.kbm" className=' hover:text-white' target='blank'> <AiOutlineFacebook size={40}/> </a>
             </div>
        </div>
             <img data-aos="fade-up-left" data-aos-duration="1000" className='md:w-1/3' src={hero1} alt="hero-img" />
     </section>
  )
}

export default Hero