import React from 'react';
import { Link } from 'react-router-dom';


const Forgotten = () => {
  return (
    <div className='bg-white w-full flex justify-between items-center relative'>
      <div>
        <Link to='/'><h1 className="font-bold text-blue-700 text-2xl text-center fixed -mt-5 ml-4">facebook</h1></Link>
      </div>
      <div className='space-x-2'>
        <input type="text" placeholder='Email or phone' className='border border-solid border-gray-700 rounded-md h-8 m-2 px-3' />
        <input type="text" placeholder='Password' className='border border-solid border-gray-700 rounded-md h-8 m-2 px-3' />
        <button className='bg-blue-600 border-solid rounded-md px-1 text-white font-semibold h-8'>Log in</button>
        <a href="forgottenPassword" className='text-center text-blue-700 text-sm pr-5 font-sans'>Forgotten password?</a>
      </div>
    </div>
  )
}

export default Forgotten;