// // import React from 'react';

// // const Card = ({ imageUrl, heading, description }) => {
// //   return (
// //     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-blue-300">
// //       <img className="w-full" src={imageUrl} alt="Card" />
// //       <div className="px-6 py-4">
// //         <div className="font-bold text-xl mb-2">{heading}</div>
// //         <p className="text-gray-700 text-base">{description}</p>
// //       </div>
// //       <div className="px-6 pt-4 pb-2">
// //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
// //           Learn More
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Card;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ imgSrc, title, description }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img className="w-full" src={imgSrc} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 py-4">
//         {/* <Link to="/login" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Learn More
//         </Link> */}
//         <span className=' text-black justify-center items-center flex'>Learn More</span>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from 'react';

// const Card = ({ imgSrc, title, description }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-blue-300">
//       <img className="w-full h-40 object-cover" src={imgSrc} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border w-3/4 border-gray-200 hover:border-orange-500 transition duration-300 ease-in-out cursor-pointer">
      <img className="w-full h-2/3 object-cover" src={imgSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-center items-center px-6 pt-4 pb-2 mb-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;


// 

// import React from 'react';
// import demo from './demo.css';

// const Card = ({ imgSrc1, imgSrc2, title, description }) => {
//   return (
//     <div className="max-w-md rounded overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 transition duration-300 ease-in-out m-4 cursor-pointer">
//       <div className="flex items-center justify-center">
//         <img className=" w-48 rounded-full h-48 object-cover" src={imgSrc1} alt={title} />
//         <img className="w-48 h-48 object-cover" src={imgSrc2} alt={title} />
//         <i ></i>
//       </div>
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2 mb-5">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
