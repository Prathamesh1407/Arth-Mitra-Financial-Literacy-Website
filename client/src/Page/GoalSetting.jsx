import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { toast } from "react-hot-toast";
import CategoryForm from "../Components/CategoryForm";
import axios from "axios";
const GoalSetting = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [currentAmount, setCurrentAmount] = useState(0);
  const [updatedAmount, setUpdatedAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("/addGoal", { currentAmount, totalAmount, description })
        .then((res) => {
          if (res.success) {
            toast.success(`${name} Goal is Created`);
            setName("");
            getAllGoals();
          } else {
            toast.error(res.message);
          }
        });
    } catch (err) {
      console.log("Error in the Category Form", err);
    }
  };
  const getAllGoals = async () => {
    try {
      await axios
        .get("/getAllGoal")
        .then((response) => {
          if (response?.success) {
            setCategories(response?.allCategories);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
      toast.error("Error while getting the Categories ");
    }
  };
  useEffect(() => {
    getAllGoals();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/UpdateAmount`, { amount: updatedAmount, id: selected._id })
        .then((res) => {
          if (res.success) {
            toast.success(`Amount Updated , 🪙 1 Coin for You as Reward`);
            setVisible(false);
            setSelected(null);
            getAllGoals();
            //setUpdatedName("")
          } else {
            toast.error(res.message);
          }
        });
    } catch (err) {
      console.log("Error in the Category Form", err);
    }
  };
  // const [goal, setGoal] = useState('');
  // const [goalPrice, setGoalPrice] = useState('');
  // const [monthlyIncome, setMonthlyIncome] = useState('');
  // const [dailySavings, setDailySavings] = useState('');
  // const [remainingAmount,setRemainingAmount] = useState('');
  // const [estimatedTime, setEstimatedTime] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Convert input values to numbers
  //   const goalPriceNum = parseFloat(goalPrice);
  //   const monthlyIncomeNum = parseFloat(monthlyIncome);
  //   const dailySavingsNum = parseFloat(dailySavings);

  //   // Calculate remaining amount needed to achieve the goal
  //   const remainingAmountNum = goalPriceNum - (monthlyIncomeNum + dailySavingsNum * 30); // Assuming 30 days in a month
  //   setRemainingAmount(remainingAmountNum);

  //   // Calculate estimated time required to achieve the goal based on average daily savings
  //   const estimatedTimeNum = Math.ceil(remainingAmountNum / dailySavingsNum);
  //   setEstimatedTime(estimatedTimeNum);
  // };

  return (
    <div className="col-md-9">
      <h1>Manage Categories</h1>
      <div className="p-3">
        <CategoryForm
          handleSubmit={handleSubmit}
          value={name}
          setValue={setName}
        />
      </div>
      <div className="w-75">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((item) => {
              return (
                <>
                  <tr>
                    <td key={item._id}>{item.name}</td>
                    <td>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() => {
                          setVisible(true);
                          setUpdatedAmount(item.amount);
                          setSelected(item);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
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

{
  /* <table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
  </tbody>
</table> */
}
