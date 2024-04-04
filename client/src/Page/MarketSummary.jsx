import React, { useState, useEffect } from 'react';
const GAINERS_URL = 'https://www.nseindia.com/api/live-analysis-variations?index=gainers';
const LOSERS_URL = 'https://www.nseindia.com/api/live-analysis-variations?index=loosers';
const MARKET_STATUS_URL = 'https://www.nseindia.com/api/marketStatus';

const MarketSummary = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [marketStatus, setMarketStatus] = useState('');

  useEffect(() => {
    fetch(GAINERS_URL)
      .then(response => response.json())
      .then(data => setGainers(data));

    fetch(LOSERS_URL)
      .then(response => response.json())
      .then(data => setLosers(data));

    fetch(MARKET_STATUS_URL)
      .then(response => response.json())
      .then(data => setMarketStatus(data.status));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4 text-center">Market Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top 5 Gainers */}
        <div className="bg-green-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Top 5 Gainers</h2>
          <ul>
            {gainers.slice(0, 5).map((gainer, index) => (
              <li key={index}>{gainer.name}: {gainer.change}</li>
            ))}
          </ul>
        </div>

        {/* Top 5 Losers */}
        <div className="bg-red-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Top 5 Losers</h2>
          <ul>
            {losers.slice(0, 5).map((loser, index) => (
              <li key={index}>{loser.name}: {loser.change}</li>
            ))}
          </ul>
        </div>

        {/* Market Summary */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Market Status</h2>
          <p>{marketStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;
