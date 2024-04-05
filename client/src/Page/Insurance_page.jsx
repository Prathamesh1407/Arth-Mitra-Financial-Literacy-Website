import React, { useState } from 'react';
import './InsurancePage.css';
import InsuranceImage from './InsuranceImage.jpeg';

const InsurancePage = () => {
  // Define FAQ items as an array of objects
  const faqItems = [
    {
      question: 'What are the benefits of health insurance?',
      answer: 'Health insurance provides financial coverage for medical expenses incurred due to illnesses, accidents, or injuries. It helps in covering hospitalization costs, doctor\'s fees, diagnostic tests, and medication.'
    },
    {
      question: 'What factors should I consider while choosing health insurance?',
      answer: 'When selecting health insurance, consider factors like coverage amount, network hospitals, claim settlement ratio, premium costs, pre-existing disease coverage, and additional benefits like maternity coverage or critical illness cover.'
    },
    {
      question: 'Are there different types of health insurance plans available in India?',
      answer: 'Yes, there are various types of health insurance plans available in India, including individual health insurance, family floater plans, senior citizen health insurance, critical illness plans, maternity insurance, and group health insurance.'
    },
    {
      question: 'What is the claim process for health insurance?',
      answer: 'To claim health insurance, you typically need to inform the insurance company about hospitalization within a specified time frame. Submit the required documents such as claim form, medical bills, discharge summary, and other relevant documents. The insurance company will assess the claim and reimburse the eligible expenses.'
    },
    {
      question: 'How does life insurance work?',
      answer: 'Life insurance provides financial protection to your family in case of your demise. You pay premiums to the insurance company, and in return, they provide a lump sum amount (death benefit) to your nominees upon your death. This amount can be used by your family to cover living expenses, debts, or other financial needs.'
    },
    {
      question: 'What are the different types of life insurance policies?',
      answer: 'There are several types of life insurance policies, including term insurance, whole life insurance, endowment plans, money-back policies, and unit-linked insurance plans (ULIPs). Each type offers different features and benefits suited to different financial goals and requirements.'
    }
  ];

  // State to manage the visibility of answers
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the visibility of answers
  const toggleAnswer = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="insurance-page-container">
      <div className="insurance-page-header">
        <div className="insurance-page-header-right">
          <h1 className="insurance-page-title">Understanding Insurance in India</h1>
          <div className="insurance-page-paragraph">
      <p>
        Insurance plays a crucial role in financial planning by providing protection against unforeseen events and risks. In India, various types of insurance products are available to cater to different needs, including health insurance, life insurance, vehicle insurance, and more.
      </p>
      <p>
        Understanding the basics of insurance and choosing the right insurance plan is essential to ensure financial security for yourself and your loved ones.
      </p>
      <p>
        Health insurance is particularly important in India, considering the rising healthcare costs. It covers medical expenses arising from illnesses, injuries, or accidents, providing financial support during medical emergencies.
      </p>
      <p>
        Life insurance offers financial protection to your family in case of your untimely demise. It ensures that your dependents are financially secure and can maintain their standard of living even in your absence.
      </p>
      
      
    </div>
        </div>
        <div className="insurance-page-header-left">
          <img src={InsuranceImage} alt="Insurance" className="insurance-page-image" />
        </div>
      </div>
      <div className="insurance-page-videos">
        <h2>Insurance Explained</h2>
        <div className="insurance-page-video">
          <iframe width="300" height="200" src="https://www.youtube.com/embed/F2wz0hZX-UQ?si=rh-_5krnvkdAy51I" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/h2MtnxpHFVo?si=fcMu453zAAoYbx2y" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/qLECFHARTUU?si=2ZypS1hlJ23GWsA8" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/jpAY1f_1A5M?si=emjp8BojSTEen-Vs" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/diyNzcd64T4?si=uJKfzKDg9Vusfi7a" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
      <div className="insurance-page-data-table text-lg" >
        <h1>List of Insurance Products in India</h1>
        <h2>1. Health Insurance</h2>
        <p className="text-lg">Health insurance covers medical expenses incurred during hospitalization, surgeries, treatments, and other healthcare needs. It offers financial protection against high medical bills and ensures access to quality healthcare without worrying about expenses.</p>
        <h2>2. Life Insurance</h2>
        <p>Life insurance provides financial security to your family in case of your demise. It offers a lump sum amount (death benefit) to your nominees, which can be used to replace lost income, pay off debts, fund children's education, or meet other financial needs.</p>
        <h2>3. Vehicle Insurance</h2>
        <p>Vehicle insurance, also known as motor insurance, provides coverage against damages to your vehicle due to accidents, theft, fire, or natural calamities. It also offers third-party liability coverage, protecting you against legal liabilities arising from third-party damages or injuries.</p>
        {/* Add more insurance products and descriptions */}
      </div>
      <div className="insurance-page-faq text-lg">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{item.question}</h3>
                {expandedItem === index ? (
                  <span className="faq-toggle-icon">-</span>
                ) : (
                  <span className="faq-toggle-icon">+</span>
                )}
              </div>
              {expandedItem === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;

// import React from 'react';
// import './InsurancePage.css';
// const InsurancePage = () => {
//   return (
//     <div className="insurance-page">
//       <div className="article">
//         <h1 style={{ fontSize: '2.5rem' }}>Safeguarding Your Future: Exploring the Realm of Insurance</h1>
//         <p style={{ fontSize: '1.2rem' }}> Accidents or losses of any kind, including death, are the formidable realities that come uninvited, without a knock on the door, and turn our lives upside down. They can strike at any moment, disrupting our plans, dreams, and aspirations in an instant. While these uncertainties are an unavoidable part of life's journey, we have the power to mitigate their impact and protect ourselves from their adverse consequences.</p>
//         <p>
//         Insurance stands as a beacon of security in the face of life's uncertainties. It provides a safety net, offering financial protection and peace of mind to individuals and families when they need it most. Whether it's safeguarding our health, our homes, our vehicles, or our loved ones' future, insurance serves as a crucial tool in our arsenal to navigate the uncertainties of life.
//         </p>
//         <p>In today's unpredictable world, where unforeseen events can have far-reaching consequences, having the right insurance coverage is not just a wise choice but a necessity. It offers us the peace of mind and security to pursue our goals and dreams without constantly worrying about what the future may hold. So let's take proactive steps to safeguard our financial well-being by investing in the right insurance policies and ensuring a more secure future for ourselves and our loved ones.</p>

//         <h3 style={{ fontSize: '1.8rem' }}>Insurance as a Shield</h3>

//         <p style={{ fontSize: '1.2rem' }}>Insurance serves as a shield against life's uncertainties, providing financial protection and security when we need it most. By pooling risks and spreading them across a larger group, insurance mechanisms offer individuals and businesses the reassurance of financial support in times of need. Whether it's safeguarding assets, ensuring health and well-being, or securing our loved ones' future, insurance plays a pivotal role in our lives, offering peace of mind and stability in an ever-changing world.</p>

//         <h3 style={{ fontSize: '1.8rem' }}>Exploring the Spectrum of Life Insurance</h3>

//         <p style={{ fontSize: '1.2rem' }}>Life Insurance stands as a beacon of financial protection in the face of life's uncertainties. It offers a safety net for the most invaluable asset: life itself. Let's delve into the different types of Life Insurance policies available in India:</p>

//         <ol>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Term Insurance</h4>
//             <p style={{ fontSize: '1.2rem' }}>Term Insurance serves as the foundation of Life Insurance, offering coverage for a specified period or 'term'. With no cash value component, Term Insurance provides a straightforward payout to beneficiaries in the event of the policyholder's demise during the term.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Whole Life Insurance</h4>
//             <p style={{ fontSize: '1.2rem' }}>Whole Life Insurance ensures lifelong coverage for the policyholder, coupled with a savings component and periodic bonuses. This traditional form of Life Insurance provides a safety net for the entirety of one's life, offering financial security and peace of mind.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Endowment Policy</h4>
//             <p style={{ fontSize: '1.2rem' }}>Combining elements of insurance and investment, Endowment Policies offer life coverage along with a savings component. Policyholders receive a lump-sum payout upon maturity or death, providing financial support for major life goals and expenses.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Money Back Policy</h4>
//             <p style={{ fontSize: '1.2rem' }}>Money Back Policies provide periodic payouts at predetermined intervals during the policy term, along with a lump-sum payout at maturity or death. This unique feature ensures liquidity and financial support at regular intervals, complementing the life coverage provided by the policy.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Unit Linked Insurance Plans (ULIPs)</h4>
//             <p style={{ fontSize: '1.2rem' }}>ULIPs offer the dual benefits of insurance coverage and investment opportunities, allowing policyholders to allocate premiums to various market-linked funds. With flexibility and potential for wealth creation, ULIPs cater to individuals seeking both life protection and capital growth.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Pension Plan</h4>
//             <p style={{ fontSize: '1.2rem' }}>Also known as Retirement Plans, Pension Plans help individuals accumulate wealth for their golden years and navigate the uncertainties of post-retirement life. By contributing premiums during their earning years, individuals secure a steady stream of income in retirement, ensuring financial stability and independence.</p>
//           </li>
//           <li>
//             <h4 style={{ fontSize: '1.5rem' }}>Child Plans</h4>
//             <p style={{ fontSize: '1.2rem' }}>Designed to secure a child's future in the event of unforeseen circumstances, Child Plans provide financial protection and support for education and other milestones. In the event of the policyholder's demise, the child receives a predetermined sum assured, ensuring continuity of financial support.</p>
//           </li>
//         </ol>

//         <h3 style={{ fontSize: '1.8rem' }}>Benefits of Life Insurance</h3>

//         <p style={{ fontSize: '1.2rem' }}>Life Insurance offers a multitude of benefits, providing financial security and peace of mind for policyholders and their families:</p>

//         <ul>
//           <li style={{ fontSize: '1.2rem' }}>Financial security for dependents in the event of the policyholder's demise.</li>
//           <li style={{ fontSize: '1.2rem' }}>Tax benefits on premiums paid and returns received under applicable sections of the Income Tax Act.</li>
//           <li style={{ fontSize: '1.2rem' }}>Loan repayment assistance, ensuring financial obligations are met even in the absence of the policyholder.</li>
//           <li style={{ fontSize: '1.2rem' }}>Education and retirement planning, safeguarding future goals and aspirations.</li>
//         </ul>

//         <p style={{ fontSize: '1.2rem' }}>In conclusion, Life Insurance serves as a cornerstone of financial planning, offering protection, savings, and peace of mind for individuals and their loved ones. With a diverse array of policy options available, individuals can tailor their coverage to meet their specific needs and goals, ensuring a secure and prosperous future.</p>
//       </div>
//       <div className="videos">
//       <h2>Informative Videos</h2>
//         <div className="video-container" style={{ display: 'flex', gap: '20px' }}>
//           <div style={{ width: '520px', height: '315px' }}>
//             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jpAY1f_1A5M?si=cp_36seZjMqZw54E" frameborder="0" allowfullscreen></iframe>
//           </div>
//           <div style={{ width: '520px', height: '315px' }}>
//             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IRxTCory62Y?si=IDSG-wWjPBbpk1HJ" frameborder="0" allowfullscreen></iframe>
//           </div>
//           <div style={{ width: '520px', height: '315px' }}>
//             <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YrjooEVKkAQ?si=XdoFPRluEPE3Y3CE" frameborder="0" allowfullscreen></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsurancePage;
