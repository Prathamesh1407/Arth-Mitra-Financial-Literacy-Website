import React from 'react';
import CustomButton from '../Components/CustomButton';
// import hero-img from './assets/images/header-hero.png';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import imgHeader from '../assets/images/banner-bg.svg'
const Home = () => {
  return (
    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <div style = {{
      backgroundImage:
      `url(${imgHeader})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   }}>
            <h1>Say 👋🏼 to fininovation </h1>
            <h1>Your savvy financial companion</h1>
            <p>Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI powered finance advisor - Arth Sathi 🤵🏻</p>
            <CustomButton>
                Chat with ArthaSathi 💬
            </CustomButton>

            <div></div>
        </div>

        

        <div>
            <h1><span>FinVeda,</span> comes with everything you need to get started!</h1>
            <Card imageUrl={imgHeader} heading = "Finance Tools"  description = "With our SIP and PPF tools you will discover the power of compounding and make informed decisions regarding your long-term savings."/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home