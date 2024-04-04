import React, { useState, useEffect } from 'react';
import Chart from '../Components/Chart';
import { Modal } from 'antd';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('outgoing'); // 'outgoing' or 'incoming'
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Calculate current amount based on expenses
    let totalIncome = 0;
    let totalOutgoing = 0;
    expenses.forEach((expense) => {
      if (expense.type === 'incoming') {
        totalIncome += expense.amount;
      } else {
        totalOutgoing += expense.amount;
      }
    });
    const currentAmount = totalIncome - totalOutgoing;
    setAmount(currentAmount);
  }, [expenses]);

  const addExpense = () => {
    if (amount === 0 || category === '') return;

    const newExpense = {
      amount,
      category,
      type,
      date: new Date().toLocaleDateString()
    };

    setExpenses([...expenses, newExpense]);
    setAmount(0);
    setCategory('');
  };

  const clearAllExpenses = () => {
    setExpenses([]);
  };

  return (
    <div className="container mx-auto mt-8 border p-8 rounded-lg">
      <h1 className="text-3xl mb-4 text-center">Expense Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-green-200 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">Total Income</p>
          <p className="text-xl">{expenses.filter(expense => expense.type === 'incoming').reduce((acc, cur) => acc + cur.amount, 0)}</p>
        </div>
        <div className="bg-red-200 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">Total Outgoing</p>
          <p className="text-xl">{expenses.filter(expense => expense.type === 'outgoing').reduce((acc, cur) => acc + cur.amount, 0)}</p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg">
          <p className="text-lg font-bold mb-2">Total Amount</p>
          <p className="text-xl">{amount}</p>
        </div>
      </div>
      <div className="border p-4 rounded-lg mb-4">
        <h2 className="text-xl mb-4">Expense Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="outgoing">Outgoing</option>
            <option value="incoming">Incoming</option>
          </select>
        </div>
        <div className="flex justify-evenly">
          <button onClick={addExpense} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Expense</button>
          <button onClick={() => setVisible(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Show Chart</button>
        </div>
      </div>

      <h2 className="text-xl mt-8">Expenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {expenses.map((expense, index) => (
          <div key={index} className={`bg-white p-4 rounded-lg border ${expense.type === 'outgoing' ? 'border-red-500' : 'border-green-500'}`}>
            <p className="text-sm font-bold mb-2">{expense.date}</p>
            <p className="text-lg">{expense.category}</p>
            <p className="text-sm mt-2">{expense.amount} {expense.type === 'outgoing' ? '(Outgoing)' : '(Incoming)'}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button onClick={clearAllExpenses} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">Clear All</button>
      </div>

      <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
        <Chart />
      </Modal>
    </div>
  );
};

export default ExpenseTracker;



