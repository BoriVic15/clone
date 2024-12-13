import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
      // Try with joined classnames (no spaces)
    <div>
        <div className="bg-gray-200 h-screen w-full grid grid-cols-2 -mb-20">
          <div className="container text-center flex flex-col justify-center items-end mb-60">
            <h1 className="font-bold text-blue-700 text-6xl text-left mr-60 w-48">facebook</h1>
            <p className='text-2xl ml-64 text-left items-end'>Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div className='Container flex flex-col justify-end items-start h-full px-6 relative'>
            <div className='absolute top-20 h-3/5'>
              <div className='bg-white grid w-full rounded-md px-2 h-4/5'>
                <input 
                type="text"
                placeholder='Email address or phone number'
                className='border border-solid rounded-md m-2 px-3' />
                <input 
                type="text"
                placeholder='Password'
                className='border border-solid rounded-md m-2 px-3' />
                <button className='bg-blue-600 border-solid rounded-md m-2 px-3 text-white font-bold text-lg'>Log in</button>
                <Link to="forgottenPassword" className='text-center text-blue-600 _target'>Forgotten password?</Link>
                <hr />
                <Link to='createaccount' className='rounded-md text-white text-lg font-bold bg-green-500 mb-4 mx-14 pt-2 text- text-center'>Create new account</Link>
              </div>
              <div className='mt-4 text-center'><p><b><a href="" className='hover:underline'>Create a Page</a></b> for a celebrity, brand or business.</p></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;