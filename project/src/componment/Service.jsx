import React from 'react'
import {pic7,pic8,pic9} from '../assets'

const Service = () => {
  return (
    <>
   <div className='flex flex-col items-center w-full justify-around mt-8'>
     <div>
     <h1 className='text-4xl custom-width font-bold text-center text-purple-900 bg-gradient-to-r from-purple-400 to-pink-600 py-4 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300'>SERVICE</h1>
      </div>
      </div>
    <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center gap-11  '>
      <div>
        <img src={pic7} alt="" />
      </div>
      <div>
        <img src={pic8} alt="" />
      </div>
      <div>
        <img src={pic9} alt="" />
      </div>
      </div> 
    </>
  )
}

export default Service
