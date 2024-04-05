import React, { useState } from 'react';

const SIPCalculator = () => {
  const initialInvestment = '';
  const initialYears = '';
  const initialReturnRate = '';
  const initialCurrency = 'Rs';
  const [investment, setInvestment] = useState(initialInvestment);
  const [years, setYears] = useState(initialYears);
  const [returnRate, setReturnRate] = useState(initialReturnRate);
  const [currency, setCurrency] = useState(initialCurrency);
  const [useSIP, setUseSIP] = useState(false);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [wealthGained, setWealthGained] = useState(0);
  const [maturityValue, setMaturityValue] = useState(0);

  const calculateResult = () => {
    const amount = parseInt(investment.replace(/\D/g, ''));
    const yearsInt = parseInt(years);
    const returnRateInt = parseInt(returnRate.replace(/\D/g, ''));

    let totalInvestmentValue = isNaN(amount) ? 0 : amount;
    let wealthGainedValue = 0;
    let maturityValueResult = 0;

    if (isNaN(yearsInt) || isNaN(returnRateInt)) {
      alert('Please enter valid values for years and return rate.');
      return;
    }

    if (useSIP) {
      wealthGainedValue = Math.round(((Math.pow(1 + (Math.pow(1 + returnRateInt / 100, 1 / 12) - 1), yearsInt * 12) - 1) /
        (Math.pow(1 + returnRateInt / 100, 1 / 12) - 1)) * amount);
    } else {
      wealthGainedValue = Math.round(Math.pow(1 + returnRateInt / 100, yearsInt) * amount);
    }

    maturityValueResult = wealthGainedValue - totalInvestmentValue;

    setTotalInvestment(totalInvestmentValue);
    setWealthGained(wealthGainedValue);
    setMaturityValue(maturityValueResult);
  };

  const clearValues = () => {
    setInvestment(initialInvestment);
    setYears(initialYears);
    setReturnRate(initialReturnRate);
    setCurrency(initialCurrency);
    setUseSIP(false);
    setTotalInvestment(0);
    setWealthGained(0);
    setMaturityValue(0);
  };

  const currencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const commas = () => {
    let amountValue = investment.replace(/\D/g, '');
    let temp = amountValue.split(" ");
    if (temp.includes("Rs")) {
      amountValue = amountValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      amountValue = amountValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setInvestment(amountValue.concat(" ").concat("Rs"));
    }
  };

  const percentage = () => {
    let value = returnRate.replace(/\D/g, '');
    let temp = value.split(" ");
    if (temp.length < 2)
      setReturnRate(value.concat(" ").concat("%"));
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="text-center text-3xl text-blue-500 mb-8">SIP Calculator</div>
        <div className="mb-4">
          <label htmlFor="investment" className="block text-gray-700 mb-2">Investment Amount:</label>
          <input type="text" id="investment" value={investment} onChange={(e) => setInvestment(e.target.value)} onBlur={commas} placeholder="Enter amount" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="years" className="block text-gray-700 mb-2">Investment Duration (Years):</label>
          <input type="number" id="years" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Enter years" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="return-rate" className="block text-gray-700 mb-2">Expected Annual Return Rate:</label>
          <input type="text" id="return-rate" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} onBlur={percentage} placeholder="Enter rate" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="currency" className="block text-gray-700 mb-2">Currency:</label>
          <select id="currency" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" value={currency} onChange={currencyChange}>
            <option value="Rs">Rupees</option>
            <option value="$">Dollars</option>
            <option value="€">Euros</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="useSIP" className="flex items-center">
            <input type="checkbox" id="useSIP" checked={useSIP} onChange={(e) => setUseSIP(e.target.checked)} className="mr-2" />
            <span className="text-gray-700">Use SIP (Systematic Investment Plan)</span>
          </label>
        </div>
        <div className="text-center">
          <button onClick={calculateResult} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 cursor-pointer">
            Calculate
          </button>
          <button onClick={clearValues} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-105 hover:bg-red-600 cursor-pointer">
            Clear
          </button>
        </div>
        <div className="mt-8">
          <div className="text-gray-700 font-bold mb-2">Results:</div>
          <div className="text-xl">{`Total Investment: ${totalInvestment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</div>
          <div className="text-xl">{`Wealth Gained: ${wealthGained.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</div>
          <div className="text-xl">{`Maturity Value: ${maturityValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</div>
        </div>
      </div>
      
    </div>
  );
};

export default SIPCalculator;
