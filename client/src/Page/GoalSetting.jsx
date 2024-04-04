import React, { useState } from "react";
import { Modal } from "antd";
import CategoryForm from "../Components/CategoryForm";
const GoalSetting = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await makeAuthenticatedPOSTRequest(
        "/api/v1/category/create-category",
        { name },
        auth?.token
      ).then((res) => {
        if (res.success) {
          toast.success(`${name} Category is Created`);
          setName("");
          getAllCategories();
        } else {
          toast.error(res.message);
        }
      });
    } catch (err) {
      console.log("Error in the Category Form", err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(updatedName);
      await makeAuthenticatedPUTRequest(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName },
        auth?.token
      ).then((res) => {
        if (res.success) {
          toast.success(`${selected.name} is updated to ${updatedName}`);
          setVisible(false);
          setSelected(null);
          setUpdatedName("");
          getAllCategories();
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
                          setUpdatedName(item.name);
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
          value={updatedName}
          setValue={setUpdatedName}
        />
      </Modal>
    </div>
  );
};

export default GoalSetting;

{/* <table class="table-fixed">
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
</table> */}