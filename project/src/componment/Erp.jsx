import React from 'react'
import {pic10,pic11,pic12, pic13, pic14,pic15, pic16, pic17,pic18,pic19,pic20,pic21, pic22,pic23, tech} from '../assets'
import './style.css'

const Erp = () => {
  return (
    <>
   <div className='flex flex-col items-center w-full justify-around mt-8'>
     <div>
     <h1 className='text-4xl custom-width font-bold text-center text-purple-900 bg-gradient-to-r from-purple-400 to-pink-600 py-4 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300'>ERP</h1>


      </div>
      </div>
      <div className='mt-6'>
        <p className='text-3xl leading-7 my-3 opacity-90 mx-5  font-semibold ml-72 '>
            Modules Covered
        </p>
      </div>
    <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center gap-11  '>
    <div className='flex flex-col items-center justify-center gap-3 w-full'>
  <div className='flex items-center justify-center text-center  bg-green-400 opacity-3 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 w-full font-semibold'>Admission CRM & Follow Up</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Provisional Admission</p>
  </div>
  <div className='flex items-center justify-center text-center  bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Student Integartion</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400  opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Free Managment</p>
  </div>
  
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Academics Calender Planner</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Attendence Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Training & Placement</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Alert To Parents/Students</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Front office Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Stock/Store Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>SMS for Attendence shortage</p>
  </div>
</div>
<div className='flex flex-col items-center justify-center gap-3 w-full'>
  <div className='flex items-center justify-center text-center  bg-green-400 opacity-3 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 w-full font-semibold'>Academic Feedback</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Mentor/Mentee Feedback</p>
  </div>
  <div className='flex items-center justify-center text-center  bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>TC Generator</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400  opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Card Generator</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>PTM Generator</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Events & Activites</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Payroll Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Library & Book Bank</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Time Table</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Grievance</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Hostel & Mess Management</p>
  </div>
</div>
<div className='flex flex-col items-center justify-center gap-3 w-full'>
  <div className='flex items-center justify-center text-center  bg-green-400 opacity-3 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 w-full font-semibold'>University Examnation</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>CCE Exam</p>
  </div>
  <div className='flex items-center justify-center text-center  bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Training & Placement</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400  opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Employee Daily Report</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Account Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>User Specific Security Management</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Mail Broadcaster integrated</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Assignment Sharing</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Faculty Login</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Parent Login</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Admin Login</p>
  </div>
  
</div>
      </div> 

      <div className='mt-6'>
        <p className='text-3xl leading-7 my-3 opacity-90 mx-5  font-semibold ml-72 '>
            Tech Integration
        </p>
        <div className='mt-8 flex  max-w-screen-lg mx-auto w-full h-full  justify-center items-center   gap-48  '>
      <div className='-ml-7 w-full'>
        <img src={tech} alt="" className=' w-80 h-80 object-contain ' />
      </div>
      <div className='flex flex-col items-center justify-center gap-3 w-full'>
  <div className='flex items-center justify-center text-center  bg-green-400 opacity-3 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 w-full font-semibold'>Bar Code Scanner</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Biometric Machine</p>
  </div>
  <div className='flex items-center justify-center text-center  bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>RFID Machine</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400  opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Time & Attendence Machine</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-500 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Bar Coded</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Smart Code Scanner</p>
  </div>
  <div className='flex items-center justify-center text-center bg-green-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>SMS Gateway</p>
  </div>
  <div className='flex items-center justify-center text-center bg-rose-400 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>E-Mail Gateway</p>
  </div>
  <div className='flex items-center justify-center text-center bg-amber-300 opacity-1 p-1 border-2 rounded-r-full custom-width'>
    <p className='text-gray-600 text-xl p-1 font-semibold'>Payment Gateway</p>
  </div>
</div>
      
      </div> 
      </div>

      <div className='mt-6'>
        <p className='text-3xl leading-7 my-3 opacity-90 mx-5  font-semibold ml-72 '>
           LMS with Rfid Integration
        </p>
      </div>
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center  gap-48  '>
      <div>
        <img src={pic15} alt="" />
      </div>
      <div>
        <img src={pic20} alt="" />
      </div>
      
      </div> 
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center gap-48 items-center  '>
      <div>
        <img src={pic16} alt="" />
      </div>
      <div>
        <img src={pic21} alt="" />
      </div>
      
      </div> 
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center gap-48 items-center   '>
      <div>
        <img src={pic17} alt="" />
      </div>
      <div>
        <img src={pic22} alt="" />
      </div>
      
      </div> 
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center gap-48  '>
      <div>
        <img src={pic18} alt="" />
      </div>
      <div>
        <img src={pic22} alt="" />
      </div>
      
      </div> 
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center gap-48  '>
      <div>
        <img src={pic19} alt="" />
      </div>
      <div>
        <img src={pic23} alt="" />
      </div>
      
      </div> 
    </>
  )
}

export default Erp
