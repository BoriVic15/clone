import React from 'react';
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="bg-gray-200 h-screen w-full grid justify-center text-center">
      <div>
      <Link to='/' className="font-bold text-blue-700 text-5xl text-center mt-5">facebook</Link>
      </div>
      <div className='flex justify-center items-start mb-32'>
        <div className='bg-gray-50 w-2/5 rounded-lg'>
          <h1 className='text-2xl font-semibold'>Create a new account</h1>
          <p className='text-sm text-gray-600 pb-3'>it's quick and easy.</p> <hr className='pb-3'/>
          <div className='space-x-3 pb-3'>
            <input type="text" 
            placeholder='First name'
            className='border rounded-md p-1'
            />
            <input type="text" 
            placeholder='Surname'
            className='border rounded-md p-1'
            />
          </div>
          <h3 className='text-left text-xs pl-4'>Date of birth (question mark)</h3>
          <div>
            <input type="" />
            <input type="" name="" id="" />
            <input type="" name="" id="" />
          </div>
          <h3>Gender (question mark icon)</h3>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" /> <br />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <p>People who use our service may have uploaded your contact information to Facebook. <a href="">Learn more.</a></p>
          <p>By clicking Sign Up, you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
          <button>Sign Up</button>
          <a href="">Already have an account?</a>
        </div>
      </div>
      
    </div>
  );
};

export default Account;