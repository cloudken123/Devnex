import React from 'react'
import logo1 from '../assets/logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'
import Logo4 from '../assets/Logo4.png'
import Logo5 from '../assets/Logo5.png'
import Logo6 from '../assets/Logo6.png'
import Logo7 from '../assets/Logo7.png'

const Services= () =>{
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDgrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey'>We have been working with some fortune 500+ clients</p>
            {/* company logo */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src={logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
            </div>
        </div>
        {/* services card */}
        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDgrey font-semibold mb-3'>
                Manage your entire comunity in a Single style
            </h2>
            <p className='text-neutralGrey'>
                who is DevNex Suitable for?
            </p>
        </div>
        
    </div>
  )
}

export default Services