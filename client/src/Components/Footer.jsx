import React from 'react';
import ImageHeader from '../assets/images/banner-bg.svg'

const Footer = () => {
  return (
    <div className='mx-auto mt-16 mb-10 max-w-maxContent flex flex-col items-center justify-between text-black'>
      <div className='flex flex-row justify-between'>
        <div className=' w-1/4 text-xl '>We at CHANAKYA aim to make you a stock market Guru easy with our AI powered teaching and financial blogs.</div>
        <div>
          <div>Quick Links</div>
            <li><a href="./blogs/privacy-policy.html">Privacy Policy</a></li>
            <li><a href="./blogs/refund-policy.html">Refund Policy</a></li>
            <li><a href="./blogs/terms-of-service.html">Terms of Service</a></li>
        </div>
        <div>
          <div>Resources</div>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./login.html">Page</a></li>
            <li><a href="./blog.html">Blog</a></li>
        </div>
        
        <div>
          <div>Contact Us</div>
            <ul>
              <li><a href="./index.html">- CodeWizard@gmail.com</a></li>
              <li><a href="./blog.html">- Pune, Maharashtra</a></li> 
            </ul>
            
        </div>
        
      </div>
    </div>
  )
}

export default Footer
