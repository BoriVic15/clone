import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='bg-gray-200 h-96 grid justify-center items-center pl-28'>
      <div className='bg-gray-50 bg-center text-left grid h-72 w-2/3 py-4 ml-16 mx-16 border rounded-2xl'>
        <h2 className='font-bold text-lg font-sans text-gray-700 px-4'>Find Your Account</h2> <hr className='mt-4'/>
        <p className='font-sans mt-4 px-4'>
        Please enter your email address or mobile number to search for your account.
        </p>
        <input type="text" placeholder='Email or mobile number' className='border border-solid mt-4 rounded-md h-12 m-2 px-4 w-11/12'/> <hr className='mt-4'/>
        <div className='mt-4 space-x-1 flex justify-end items-start px-4'>
          <Link to='/' className='bg-gray-300 border-solid rounded-md m-2 px-3 text-gray-600 font-semibold text-lg '>Cancel</Link>
          <button className='bg-blue-600 border-solid rounded-md m-2 px-3 text-gray-200 font-semibold text-lg'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;