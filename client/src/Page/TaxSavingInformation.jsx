// import React from 'react';

// const TaxSavingInfoCard = ({ title, description, positive }) => {
//   const bgColor = positive ? 'bg-green-100' : 'bg-red-100';
//   const textColor = positive ? 'text-green-700' : 'text-red-700';

//   return (
//     <div className={`max-w-md w-full px-4 py-6 mx-auto mb-8 rounded-lg shadow-lg ${bgColor}`}>
//       <h2 className={`text-2xl font-bold text-center ${textColor}`}>{title}</h2>
//       <p className={`mt-4 text-lg ${textColor}`}>{description}</p>
//     </div>
//   );
// };

// const TaxSavingInformation = () => (
//   <div className="flex justify-center items-center h-screen">
//     <div className="max-w-3xl w-full px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Tax Saving Information</h1>
//       <TaxSavingInfoCard
//         title="Advantages of Tax Saving Investments"
//         description="Tax-saving investments help reduce your taxable income, leading to lower tax liability."
//         positive={true}
//       />
//       <TaxSavingInfoCard
//         title="Different Tax-Saving Options"
//         description="There are various tax-saving options available under different sections of the Income Tax Act, such as 80C, 80D, 80E, etc."
//         positive={true}
//       />
//       <TaxSavingInfoCard
//         title="Risks Associated with ELSS Funds"
//         description="ELSS funds carry market risk as they primarily invest in equity markets. However, they offer higher returns in the long run."
//         positive={false}
//       />
//       <TaxSavingInfoCard
//         title="Tax Implications of Gold Investments"
//         description="Gold investments are taxed at a higher rate and may not generate significant income. It's advisable to consider other tax-saving options."
//         positive={false}
//       />
//       {/* Add more TaxSavingInfoCard components for additional key points */}
//     </div>
//   </div>
// );

// export default TaxSavingInformation;


import React from 'react';

const TaxSavingInfoCard = ({ title, description, positive }) => {
  const bgColor = positive ? 'bg-green-100' : 'bg-red-100';
  const textColor = positive ? 'text-green-700' : 'text-red-700';

  return (
    <div className={`max-w-md w-full px-4 py-6 mx-auto mb-8 rounded-lg shadow-lg ${bgColor}`}>
      <h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>{title}</h3>
      <p className={`mt-2 text-lg ${textColor}`}>{description}</p>
    </div>
  );
};

const TaxSavingInformation = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="max-w-3xl w-full px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Tax Saving Information</h1>
      <TaxSavingInfoCard
        title="Advantages of Tax Saving Investments"
        description="Tax-saving investments help reduce your taxable income, leading to lower tax liability."
        positive={true}
      />
      <TaxSavingInfoCard
        title="Different Tax-Saving Options"
        description="There are various tax-saving options available under different sections of the Income Tax Act, such as 80C, 80D, 80E, etc."
        positive={true}
      />
      <TaxSavingInfoCard
        title="Risks Associated with ELSS Funds"
        description="ELSS funds carry market risk as they primarily invest in equity markets. However, they offer higher returns in the long run."
        positive={false}
      />
      <TaxSavingInfoCard
        title="Tax Implications of Gold Investments"
        description="Gold investments are taxed at a higher rate and may not generate significant income. It's advisable to consider other tax-saving options."
        positive={false}
      />
      {/* Add more TaxSavingInfoCard components for additional key points */}
    </div>
  </div>
);

export default TaxSavingInformation;

