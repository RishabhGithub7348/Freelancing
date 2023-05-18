import React from 'react'
import {pic5} from '../assets'

const About = () => {
  return (
    <div className='w-full flex flex-col items-center justify-between -mt-14 '>
      <h1 className='text-4xl custom-width font-bold text-center text-purple-900 bg-gradient-to-r from-purple-400 to-pink-600 py-4 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300'>ABOUT US</h1>

      <div className='grid grid-cols-5  mt-5 gap-2'>
        <div className='col-span-2 ml-3'>
           <div className='flex items-center    w-full justify-center mt-6'>
            <img src={pic5} alt="" className='object-contain border rounded-md overflow-hidden' />
           </div>
        </div>

        <div className='col-span-3 ml-5 mt-8'>
          <div className='flex flex-col items-center justify-between '>
          <p className=' text-sm  font-medium w-9/12  leading-7 '>
          IT is an e-governance focused Digital Transformation IT firm that has built its knowledge capital in Education,
           Real estate, Agriculture, Forestry and Digital marketing sectors with more than 10 years of experience gaining expertise
            across these domains working for small, medium and large institutions.
          </p>
          <p className=' text-sm leading-7 font-medium w-9/12  mt-7'>
          We, as IT are enthusiastic learners and seasoned inventors. Together, we can create products that serve not just technology but the users behind it. We provide user friendly and ready to use Software
           solutions with the space for customization as we believe in continuous improvement and development.
          </p>

          <div className="flex items-center ml-10 mr-10 mt-7">
          <button  className="bg-blue-500 cursor-pointer hover:bg-blue-700 w-32 text-white font-bold py-3 px-4 rounded-3xl  shadow-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50">
           Know More
          </button>
        </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
