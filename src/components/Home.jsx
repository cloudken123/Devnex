import React from "react";
import { Carousel } from 'flowbite-react';
import Banner1 from '../assets/Banner1.png'


const Home = () => {
  return(
    <div className='bg-neutralSilver'>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
      <Carousel className="w-full mx-auto">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse 
        items-center justify-between gap 12">
          <div>
            <img src={Banner1} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug">
              Lesson and insights <span className="text-brandPrimary leading leading-snug">From 8 years</span>
            </h1>
            <p className="text-neutralDgrey text-base mb-8">
              where to grow your business as a photographer: site or social media
            </p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey
            transition-all duration-300 hover:translate-y-4">Register</button>
          </div>
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse 
        items-center justify-between gap 12">
          <div>
            <img src={Banner1} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug">
              Become a  Full-Stack  <span className="text-brandPrimary leading leading-snug">In 12 Months</span>
            </h1>
            <p className="text-neutralDgrey text-base mb-8">
              where to grow your business as a photographer: site or social media
            </p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey
            transition-all duration-300 hover:translate-y-4">Register</button>
          </div>
        </div>


        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse 
        items-center justify-between gap 12">
          <div>
            <img src={Banner1} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug">
              Learn and Earn money <span className="text-brandPrimary leading leading-snug"> in 4 Months</span>
            </h1>
            <p className="text-neutralDgrey text-base mb-8">
              where to grow your business as a photographer: site or social media
            </p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey
            transition-all duration-300 hover:translate-y-4">Register</button>
          </div>
        </div>


      </Carousel>
      </div>
    </div>
  );
  
};

export default Home;
