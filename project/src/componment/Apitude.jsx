import React from 'react';

const Apitude = () => {
  return (
    <div className="mt-14">
      <p className="text-4xl leading-7 my-3 opacity-90 mx-5 font-semibold ml-72">Aptitude</p>
      <div className="mt-8 max-w-screen-lg mx-auto">
        <table className="min-w-full bg-white border-2 border-amber-400 rounded-lg border-separate border-spacing-4 ">
          <thead>
            <tr className="text-2xl p-3 border-2 border-amber-500 rounded-md  text-center text-yellow-50 bg-orange-400 font-semibold overflow-hidden">
              <th className="py-2 rounded-md border">Areas Covered</th>
              
              <th className="py-2 rounded-md border">Number of Sessions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md  border-2 border-amber-500">Quants</td>
             
              <td className="py-2 px-4 border-dotted rounded-md  border-2 border-amber-500">28</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">Logical Reasoning</td>
             
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">Numerical Reasoning</td>
              
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">Mechinical & Abstract Reasoning</td>
              
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">Verbal Reasoning</td>
              
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">Total Reasoning</td>
              
              <td className="py-2 px-4 border-dotted rounded-md border-2 border-amber-500">40</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Apitude;
