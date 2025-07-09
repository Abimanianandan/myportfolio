import React from 'react'
import ResumeImg from '../assets/images/resume.jpg'
const Resume = () => {
  return (
    <section className='flex md:flex-row flex-col  px-5 py-10 bg-blue-900' id='resume'>
        <div className='py-5 md:w-1/2  flex md:justify-end' data-aos="fade-right" data-aos-duration="1000">
            <img src={ResumeImg} alt="about-img" className='w-[300px]'/>
        </div>
        <div className='md:w-1/2  flex justify-center' data-aos="fade-left" data-aos-duration="1000">
            <div className="flex flex-col justify-center text-white">
                  <h1 className='text-4xl font-bold py-5 border-b-4 w-[140px]'>Resume</h1>
                  <p className='pb-5'>You can view my resume<a href="https://drive.google.com/file/d/1kb8XxN1VozGZfyJNtFXDw2qFpSgGtNAM/view" target='blank' className='btn'>Dowload</a></p>
            </div>
        </div>
    </section>
  )
}

export default Resume