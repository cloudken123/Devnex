import React from 'react'
import logo1 from '../assets/logo1.png'
import Logo2 from '../assets/Logo2.png'
import Logo3 from '../assets/Logo3.png'
import Logo4 from '../assets/Logo4.png'
import Logo5 from '../assets/Logo5.png'
import Logo6 from '../assets/Logo6.png'
import Logo7 from '../assets/Logo7.png'

const Services= () =>{
    const Services = [
        {
            id: 1, title: "Membership Organisation", 
            description: "Our Membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/Icon1.png"
        },

        {
            id: 2, title: "National Association", 
            description: "Our Membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/Icon2.png"
        },

        {
            id: 3, title: "Clubs And Groups", 
            description: "Our Membership management software provides full automation of membership renewals and payments",
            image: "/src/assets/Icon3.png"
        }
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
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

        {/* cards */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                Services.map(service => <div key = {service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
                hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" /></div>
                        <h4 className='text-2xl font-bold text-neutralDgrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.description}</p>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Services