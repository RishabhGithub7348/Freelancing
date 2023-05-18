import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

const Cards = () => {
  return (
   <>
    <div className='flex flex-col items-center w-full justify-around mt-8'>
     <div>
     <h1 className='text-4xl custom-width font-bold text-center text-purple-900 bg-gradient-to-r from-purple-400 to-pink-600 py-4 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300'>OUR SERVICES</h1>
      </div>

          
    </div>
    <div className='mt-8 flex  max-w-screen-lg mx-auto  items-center gap-11  '>
      <Card/>
      <Card2/>
      <Card3/>
    </div>

   </>
  )
}

export default Cards