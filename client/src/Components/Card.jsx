// import React from 'react';

// const Card = ({ imageUrl, heading, description }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-blue-300">
//       <img className="w-full" src={imageUrl} alt="Card" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{heading}</div>
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
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        {/* <Link to="/login" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </Link> */}
        <span>Learn More</span>
      </div>
    </div>
  );
};

export default Card;

