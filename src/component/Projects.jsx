import React from 'react'
import HrmImg from '../assets/images/hrm.jpg'
import FoodImg from '../assets/images/food.jpg'
import EcommerceImg from '../assets/images/ecommerce.jpeg'

const Projects = () => {
  const config = [
    {
      name:"A HRM-system Built with MERN-stack",
      img:HrmImg,
      link:"https://hr-management-fe-hoo5.vercel.app/"
    },
     {
      name:"A Ecommerce website Built with React-js",
      img:FoodImg,
      link:"https://startup-ecomus.vercel.app/"
    },
     {
      name:"A Mini Food Ordering App – MERN Stack",
      img:EcommerceImg,
      link:"https://resturant-fe.vercel.app/"
    }
  ]
  return (
    <section className="flex flex-col px-5 py-30 bg-blue-600  text-white" id='projects'>
      <div className="w-1/2 flex justify-center">
        <h1 className="text-4xl font-bold py-5 border-b-4 w-[140px]">
          Projects
        </h1>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-5 py-10 px-5">
        {config.map((item,index)=>{
          return(
               <div className='relative'  data-aos="flip-left" data-aos-duration="1000" key={index}>
          <img src={item.img} className="w-[400px] h-[250px]" alt="HRM" />
          <div className="description">
            <p>{item.name} <br /> <a className='project-link' href={item.link} target='blank'>visit</a></p>
          </div>
        </div>
          )
        })}
       
        {/* <div className='relative' data-aos="flip-left" data-aos-duration="1000">
          <img src={EcommerceImg} className="w-[400px] h-[250px]" alt="Ecommerce" />
          <div className="description">
            <p>A Ecommerce website Built with React-js <br /> <a className='project-link' href="https://startup-ecomus.vercel.app/"  target='blank'>visit</a></p>
          </div>
        </div>
        <div className='relative' data-aos="flip-left" data-aos-duration="1000">
          <img src={FoodImg} className="w-[400px] h-[250px]" alt="Food-delivery" />
          <div className="description">
            <p>A Mini Food Ordering App – MERN Stack <br /> <a className='project-link' href="https://resturant-fe.vercel.app/"  target='blank'>visit</a></p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Projects