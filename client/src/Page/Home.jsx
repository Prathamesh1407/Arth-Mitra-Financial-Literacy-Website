import React from 'react';
import CustomButton from '../Components/CustomButton';
// import hero-img from './assets/images/header-hero.png';
import Card from '../Components/Card';

const Home = () => {
  return (
    <div>
        <div>
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
            <Card imageUrl={} , heading = "Finance Tools"/>
        </div>
        

    </div>
  )
}

export default Home