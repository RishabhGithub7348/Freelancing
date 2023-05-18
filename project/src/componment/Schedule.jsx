import React from 'react';

const Schedule = () => {
  return (
    <div className="mt-14">
      <p className="text-4xl leading-7 my-3 opacity-90 mx-5 font-semibold ml-72">Training Schedule</p>
      <div className="mt-8 max-w-screen-lg mx-auto">
        <table className="min-w-full bg-white border-2 border-amber-400 rounded-lg border-separate border-spacing-4 ">
          <thead>
            <tr className="text-2xl p-3 border-2 border-amber-500 rounded-md  text-center text-yellow-50 bg-orange-400 font-semibold overflow-hidden">
              <th className="py-2 px-4 rounded-md border ">Technolgy</th>
              
              <th className="py-2 px-4  rounded-md border ">Duration</th>
              <th className="py-2 px-4 rounded-md border ">Trainer</th>
              <th className="py-2 px-4 rounded-md border ">Trainer</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className="py-2 px-4  rounded-md text-gray-600   font-semibold border-amber-500 border-2 bg-gray-100">JAVA, C++, C</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">2 days</td>

              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 1</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 2</td>
            </tr>
            <tr>
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">HTML, CSS and And Javascript</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">1 days</td>

              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 1</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 2</td>
            </tr>
            <tr>
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">SQL, DBMS</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">1 days</td>

              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 1</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 2</td>
            </tr>
            <tr>
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Dot Net</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">2 days</td>

              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 1</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 2</td>
            </tr>
            <tr>
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Networking</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">1 days</td>

              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 1</td>
             
              <td className="py-2 px-4  rounded-md text-gray-600 font-semibold border-amber-500 border-2 bg-gray-100">Trainer 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
