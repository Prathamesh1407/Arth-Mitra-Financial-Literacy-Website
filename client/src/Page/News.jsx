// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// const News = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=163341122517459f9e77917cc013a681');
//         console.log(response);
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);


// //   TODO : read more 
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {data?.articles?.map((item) => (
//         <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
//           <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//           <p className="text-gray-700 mb-4">{item.description}</p>
          
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default News;


// import React, { useState, useEffect } from 'react';

// const fetchData = async () => {
//   try {
//     const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=163341122517459f9e77917cc013a681');
//     const data = await response.json();
//     return data.articles;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

// const NewsCard = ({ article }) => {
//   const { title, description, url, urlToImage } = article;

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//       <img className="w-full" src={urlToImage} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">{description}</p>
//       </div>
//       <div className="px-6 py-4">
//         <a
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// const News = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchData().then((data) => {
//       setArticles(data);
//     });
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold text-center my-8">Latest News</h1>
//       <div className="flex flex-wrap justify-center">
//         {articles.map((article, index) => (
//           <NewsCard key={index} article={article} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default News;


import React, { useState, useEffect } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=163341122517459f9e77917cc013a681');
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (!description || description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const NewsCard = ({ article }) => {
    const { title, description, url, urlToImage } = article;

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={urlToImage} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {truncateDescription(description, 100)}
          </p>
        </div>
        <div className="px-6 py-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Read More
          </a>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchData().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Latest News</h1>
      <div className="flex flex-wrap justify-center">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
