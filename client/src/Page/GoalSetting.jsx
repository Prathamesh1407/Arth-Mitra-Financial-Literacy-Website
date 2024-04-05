import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { toast } from "react-hot-toast";
import CategoryForm from "../Components/CategoryForm";
import axios from "axios";
import ProgressBar from "../Components/ProgressBar";
import { useCookies } from "react-cookie";
import TextInput from "../Components/TextInput";
const GoalSetting = () => {
  const [updatedAmount, setUpdatedAmount] = useState("");
  const [visible, setVisible] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [goals, setGoals] = useState([]);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [selected, setSelected] = useState(null);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/UpdateAmount`,
        {
          amount: parseInt(updatedAmount),
          id: selected._id,
          accessToken: cookies.token,
        }
      );

      if (data) {
        setVisible(false);
        getAllGoals();
        setSelected(null);
        toast.success(`Amount Updated , 🪙 1 Coin for You as Reward`);
        setUpdatedAmount(0);
      } else {
        toast.error("Error While Updating");
      }
    } catch (err) {
      console.log("Error in the Category Form", err);
    }
  };

  const getAllGoals = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/getAllGoal`,
        {
          accessToken: cookies.token,
        }
      );
      if (data) {
        setGoals(data?.allGoals);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error while getting the Goals ");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/addGoal`,
        { currentAmount, totalAmount, description, accessToken: cookies?.token }
      );

      if (data) {
        toast.success(`${description} Goal is Created ✅`);
        // setName("");
        getAllGoals();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log("Error in the Category Form", err);
    }
  };

  useEffect(() => {
    getAllGoals();
  }, []);
  return (
    <div className="col-md-9">
      <h1 className=" text-2xl text-center font-semibold mt-3">Manage Goals</h1>
      <div className="p-3">
        <TextInput
          label={"Goal"}
          placeholder={"Enter Your Goal"}
          value={description}
          setValue={setDescription}
        />
        <TextInput
          label={"Total Amount to Complete Goal"}
          placeholder={"Enter the Total Amount to Complete Your Goal"}
          value={totalAmount}
          setValue={setTotalAmount}
        />
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Your Goal</button>
      </div>
      <div className="w-75 flex flex-wrap">
        {goals?.map((item, ind) => {
          return (
            <div key={ind} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <ProgressBar
                percentage={((item.currentAmount / item.totalAmount) * 100).toFixed(2)}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.description}</div>
                <div className="font-bold text-xl mb-2">
                  Current Amount Saved : ₹ {item.currentAmount}
                </div>
                <div className="font-bold text-xl mb-2">
                  ₹ {item.totalAmount - item.currentAmount} Left to Save More
                </div>
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                  <button
                    onClick={() => {
                      setVisible(true);
                      setSelected(item);
                      setUpdatedAmount("");
                    }}
                  >
                    Update Amount
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
        <CategoryForm
          handleSubmit={handleUpdate}
          value={updatedAmount}
          setValue={setUpdatedAmount}
        />
      </Modal>
    </div>
  );
};

export default GoalSetting;





















































// import React, { useState, useEffect } from "react";
// import { Modal } from "antd";
// import { toast } from "react-hot-toast";
// import CategoryForm from "../Components/CategoryForm";
// import axios from "axios";
// import ProgressBar from "../Components/ProgressBar";
// import { useCookies } from "react-cookie";
// import TextInput from "../Components/TextInput";
// const GoalSetting = () => {
//   const [updatedAmount, setUpdatedAmount] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [cookies, setCookie] = useCookies(["token"]);
//   const [goals, setGoals] = useState([]);
//   const [currentAmount, setCurrentAmount] = useState(0);
//   const [description, setDescription] = useState("");
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/UpdateAmount`,
//         {
//           amount: parseInt(updatedAmount),
//           id: selected._id,
//           accessToken: cookies.token,
//         }
//       );

//       if (data) {
//         setVisible(false);
//         getAllGoals();
//         setSelected(null);
//         toast.success(`Amount Updated , 🪙 1 Coin for You as Reward`);
//         setUpdatedAmount(0);
//       } else {
//         toast.error("Error While Updating");
//       }
//     } catch (err) {
//       console.log("Error in the Category Form", err);
//     }
//   };

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/addGoal`,
//         { currentAmount, totalAmount, description, accessToken: cookies?.token }
//       );

//       if (data) {
//         toast.success(`${description} Goal is Created ✅`);
//         // setName("");
//         getAllGoals();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       console.log("Error in the Category Form", err);
//     }
//   };

//   useEffect(() => {
//     getAllGoals();
//   }, []);
//   return (
//     <div className="col-md-9">
//       <h1>Manage Goals</h1>
//       <div className="p-3">
//         <TextInput
//           label={"Goal"}
//           placeholder={"Enter Your Goal"}
//           value={description}
//           setValue={setDescription}
//         />
//         <TextInput
//           label={"Total Amount to Complete Goal"}
//           placeholder={"Enter the Total Amount to Complete Your Goal"}
//           value={totalAmount}
//           setValue={setTotalAmount}
//         />
//       </div>
//       <div>
//         <button onClick={handleSubmit}>Add Your Goal</button>
//       </div>
//       <div className="w-75">
//         {goals?.map((item, ind) => {
//           return (
//             <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//               <ProgressBar
//                 percentage={(item.currentAmount / item.totalAmount) * 100}
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{item.description}</div>
//                 <div className="font-bold text-xl mb-2">
//                   Current Amount Saved : ₹ {item.currentAmount}
//                 </div>
//                 <div className="font-bold text-xl mb-2">
//                   ₹ {item.totalAmount - item.currentAmount} Left to Save More
//                 </div>
//                 <div className="px-6 py-4">
//                   <button
//                     onClick={() => {
//                       setVisible(true);
//                       setSelected(item);
//                       setUpdatedAmount("");
//                     }}
//                   >
//                     Update Amount
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
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

// export default GoalSetting;
