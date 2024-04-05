import axios from "axios";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import Trends from "./Trends";

const MarketSummary = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [marketStatus, setMarketStatus] = useState("");
  console.log(marketStatus);
  const getTrends = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/getTrends`,
        {
          accessToken: cookies?.token,
        }
      );

      if (data) {
        setGainers(data.gain);
        setLosers(data.lose);
        setMarketStatus(data.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrends();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <Trends/>
      <h1 className="text-3xl mb-4 text-center">Market Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top 5 Gainers */}
        <div className="bg-green-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Top 5 Gainers</h2>
          <ul>
            {gainers?.NIFTY?.data?.slice(0, 5).map((gainer, index) => (
              <li key={index}>
                {gainer.symbol}: {gainer.perChange}
              </li>
            ))}
          </ul>
        </div>

        {/* Top 5 Losers */}
        <div className="bg-red-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Top 5 Losers</h2>
          <ul>
            {losers?.NIFTY?.data?.slice(0, 5).map((loser, index) => (
              <li key={index}>
                {loser.symbol}: {loser.perChange}
              </li>
            ))}
          </ul>
        </div>

        {/* Market Summary */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Market Status</h2>
          Index - NIFTY50
          <p>
            Market Trend :{" "}
            {marketStatus[0]?.indicativenifty50?.perChange >= 0
              ? "Bullish"
              : "Bearish"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;
