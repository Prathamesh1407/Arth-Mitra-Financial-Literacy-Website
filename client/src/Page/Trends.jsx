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

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Trends = () => {
//   const [stocks, setStocks] = useState([]);
//   const [timerId, setTimerId] = useState(null);

//   useEffect(() => {
//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     const id = setInterval(scrollStrip, 100); // Adjust scroll speed here
//     setTimerId(id);

//     return () => {
//       clearInterval(id);
//     };
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

//   const scrollStrip = () => {
//     const strip = document.getElementById('stock-strip');
//     strip.scrollLeft += 1; // Adjust scroll speed here

//     // Restart from the beginning if endpoint is reached
//     if (strip.scrollLeft >= strip.scrollWidth - strip.clientWidth) {
//       strip.scrollLeft = 0;
//     }
//   };

//   return (
//     <div className="mt-4 overflow-hidden">
//       <h2 className="text-xl font-bold mb-2">Stock Trends</h2>
//       <div className="flex" id="stock-strip">
//         {stocks.map((stock, index) => (
//           <div key={index} className="flex-shrink-0 px-4 py-2 bg-blue-200 mr-2 rounded-md">
//             <div>Price: ${stock.price.toFixed(2)}</div>
//             <div>% Change: {stock.percentChange.toFixed(2)}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trends;


import React from 'react';

const Trends = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-3xl mb-4 text-center">Financial Trends</h1> */}
      {/* Embed the Strip component */}
      <div className="font-source-sans-pro font-normal text-base leading-6 text-black border-0 box-border block h-46 w-full">
        <iframe className="h-full w-full" src='https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22AMEX%3ASPY%22%7D%2C%7B%22proName%22%3A%22NASDAQ%3AQQQ%22%7D%2C%7B%22proName%22%3A%22AMEX%3ADIA%22%7D%2C%7B%22proName%22%3A%22INDEX%3AV9Y0%22%7D%2C%7B%22proName%22%3A%22CAPITALCOM%3AEURUSD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22www.investopedia.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22www.investopedia.com%2F%22%7D' title="Financial Trends" />
      </div>
    </div>
  );
};

export default Trends;
