import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=163341122517459f9e77917cc013a681');
        console.log(response);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


//   TODO : read more 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.articles?.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-4">{item.description}</p>
          
          
        </div>
      ))}
    </div>
  );
};

export default News;
