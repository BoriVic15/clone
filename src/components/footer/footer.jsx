import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return ( 
      <div className='px-40 text-xs text-gray-500'>
        <div className='mt-20 py-2'>
          <ul className='text-center flex items-center justify-start gap-3'>
            <li>English (UK)</li>
            <li>Hausa</li>
            <li>Français (France)</li>
            <li>Português (Brasil)</li>
            <li>Español</li>
            <li>العربية</li>
            <li>Bahasa Indonesia</li>                  
            <li>Deutsch</li>                  
            <li>日本語</li>                  
            <li>Italiano</li>
            <li>हिन्दी</li>
            <li className='bg-gray-300'><FaPlusSquare /></li>
          </ul>
        </div> <hr className='pb-2'/>
        <div className='pb-2'> 
          <ul className='text-center flex items-center justify-start gap-3'>
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>                  
            <li>Market place</li>                  
            <li>Meta Pay</li>                  
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Ray-Ban Meta</li>           
            <li>Meta Ai</li> 
          </ul>
        </div>
        <div className='pb-2'>
          <ul className='text-left flex items-center justify-start gap-3'>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Centre</li>
            <li>Privacy Policy</li>
            <li>Privacy Centre</li>                  
            <li>Groups</li>                  
            <li>About</li>                  
            <li>Create</li>
            <li>adCreate</li>
            <li>Page</li>           
            <li>Developers</li>
          </ul>
        </div>
        <div className='pb-2'>
          <ul className='text-left flex items-center justify-start gap-3'>
            <li>Careers</li>
            <li>Cookies</li>
            <li>AdChoices (React Icon)</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact uploading and non-users</li>
            <li>Settings</li>
            <li>Activity log</li>
          </ul>
        </div><br />
        <span className='flex gap-1 pb-4'>Meta <MdCopyright className='mt-1'/> 2024</span>
      </div>
  )
}

export default Footer;