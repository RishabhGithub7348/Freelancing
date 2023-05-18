import React from 'react';

const Stategy = () => {
  return (
    <>
      
      <div className='grid grid-cols-4 gap-5 mt-8'>
        <div className='col-span-1'>
        <div className='mt-6'>
        <p className='text-4xl  font-semibold ml-72'>Traing Strategy</p>
      </div>
        </div>
        <div className='col-span-3'>
            <div className='flex flex-col items-center justify-center gap-3'>
            <div className='p-4 py-3 border-2 border-dashed  border-amber-500 rounded-3xl'>
          <h1 className='text-xl text-center text-gray-600  font-semibold'>Training Plan to be  finalized</h1>
        </div>
        <div className='p-4 py-3 border-2 border-dashed  border-amber-500 rounded-3xl'>
          <h1 className='text-xl text-center text-gray-600  font-semibold'>Training Batches to be finalized</h1>
        </div>
        <div className='p-4 py-3 border-2 border-dashed  border-amber-500 rounded-3xl'>
          <h1 className='text-xl text-center text-gray-600  font-semibold'>Training dates to be finalized</h1>
        </div>
        <div className='p-4 py-3 border-2 border-dashed  border-amber-500 rounded-3xl'>
          <h1 className='text-xl text-center text-gray-600  font-semibold'>Training Deploy to be finalized</h1>
        </div>
        <div className='p-4 py-3 border-2 border-dashed  border-amber-500 rounded-3xl'>
          <h1 className='text-xl text-center text-gray-600  font-semibold'>Training  to be conducted</h1>
        </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Stategy;
