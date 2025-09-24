import React from 'react';

const Carts = () => {
    return (
       <div className='grid grid-cols-3 gap-5 py-10 max-w-[1200px] mx-auto'>
       <div className='rounded-md p-7 text-white h-[250px] bg-gray-600 flex flex-col items-center justify-center'>
               <h2 className='font-bold text-[35px]'>Pending</h2>
               <span className='font-semibold text-[22px]'>0</span>
      </div>
      <div className='rounded-md p-7 text-white h-[250px] bg-purple-500 flex flex-col items-center justify-center'>
               <h2 className='font-bold text-[35px]'>Submitted</h2>
               <span className='font-semibold text-[22px]'>0</span>
      </div>
      <div className='rounded-md p-7 text-white h-[250px] bg-teal-500 flex flex-col items-center justify-center'>
                   <h2 className='font-bold text-[35px]'>Reviewed</h2>
               <span className='font-semibold text-[22px]'>0</span>
      </div>
     </div>
    );
};

export default Carts;