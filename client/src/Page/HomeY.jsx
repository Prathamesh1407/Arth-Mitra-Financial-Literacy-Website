import React from 'react';
import Card from '../Components/Card';
import imgHeader from '../assets/images/banner-bg.svg';
import Hero from '../assets/images/header-hero.png';
import service1 from '../assets/images/warup.jpeg';
import service2 from '../assets/images/wagoal.jpeg';
import service3 from '../assets/images/wasip.jpeg';
import quiz from '../assets/images/quiz.jpg';
import Footer from '../Components/Footer';



const HomeY = () => {
  return (
    <div>
        {/* <Navbar loggedIn={false} age={1} coinsCount={20}/> */}
        <div className="relative mx-auto max-w-maxContent flex flex-col items-center justify-between text-white">
        <div
          className="w-full bg-cover bg-center h-screen flex flex-col justify-center items-center relative"
          style={{ backgroundImage: `url(${imgHeader})` }}
        >
            <h1 className="text-3xl -mt-80 mb-4">Say 👋🏼 to CHANAKYA</h1>
            <h2 className="text-4xl font-bold mb-4">Your Savvy Financial Companion</h2>
            <p className="text-lg mb-6 text-center w-3/5">
              Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI-powered Finance Advisor - Arth Sathi 🤵🏻
            </p>
            <button className="bg-gradient-to-r from-green-400 to-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
              Chat with ArthaSathi 💬
            </button>
            <div className="absolute -bottom-72 w-2/4 h-4/5">
              <img src={Hero} alt="Demo-Image"/>
            </div>
            
        </div>

        <div className='bg-orange-500 h-1 w-1/12 mt-48'></div>

        <h1 className=' text-4xl text-black mt-8'> <span className=' font-bold'>CHANAKYA,</span> comes with everything you need to get started!</h1>
      
        <div className='flex gap-x-10 mt-12'>
          <Card imgSrc={service1} route={'blogs'} title={"Financial Blogs"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
          <Card imgSrc={service2} route={'goalSetter'} title={"Financial Goal Planning"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
          <Card imgSrc={quiz} route={'quiz'} title={"Quiz"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
        </div>
        <Footer/>
        </div>
      </div>

    
  );
};

export default HomeY;
