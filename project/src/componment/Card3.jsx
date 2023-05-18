import React from 'react'
import {pic6} from '../assets'

const Card3 = () => {
  return (
    <div className=' '>
        <div className='flex flex-col  boder-2 rounded-lg mb-3 shadow-lg bg-gray-100  overflow-hidden  '>
          <div className='overflow-hidden flex mt-4  flex-col items-center justify-center'>

          <div>
          <img src={pic6} alt="" className='w-20 h-15 object-contain rounded-2xl' /> 
          </div>
        
        <div className='flex  justify-between w-auto items-center mt-3'>
            <h1 className='font-inter text-4xl font-bold text-center  text-blue-500'>Campus And Traning </h1>
        </div>

        <p className='text-sm leading-7 my-3 opacity-90 mx-5 font-semibold '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing
            Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing
        </p>
        <div className='flex items-center justify-start'>
        <button className="font-inter mx-5 -ml-20 mb-5 text-center font-medium bg-blue-500 text-white px-4 py-2 rounded-md ">
          Read More
        </button>
        </div>
          </div>


        </div>
      
    </div>
  )
}

export default Card3
