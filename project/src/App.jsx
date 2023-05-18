import  { useState, useEffect, useRef } from 'react';
import Navbar from './componment/Navbar';
import About from './componment/About';
import Sevices from './componment/Sevices';
import Cards from './componment/Cards';
import Service from './componment/Service';
import Erp from './componment/Erp';
import Campus from './componment/Campus';
import Map from './componment/Map';
import Footer from './componment/Footer';
import RequestDemo from './componment/RequestDemo';
import SliderChange from './componment/SliderChange';


function App() {
 

  return (
    <>
      <div className="flex flex-col overflow-x-hidden overscroll-none w-full h-screen">
      <Navbar/>
     
        <div className="flex-1    overflow-y-auto">
        <div className='w-full h-5/6   p-2'>
        <SliderChange/>
        </div>
        
        <div className='mt-6'>
        <About />
        </div>
        <div className='w-full h-px mt-8 bg-slate-300' />
        <Cards/>
        <div className='w-full h-px mt-8 bg-slate-300' />
        <Service/>
        <div className='w-full h-px mt-8 bg-slate-300' />
        <Erp/>
        <div className='w-full h-px mt-8 bg-slate-300' />
        <Campus/>
        <div className='w-full h-px mt-8 bg-slate-300' />
        <RequestDemo/>
        <div className='w-full h-px  mt-28 bg-slate-300' />

        <Map/>
        
        <Footer/>
        
        
        </div>
      </div>
    </>
  );
}

export default App;
