// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Trends = () => {
//   const [stocks, setStocks] = useState([]);
//   const [isRunning, setIsRunning] = useState(false);
//   const [timerId, setTimerId] = useState(null);

//   useEffect(() => {
//     fetchStockData();
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       // Fetch stock data from Alpha Vantage API
//       const response = await axios.get(
//         'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=52ZHCV6RFG6UQMDB'
//       );

//       // Parse and extract relevant data
//       const stockData = response.data['Time Series (5min)'];
//       const stocks = Object.entries(stockData).map(([timestamp, data]) => ({
//         timestamp,
//         price: parseFloat(data['4. close']),
//         percentChange: parseFloat(data['4. close']) - parseFloat(data['1. open']),
//       }));

//       // Update state with fetched stock data
//       setStocks(stocks);
//     } catch (error) {
//       console.error('Error fetching stock data:', error);
//     }
//   };

//   const handleToggleRunning = () => {
//     if (isRunning) {
//       clearInterval(timerId);
//     } else {
//       const id = setInterval(scrollStrip, 100); // Adjust scroll speed here
//       setTimerId(id);
//     }
//     setIsRunning(!isRunning);
//   };

//   const scrollStrip = () => {
//     const strip = document.getElementById('stock-strip');
//     strip.scrollLeft += 1; // Adjust scroll speed here
//   };

//   return (
//     <div className="mt-4">
//       <h2 className="text-xl font-bold mb-2">Stock Trends</h2>
//       <div className="flex overflow-x-auto h-16 border border-gray-300 rounded-md mb-4">
//         <div id="stock-strip" className="flex">
//           {stocks.map((stock, index) => (
//             <div key={index} className="flex-shrink-0 px-4 py-2 bg-blue-200 mr-2 rounded-md">
//               <div>Price: ${stock.price.toFixed(2)}</div>
//               <div>% Change: {stock.percentChange.toFixed(2)}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={handleToggleRunning}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         {isRunning ? 'Stop' : 'Start'} Running
//       </button>
//     </div>
//   );
// };

// export default Trends;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trends = () => {
  const [stocks, setStocks] = useState([]);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    fetchStockData();
  }, []);

  useEffect(() => {
    const id = setInterval(scrollStrip, 100); // Adjust scroll speed here
    setTimerId(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  const fetchStockData = async () => {
    try {
      // Fetch stock data from Alpha Vantage API
      const response = await axios.get(
        'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=52ZHCV6RFG6UQMDB'
      );

      // Parse and extract relevant data
      const stockData = response.data['Time Series (5min)'];
      const stocks = Object.entries(stockData).map(([timestamp, data]) => ({
        timestamp,
        price: parseFloat(data['4. close']),
        percentChange: parseFloat(data['4. close']) - parseFloat(data['1. open']),
      }));

      // Update state with fetched stock data
      setStocks(stocks);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const scrollStrip = () => {
    const strip = document.getElementById('stock-strip');
    strip.scrollLeft += 1; // Adjust scroll speed here

    // Restart from the beginning if endpoint is reached
    if (strip.scrollLeft >= strip.scrollWidth - strip.clientWidth) {
      strip.scrollLeft = 0;
    }
  };

  return (
    <div className="mt-4 overflow-hidden">
      <h2 className="text-xl font-bold mb-2">Stock Trends</h2>
      <div className="flex" id="stock-strip">
        {stocks.map((stock, index) => (
          <div key={index} className="flex-shrink-0 px-4 py-2 bg-blue-200 mr-2 rounded-md">
            <div>Price: ${stock.price.toFixed(2)}</div>
            <div>% Change: {stock.percentChange.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;