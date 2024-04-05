// import { useState } from "react";
// import ProgressBar from "./ProgressBar";
// import { toast } from "react-hot-toast";
// import { Modal } from "antd";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// const [cookies, setCookie] = useCookies(["token"]);

// import CategoryForm from "./CategoryForm";
// const Card = ({ info,value,setValue }) => {
//   const [updatedAmount, setUpdatedAmount] = useState(0);
//   const [visible, setVisible] = useState(false);
//   //const [selected, setSelected] = useState(null);

//   const getAllGoals = async () => {
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/getAllGoal`,
//         {
//           accessToken: cookies.token,
//         }
//       );
//       if (data) {
//         setGoals(data?.allGoals);
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Error while getting the Goals ");
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/UpdateAmount`,
//         { amount: updatedAmount, id: info._id, accessToken: cookies.token }
//       );

//       if (data) {
//         toast.success(`Amount Updated , 🪙 1 Coin for You as Reward`);
//         setVisible(false);
//         getAllGoals();
//         //setUpdatedName("")
//       } else {
//         toast.error("Error While Updating");
//       }
//     } catch (err) {
//       console.log("Error in the Category Form", err);
//     }
//   };
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//       {/* <img className="w-full" src={urlToImage} alt={title} /> */}
//       <ProgressBar percentage={(info.currentAmount / info.totalAmount) * 100} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{info.description}</div>
//         <div className="font-bold text-xl mb-2">
//           Current Amount Saved : ₹ {info.currentAmount}
//         </div>
//         <div className="font-bold text-xl mb-2">
//           ₹ {info.totalAmount - info.currentAmount} Left to Save More
//         </div>
//       </div>
//       <div className="px-6 py-4">
//         <button
//           onClick={() => {
//             setVisible(true);
//             setUpdatedAmount(info.amount);
//           }}
//         >
//           Update Amount
//         </button>
//       </div>
//       <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
//         <CategoryForm
//           handleSubmit={handleUpdate}
//           value={updatedAmount}
//           setValue={setUpdatedAmount}
//         />
//       </Modal>
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

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, description, route }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border w-3/4 border-gray-200 hover:border-orange-500 transition duration-300 ease-in-out cursor-pointer">
      <img className="w-full h-2/3 object-cover" src={imgSrc} alt={title} style={{}}/>
      <div className="px-6 py-4">
        <div className="font-bold text-black text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-center items-center px-6 pt-4 pb-2 mb-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <Link to={`/${route}`}>Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
