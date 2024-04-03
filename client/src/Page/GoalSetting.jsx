import React, { useState } from 'react';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');
  const [goalPrice, setGoalPrice] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [dailySavings, setDailySavings] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input values to numbers
    const goalPriceNum = parseFloat(goalPrice);
    const monthlyIncomeNum = parseFloat(monthlyIncome);
    const dailySavingsNum = parseFloat(dailySavings);

    // Calculate remaining amount needed to achieve the goal
    const remainingAmountNum = goalPriceNum - (monthlyIncomeNum + dailySavingsNum * 30); // Assuming 30 days in a month
    setRemainingAmount(remainingAmountNum);

    // Calculate estimated time required to achieve the goal based on average daily savings
    const estimatedTimeNum = Math.ceil(remainingAmountNum / dailySavingsNum);
    setEstimatedTime(estimatedTimeNum);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h1>Goal Setting</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="goal">Goal:</label>
            <input type="text" id="goal" value={goal} onChange={(e) => setGoal(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="goalPrice">Price of the Goal:</label>
            <input type="number" id="goalPrice" value={goalPrice} onChange={(e) => setGoalPrice(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="monthlyIncome">Monthly Income:</label>
            <input type="number" id="monthlyIncome" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="dailySavings">Daily Savings:</label>
            <input type="number" id="dailySavings" value={dailySavings} onChange={(e) => setDailySavings(e.target.value)} style={{ marginLeft: '10px', padding: '5px' }} />
          </div>
          <button type="submit" style={{ marginLeft: '10px', padding: '5px' }}>Calculate</button>
        </form>
        {remainingAmount !== '' && estimatedTime !== '' && (
          <div style={{ marginTop: '20px' }}>
            <h2>Remaining Amount Required: ${remainingAmount}</h2>
            {/* <h2>Estimated Time Required: {estimatedTime} days</h2> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalSetting;