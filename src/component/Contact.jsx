import React from 'react'
const Contact = () => {
  const config = {
    email:"abikbm06@gmail.com",
    phone:"+91 9688513997"
}
  return (
    <section className='flex  flex-col items-center px-5 py-30 bg-blue-600 text-white gap-5' id='contact'>
            <h1 className='text-4xl font-bold py-5 border-b-4 w-[140px]' data-aos="fade-up" data-aos-duration="1000">Contact</h1>
            <p className='py-3 px-3' data-aos="fade-up" data-aos-duration="1000">if you want to discuss more in detail,plese contact me</p>
            <p className='font-bold' data-aos="fade-up" data-aos-duration="1000">Email:<span>{config.email}</span></p>
            <p className='font-bold' data-aos="fade-up" data-aos-duration="1000">Phone:<span>{config.phone}</span></p>
    </section>
  )
}

export default Contact