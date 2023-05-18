import React from 'react';
import { pic34, pic31, pic32, pic33, pic30 , pic35, pic47, pic36, pic45, pic43, pic44, pic39, java, pic24, dbms, network} from '../assets';
import Apitude from './Apitude';
import Schedule from './Schedule';
import Stategy from './Stategy';

const campusData = [
  {
    image: pic34,
    text: 'Provide best in class training to various audiences across the globe to empower them ',
  },
  {
    image: pic32,
    text: 'Develop specific skills in people so they can become successful professionals',
  },
  {
    image: pic30,
    text:
      'Our corporate training programs aim to empower the workforce to become more profitable, effective, and strong assets to the organization',
  },
  {
    image: pic31,
    text: 'Reach out to various people across geographics to empower them',
  },
  {
    image: pic33,
    text:
      'We believe in customizing our training programs as the workforce and culture are different in every organization. Every training module designed is unique for every audience need and requirement',
  },
];

const Campus = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full justify-around mt-8'>
        <div>
        <h1 className='text-4xl custom-width font-bold text-center text-purple-900 bg-gradient-to-r from-purple-400 to-pink-600 py-4 rounded-lg shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300'>CAMPUS TRAINING</h1>
        </div>
      </div>
      <div className='mt-6'>
        <p className='text-4xl leading-7 my-3 opacity-90 mx-5 font-semibold ml-72'>Who we are</p>
      </div>
      <div className='grid grid-cols-2 gap-16 max-w-screen-lg mx-auto mt-8'>
        {campusData.map((item, index) => (
          <div key={index} className='flex items-center justify-center gap-2'>
            <img src={item.image} alt='' />
            <p className='text-sm font-medium leading-7'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='mt-6'>
        <p className='text-4xl leading-7 my-3 opacity-90 mx-5 font-semibold ml-72'>Our Program</p>
      </div>
      <div className='mt-8 flex  max-w-screen-lg mx-auto  justify-center items-center  gap-48  '>
      <div className='bg-gray-500 p-4 border rounded-md shadow'>
        <img src={pic35} alt="" className='object-fit' />
      </div>
      </div> 
      <div className='mt-14'>
        <p className='text-4xl leading-7 my-3 opacity-90 mx-5 font-semibold ml-72'>Our Modules</p>
      </div>
      <div className='grid grid-cols-4 mt-14 mx-auto w-5/6 max-w-screen-lg '>
      <div className='col-span-2'>
         <div className='flex flex-col items-center justify-center gap-6'>
         <div className='   w-5/12'>
              <p className='text-2xl p-3 border-2 border-amber-500 rounded-md  text-center text-yellow-50 bg-orange-400 font-semibold'>Module 1</p>
         </div>
          <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-amber-500 text-center border-gray-500'>42 Hours (7 Days)</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>C, C++</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>JAVA</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Python</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>.Net</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>DBMS</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Networking</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>HTML, CSS</p>
         </div>
         </div>
       </div>
       <div className='col-span-2'>
         <div className='flex flex-col items-center justify-center gap-6'>
         <div className='   w-5/12'>
              <p className='text-2xl p-3 border-2 border-amber-500 rounded-md  text-center text-yellow-50 bg-orange-400 font-semibold'>Module 2</p>
         </div>
          <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-amber-500 text-center border-gray-500'>100 Hours (15 Days)</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Module 1 Plus</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Apitude</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Verbal & Non Verbal</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Presentation Skills</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Resume Building</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>GD Skills</p>
         </div>
         <div className='  w-5/12'>
              <p className='text-2xl p-3 border-dashed border-2  font-bold text-gray-500 leading-7 text-center border-amber-500'>Mock Interview</p>
         </div>
         </div>
       </div>
      </div>
      
      
      <div className='grid grid-cols-6 gap-9 max-w-screen-lg mx-auto mt-8'>
        <div className='col-span-2'>

  <div className='bg-gray-100 p-6 border rounded-md  flex flex-col justify-center items-center shadow-md'>
  <div className='flex justify-center items-center'>
    <img src={pic47} alt='' />
  </div>
  
  <ul className='list-disc pl-6'>
    <li>Object-Oriented Feature</li>
    <li>Objects</li>
    <li>C++ Application Code</li>
    <li>Constructors</li>
    <li>Destructors</li>
    <li>Inner Clases</li>
    <li>C++ Operators</li>
    <li>Composition / Aggregation</li>
    <li>Interface</li>
    <li>Except Handling</li>
    <li>Object Design</li>
    <li>Template</li>
    <li>Object-Oriented Features</li>
  </ul>
</div>

  
        </div>

        <div className='col-span-2'>

  <div className='bg-gray-100 p-6 border rounded-md   flex flex-col justify-center items-center shadow-md'>

  <div className='flex justify-center mb-5 items-center'>
    <img src={java} alt='' className='w-32 h-32 object-contain' />
  </div>
  
  <ul className='list-disc pl-6'>
  <li> Java Basics</li>
    <li>Java Object</li>
    <li>Classes and Objects</li>
    <li>Class Design</li>
    <li>Object-Oriented Programming</li>
    <li>Inheritance</li>
    <li>Abstract Classes and methids</li>
    <li>User Interfaces</li>
    <li>Java Swing APIs</li>
    <li>Generics and Collection</li>
    <li>Threads</li>
    <li>File I/O</li>
  </ul>
</div>

  
        </div>

        <div className='col-span-2'>

<div className='bg-gray-100 p-6 border rounded-md   flex flex-col justify-center items-center shadow-md'>

<div className='flex justify-center  items-center'>
  <img src={pic44} alt='' className='h-44 w-48 object-contain -mt-6' />
</div>

<ul className='list-disc pl-6'>
<li>Object Oriented Programming</li>
  <li>Introduction To .Net Framework</li>
  <li>C# Language</li>
  <li>Errors & Exception Handling</li>
  <li>Collection</li>
  <li>Threading</li>
  <li>Polymorphism</li>
  <li>ADO .Net</li>
  <li>ASP .Net</li>
  <li>Web Service</li>
  <li>LINQ</li>
</ul>
</div>
      </div>
</div>

<div className='grid grid-cols-4 gap-11 max-w-screen-lg mx-auto mt-8'>
   <div className='col-span-2'>
   <div className='flex justify-center w-full  items-center'>
    <img src={dbms} alt="" className='w-full' />
   </div>
   </div>
    <div className='col-span-2   mt-28'>
    <div className='bg-gray-100 p-6 border rounded-md   flex flex-col justify-center items-center shadow-md'>
    <ul className='list-disc pl-6'>
<li>Introduction to RDBMS</li>
  <li>Structured Query Language (SOL)</li>
  <li>Relational Algebra. Entity-Relationship Model</li>
  <li>Relational Database Design</li>
  <li>Indexing and Hasing Design</li>
  <li>Query Optimization</li>
  <li>Transactions</li>
  <li>Concurrency Control</li>
  <li>Recovery Systems</li>
</ul>
</div>
    </div>

</div>


<div className='grid grid-cols-4 gap-11 max-w-screen-lg mx-auto mt-8'>
   
    <div className='col-span-2   mt-11'>
    <div className='bg-gray-100 p-6 border rounded-md   flex flex-col justify-center items-center shadow-md'>
    <ul className='list-disc pl-6'>
<li>Supporting QoS</li>
  <li>Data Types and Variables</li>
  <li>Classifying Networks: LAN, WAN</li>
  <li>Constructing Network Using Data Links</li>
  <li>Improving efficency with error control</li>
  <li>Identifying media types and challenges</li>
  <li>Employing wireless links</li>
  <li>Capitalizing wireless links</li>
  <li>Harnessing Wi-Fi for User Mobiality</li>
  <li>Implementing Security Best Practices</li>
  <li>Creating Enterprise Networks</li>
</ul>
</div>
    </div>
    <div className='col-span-2'>
   <div className='flex justify-center w-full  items-center'>
    <img src={network} alt="" className='w-full' />
   </div>
   </div>

</div>
  <Apitude/>
  <Schedule/>
  
  




    </>
  );
};

export default Campus;
