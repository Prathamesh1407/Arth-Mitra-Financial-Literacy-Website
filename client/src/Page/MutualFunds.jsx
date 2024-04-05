import React, { useState, useEffect } from "react";
import "./MutualFunds.css";
import MutualFundImage from "./MutualFund.jpeg";

const MutualFunds = () => {
  const [mutualFunds, setMutualFunds] = useState([]);

  useEffect(() => {
    const fetchMutualFunds = async () => {
      try {
        const response = await fetch(
          "https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "1fd94c2e2cmsh1a56b56362e123cp11dd3ejsn314502f3af27",
              "X-RapidAPI-Host": "latest-mutual-fund-nav.p.rapidapi.com",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const sortedFunds = data
            .sort((a, b) => b.performance - a.performance)
            .slice(0, 10);
          setMutualFunds(sortedFunds);
        } else {
          console.error("Failed to fetch mutual funds:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMutualFunds();
  }, []);

  return (
    <div className="mutual-funds-container bg-blue-500">
      <div className="mutual-funds-header">
        <div className="mutual-funds-header-right">
          {/* <h2 className="mutual-funds-title">Mutual Funds</h2> */}
          <div className="mutual-funds-header-right">
            <h2 className="mutual-funds-title text-3xl text-center mx-auto mt-3 mb-3">
              Mutual Funds
            </h2>
            <div className="mutual-funds-paragraph text-lg font-semibold">
              <p>
                Mutual funds pool money from multiple investors to invest in a
                diversified portfolio of stocks, bonds, or other assets. They
                offer diversification, professional management, and a variety of
                investment options, including equity funds, bond funds, and
                index funds.
              </p>
              <p>
                Mutual funds provide liquidity and transparency but may charge
                fees such as management fees, administrative fees, and sales
                loads. Despite the fees, they remain popular investment choices
                due to their convenience and potential for long-term growth.
              </p>
            </div>
            <h2 className="mutual-funds-subtitle text-2xl text-center mb-2">
              Top 10 Performing Mutual Funds
            </h2>
          </div>
        </div>
        <div className="mutual-funds-header-left">
          <img
            src={MutualFundImage}
            alt="Mutual Fund"
            className="mutual-funds-image"
          />
        </div>
      </div>
      <div className="mutual-funds-cards ml-10">
        {mutualFunds.map((fund, index) => (
          <div key={index} className="mutual-funds-card">
            <div className="mutual-funds-info">
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Scheme Name:</p>
                <p>{fund["Scheme Name"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Mutual Fund Family:</p>
                <p>{fund["Mutual Fund Family"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Category:</p>
                <p>{fund["Scheme Category"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Scheme Code:</p>
                <p>{fund["Scheme Code"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">ISIN Div Payout/ISIN Growth:</p>
                <p>{fund["ISIN Div Payout/ISIN Growth"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Scheme Type:</p>
                <p>{fund["Scheme Type"]}</p>
              </div>
              <div className="mutual-funds-info-box">
                <p className="font-semibold">Net Asset Value:</p>
                <p>{fund["Net Asset Value"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MutualFunds;
