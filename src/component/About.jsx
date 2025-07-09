import React from 'react'
import AboutImg from '../assets/images/about.png'
const About = () => {
  const config = {
    line1:"Hi, I’m Abimani, a Full Stack Web Developer.I build beautiful, user-friendly, responsive websites using modern full stack technologies.",
    line2:"I work with React, Node.js, Express, MongoDB, and more to build complete web apps.",
    line3:"I’ve built multiple real-world projects that include authentication, APIs, and database integration."
  }
  return (
    <section className='flex md:flex-row flex-col px-5 py-10 bg-blue-900 ' id='about'>
        <div className='md:w-1/2'  data-aos="fade-right" data-aos-duration="1000">
            <img src={AboutImg} alt="about-img"/>
        </div>
        <div className='md:w-1/2 text-white' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='text-4xl font-bold py-5 border-b-4 w-[170px]'>About me</h1>
            <p className='py-3 px-3'>{config.line1}</p>
            <p className='py-3 px-3'>{config.line2}</p>
            <p className='py-3 px-3'>{config.line3}</p>
        </div>
    </section>
  )
}

export default About