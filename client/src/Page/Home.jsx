// import React from 'react';
// import CustomButton from '../Components/CustomButton';
// // import hero-img from './assets/images/header-hero.png';
// import Card from '../Components/Card';
// import imgHeader from '../assets/images/banner-bg.svg'
// const Home = () => {
//   return (
//     <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
//         <div style = {{
//       backgroundImage:
//       `url(${imgHeader})`,
//       height: '100vh',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//    }}>
//             <h1>Say 👋🏼 to fininovation </h1>
//             <h1>Your savvy financial companion</h1>
//             <p>Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI powered finance advisor - Arth Sathi 🤵🏻</p>
//             <CustomButton>
//                 Chat with ArthaSathi 💬
//             </CustomButton>

//             <div></div>
//         </div>

        

//         <div>
//             <h1><span>FinVeda,</span> comes with everything you need to get started!</h1>
//             <Card imageUrl={imgHeader} heading = "Finance Tools"  description = "With our SIP and PPF tools you will discover the power of compounding and make informed decisions regarding your long-term savings."/>
//         </div>
        
//     </div>
//   )
// }

// export default Home

// import React from 'react';
// import CustomButton from '../Components/CustomButton';
// import Card from '../Components/Card';
// import imgHeader from '../assets/images/banner-bg.svg';

// const Home = () => {
//   return (
//     <div className="relative mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 text-white">
//       <div
//         className="bg-cover bg-center h-screen flex flex-col justify-center items-center"
//         style={{ backgroundImage: `url(${imgHeader})` }}
//       >
//         <h1 className="text-3xl mb-4">Say 👋🏼 to Fininovation</h1>
//         <h2 className="text-4xl font-bold mb-4">Your savvy financial companion</h2>
//         <p className="text-lg mb-6 text-center w-3/5">
//           Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI-powered finance advisor - Arth Sathi 🤵🏻
//         </p>
//         <CustomButton className="bg-blue-500 hover:bg-blue-700">Chat with ArthaSathi 💬</CustomButton>
//       </div>

//       <div className="text-center">
//         <h1 className="text-3xl font-bold mb-6">
//           <span>FinVeda,</span> comes with everything you need to get started!
//         </h1>
//         <Card
//           imageUrl={imgHeader}
//           heading="Finance Tools"
//           description="With our SIP and PPF tools you will discover the power of compounding and make informed decisions regarding your long-term savings."
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import Card from '../Components/Card';
// import imgHeader from '../assets/images/banner-bg.svg';
// import Hero from '../assets/images/header-hero.png';

// const Home = () => {
//   return (
//     <div className="relative mx-auto max-w-maxContent flex flex-col items-center justify-between text-white">
//       <div
//         className="w-full bg-cover bg-center h-screen flex flex-col justify-center items-center"
//         style={{ backgroundImage: `url(${imgHeader})` }}
//       >
//         <h1 className="text-3xl -mt-80 mb-4">Say 👋🏼 to Fininovation</h1>
//         <h2 className="text-4xl font-bold mb-4">Your savvy financial companion</h2>
//         <p className="text-lg mb-6 text-center w-3/5">
//           Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI-powered finance advisor - Arth Sathi 🤵🏻
//         </p>
//         <button className="bg-gradient-to-r from-green-400 to-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//           Chat with ArthaSathi 💬
//         </button>
//       </div>

//       <div className=' absolute'>
//         <img src={Hero} alt="Demo-Image"/>
//       </div>

//     </div>
//   );
// };

// export default Home;


import React from 'react';
import Card from '../Components/Card';
import imgHeader from '../assets/images/banner-bg.svg';
import Hero from '../assets/images/header-hero.png';
import service from '../assets/images/services-shape.svg'
import service1 from '../assets/images/warup.jpeg';
import service2 from '../assets/images/wagoal.jpeg';
import service3 from '../assets/images/wasip.jpeg';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';



const Home = () => {
  return (
    <div>
        <Navbar loggedIn={false} age={1} coinsCount={20}/>
        <div className="relative mx-auto max-w-maxContent flex flex-col items-center justify-between text-white">
        <div
          className="w-full bg-cover bg-center h-screen flex flex-col justify-center items-center relative"
          style={{ backgroundImage: `url(${imgHeader})` }}
        >
            <h1 className="text-3xl -mt-80 mb-4">Say 👋🏼 to Fininovation</h1>
            <h2 className="text-4xl font-bold mb-4">Your savvy financial companion</h2>
            <p className="text-lg mb-6 text-center w-3/5">
              Wanna learn how to grow your money to become rich? We have made becoming a stock market Guru easy with our AI-powered finance advisor - Arth Sathi 🤵🏻
            </p>
            <button className="bg-gradient-to-r from-green-400 to-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5">
              Chat with ArthaSathi 💬
            </button>
            <div className="absolute -bottom-72 w-2/4 h-4/5">
              <img src={Hero} alt="Demo-Image"/>
            </div>
            
        </div>

        <div className='bg-orange-500 h-1 w-1/12 mt-48'></div>

        <h1 className=' text-4xl text-black mt-8'> <span className=' font-bold'>FinVeda,</span> comes with everything you need to get started!</h1>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition duration-300 ease-in-out mt-10">
          Register
        </button>
        
        

        


        
        <div className='flex gap-x-10 mt-12'>
          <Card imgSrc={service1} title={"financial Blogs"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
          <Card imgSrc={service2} title={"financial Goal"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
          <Card imgSrc={service3} title={"SIP Calculator"} description={"We offer expert written blogs on investment tips and strategies, and current economic trends, all crafted to keep you well-informed."}/>
        </div>
        <Footer/>
        </div>
      </div>

    
  );
};

export default Home;

