import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer-area pt-20 pb-10 bg-gray-800 text-white">
      <div className="container">
        <div className="subscribe-area">
          <div className="row">
            <div className="col-lg-6">
              <div className="subscribe-content mt-5">
                <h2 className="subscribe-title">
                  Subscribe Our Newsletter <span>get regular updates</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form mt-5">
                <form action="#">
                  <input type="text" placeholder="Enter Email" className="border p-2 mr-2" />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => { e.preventDefault();}}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget pt-10">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-5">
                <p className="text">
                  We at FinVeda aim to make you a stock market Guru easy with our AI powered teaching and financial blogs.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-link d-flex justify-between mt-5">
                <div className="link-wrapper">
                  <div className="footer-title">
                    <h4 className="title">Quick Link</h4>
                  </div>
                  <ul className="link">
                    <li><a href="./blogs/privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="./blogs/refund-policy.html">Refund Policy</a></li>
                    <li><a href="./blogs/terms-of-service.html">Terms of Service</a></li>
                  </ul>
                </div>
                <div className="link-wrapper">
                  <div className="footer-title">
                    <h4 className="title">Resources</h4>
                  </div>
                  <ul className="link">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./login.html">Page</a></li>
                    <li><a href="./blog.html">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-contact mt-5">
                <div className="footer-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul className="contact">
                  <li>ayush1337@hotmail.com</li>
                  <li>fin-veda.vercel.app</li>
                  <li>
                    Delhi, India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright pt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text">
                  © 2024 FinVeda. All rights reserved, Built with ♥ in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
