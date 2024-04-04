// // import React from 'react'
// // import NavItem from './NavItem';

// // const Navbar = () => {
// //   return (
// //         <nav className="bg-blue-400 p-4">
// //           <div className="container mx-auto flex justify-between items-center">
// //             <div className="text-white font-bold text-lg">Logo</div>
// //             <div className="flex space-x-4">
// //               <NavItem title="Home 🏡" />
// //               <NavItem title="Trends 📈" />
// //               <NavItem title="Tools 🔧" />
// //               <NavItem title="Blogs 📰" />
// //               <NavItem title="Quiz 🤔" />
// //             </div>
// //             <div>
// //               <button 
// //               className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
// //                 Login / Register
// //               </button>
// //             </div>
// //           </div>
// //         </nav>
// //   );
// // }

// // export default Navbar


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = ({ loggedIn, age , coinsCount }) => {
//   const [navbarType, setNavbarType] = useState('');

//   // Function to determine the navbar type based on age
//   const determineNavbarType = (age) => {
//     if (age === 1) {
//       return 'navbarType1';
//     }
//     else {
//       return 'navbarType2';
//     }
//   };

//   // Set navbar type based on age when component mounts
//   useState(() => {
//     setNavbarType(determineNavbarType(age));
//   }, [age]);

//   // Different navbar components based on navbar type
//   const NavbarType1 = () => (
//     <nav className="bg-blue-500 flex justify-between items-center">
//       <div className="container mx-auto px-4 py-2">
//         {/* <Link to="/" className="text-white mr-4">Home</Link>
//         <Link to="/expense-tracker" className="text-white mr-4">Expense Tracker</Link> */}
//         <spam>Home</spam>
//         <spna>Expense Tracker</spna>
//       </div>
//       <div className="container mx-auto px-4 py-2">
//         <span className="text-white mr-2">🪙{coinsCount}</span>
//         {/* <img src="/coin-icon.png" alt="Coin" className="h-6 w-6" /> */}
//       </div>
//     </nav>
//   );

//   const NavbarType2 = () => (
//     <nav className="bg-green-500">
//       <div className="container mx-auto px-4 py-2">
//         <span className="text-white">Navbar for users between 18 and 25 years old</span>
//       </div>
//     </nav>
//   );

//   console.log(loggedIn);

//   return (
//     <>
//       {loggedIn ? (
//         <>
//           {navbarType === 'navbarType1' && <NavbarType1 />}
//           {navbarType === 'navbarType2' && <NavbarType2 />}
//         </>
//       ) : (
//         <nav className="bg-gray-500">
//           <div className="container mx-auto px-4 py-2">
//             <span className="text-white">Navbar for guests</span>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';

// const Navbar = ({ loggedIn, age, coinsCount }) => {
//   const [navbarType, setNavbarType] = useState('');

//   // Function to determine the navbar type based on age
//   const determineNavbarType = (age) => {
//     if (age === 1) {
//       return 'navbarType1';
//     }
//     else {
//       return 'navbarType2';
//     }
//   };

//   // Set navbar type based on age when component mounts
//   useState(() => {
//     setNavbarType(determineNavbarType(age));
//   }, [age]);

//   // Different navbar components based on navbar type
//   const NavbarType1 = () => (
//     <nav className="bg-blue-500 p-4 flex justify-between items-center">
//       <div className="flex space-x-8">
//         {/* <Link to="/" className="text-white">Home</Link>
//         <Link to="/expense-tracker" className="text-white">Expense Tracker</Link> */}
//         <span className=' text-white'>Home</span>
//         <span className=' text-white'>Expense Tracker</span>
//       </div>
//       <div className="flex items-center">
//         <span className="text-white mr-2">🪙{coinsCount}</span>
//       </div>
//     </nav>
//   );

//   const NavbarType2 = () => (
//     <nav className="bg-green-500 p-4">
//       <div className="flex space-x-4">
//         {/* <Link to="/" className="text-white">Home</Link>
//         <Link to="/trends" className="text-white">Trends</Link>
//         <Link to="/tools" className="text-white">Tools</Link>
//         <Link to="/blogs" className="text-white">Blogs</Link>
//         <Link to="/quiz" className="text-white">Quiz</Link> */}
//         <spam className="text-white">Home</spam>
//         <spam className="text-white">Trends</spam>
//         <spam className="text-white">Blogs</spam>
//         <spam className="text-white">Quiz</spam>
//         {/* <spam className="text-white">Home</spam> */}
//       </div>
//       <div className="flex items-center">
//         <span className="text-white mr-2">🪙{coinsCount}</span>
      
//       </div>
//     </nav>
//   );

//   return (
//     <>
//       {loggedIn ? (
//         <>
//           {navbarType === 'navbarType1' && <NavbarType1 />}
//           {navbarType === 'navbarType2' && <NavbarType2 />}
//         </>
//       ) : (
//         <nav className="bg-gray-500 p-4">
//           <div className="flex space-x-4">
//             {/* <Link to="/" className="text-white">Home</Link>
//             <Link to="/login" className="text-white">Login</Link>
//             <Link to="/register" className="text-white">Register</Link> */}
//             <span className="text-white">Home</span>
//             <span className="text-white">Login</span>
//             <span className="text-white">Register</span>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = ({ loggedIn, age, coinsCount }) => {
  const [navbarType, setNavbarType] = useState('');

  // Function to determine the navbar type based on age
  const determineNavbarType = (age) => {
    if (age === 1) {
      return 'navbarType1';
    }
    else {
      return 'navbarType2';
    }
  };

  // Set navbar type based on age when component mounts
  useState(() => {
    setNavbarType(determineNavbarType(age));
  }, [age]);

  // Different navbar components based on navbar type
  const NavbarType1 = () => (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <span className=' text-white hover:text-gray-300 cursor-pointer'>Home</span>
        <span className='text-white hover:text-gray-300 cursor-pointer'>Expense Tracker</span>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2">🪙{coinsCount}</span>
      </div>
    </nav>
  );

  const NavbarType2 = () => (
    <nav className="bg-green-500 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <span className="text-white hover:text-gray-300 cursor-pointer">Home</span>
        <span className="text-white hover:text-gray-300 cursor-pointer">Trends</span>
        <span className="text-white hover:text-gray-300 cursor-pointer">Blogs</span>
        <span className="text-white hover:text-gray-300 cursor-pointer">Quiz</span>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2">🪙{coinsCount}</span>
      </div>
    </nav>
  );

  return (
    <>
      {loggedIn ? (
        <>
          {navbarType === 'navbarType1' && <NavbarType1 />}
          {navbarType === 'navbarType2' && <NavbarType2 />}
        </>
      ) : (
        <nav className=" bg-red-500 p-4">
          <div className="flex justify-between space-x-4">
            <span className="text-white hover:text-gray-300 cursor-pointer">Home</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">Login/Register</span>
            {/* <span className="text-white hover:text-gray-300 cursor-pointer">Register</span> */}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;

