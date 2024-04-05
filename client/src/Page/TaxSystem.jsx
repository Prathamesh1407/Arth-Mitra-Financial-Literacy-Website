import React, { useState } from 'react';
import './TaxSystem.css';
import TaxSystemImage from './TaxSystem.jpeg';

const TaxSystem = () => {
  // Define FAQ items as an array of objects
  const faqItems = [
    {
      question: 'Can we save tax on salary?',
      answer: 'Yes, you can save tax on your salary. The Income Tax Act provides various deductions and exemptions to lower the tax burden of a taxpayer. Using these, you can definitely lower your tax burden. You can avail tax deductions under multiple sections such as Section 80C, 80D, 80GG, 80E, 80EE, 80U, etc. '
    },
    {
      question: 'What income is tax-free?',
      answer: 'As per the Income Tax Rules, under the old regime,  income up to Rs.2.5 lakh is exempt for tax purposes, so you do not have to pay tax on income up to Rs. 2.5 lakh. Additionally, if your income is up to Rs. 5 lakh, you are eligible for a tax rebate of up to Rs.12,500; hence in this case also, your tax outgo will be zero. Therefore, technically if you have an income up to Rs 5 lakh it is tax free. '
    },
    {
      question: 'At what salary do I pay tax?',
      answer: 'If your net taxable salary income after all deductions and exemptions exceeds Rs. 5 lakh, you must pay tax as per your slab rate. '
    },
    {
      question: 'Which is the best option to save tax?',
      answer: 'There are multiple options to save tax. One of the popular ways is to claim deductions under Section 80C. Some of the investments as well as expenses made during the financial year up to Rs 1.5 lakh, qualify as deductions under Section 80C. For example, you can claim the investments made in a Public Provident Account (PPF) as a deduction under section 80C. Some of the other expenses that can be claimed as deduction under Section 80C are life insurance premium paid, tuition fees of children, and home loan principal repayments. Apart from Section 80C, there are various other deductions that help you save tax. You can claim a deduction of up to Rs 25,000 under Section 80D for health insurance premiums paid during the year. '
    },
    {
      question:'How can I reduce my taxable income in India in 2023?',
      answer:'To reduce your taxable income, you can claim deductions under Section 80C for investments and expenses up to Rs 1.5 lakh, such as PPF contributions, life insurance premiums, child’s tuition fees, and home loan principal repayments. In addition to Section 80C, you can also claim a deduction of up to Rs 25,000 under Section 80D for health insurance premiums. Also, if you are paying health insurance premiums for your senior citizen parents, you can claim an additional deduction of up to Rs.50,000. '
    },
    {
      question:'How can I save my tax without proof?',
      answer:'It is mandatory to submit investment proof for claiming tax deductions. Hence you cannot save tax without proof. The government requires documentation and proof of income and expenses to ensure that taxes are calculated accurately. Attempting to save taxes without proof is considered as tax fraud and can result in serious consequences, including fines and imprisonment.'
    },
    {
      question: 'Can we save tax on salary?',
      answer: 'Yes, you can save tax on your salary. The Income Tax Act provides various deductions and exemptions to lower the tax burden of a taxpayer. Using these, you can definitely lower your tax burden. You can avail tax deductions under multiple sections such as Section 80C, 80D, 80GG, 80E, 80EE, 80U, etc. '
    },
    {
      question: 'What is the maximum tax saving in India?',
      answer: 'Under Section 80C of the Income Tax Act, an individual can claim maximum tax savings of Rs 1.5 lakhs per financial year through deductions. Additional tax savings opportunities are available under various sections, such as Section 80D for health insurance and Section 80E for education loans, etc. The maximum tax saving depends on the specific deductions and exemptions you are claiming for. '
    }
  ];

  // State to manage the visibility of answers
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the visibility of answers
  const toggleAnswer = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="tax-system-container">
      <div className="tax-system-header">
        <div className="tax-system-header-right">
          <h1 className="tax-system-title">How to Save Tax in India</h1>
          <div className="tax-system-paragraph">
            <p>
              In India, taxes are levied on income, wealth, and property. Income tax is levied on individual incomes, while the central government levies corporate taxes. The wealth tax is levied on the net value of assets owned by individuals or companies.
            </p>
            <p>
              The revenue generated from these taxes is vital for the smooth functioning of the country, as the government needs these funds to foster economic growth and development. The tax varies with the respective income as per the tax slab in India.
            </p>
            {/* Add more paragraphs as needed */}
          </div>
        </div>
        <div className="tax-system-header-left">
          <img src={TaxSystemImage} alt="Tax System" className="tax-system-image" />
        </div>
      </div>
      <div className="tax-system-videos">
        <h2>YouTube Videos</h2>
        <div className="tax-system-video">
          <iframe width="300" height="200" src="https://www.youtube.com/embed/_ObE0wvE5Qs?si=JLzbZFuq5JNe2i8Z" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/UNCQMV8RU_M?si=v798y4lRO6VIFO-t" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/njN6rVIr9gM?si=-8EPQc55Psx5Gulx" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/3v9hFUq4of0?si=L7pvFlexlcY_h3qz" title="YouTube video" allowfullscreen></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/diyNzcd64T4?si=uJKfzKDg9Vusfi7a" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
      <div className="tax-system-data-table text-lg" >
        <h1>List of Tax-Saving Options for Different Sections</h1>
        <h2>1. Under 80C</h2>
        <p className="text-lg">🎯 Equity Linked Savings Scheme 
          It is a type of mutual fund with a lock-in period of 3 years. It is the only category of mutual fund in India that qualifies for a tax deduction under Section 80C of the Income Tax Act.
          Returns provided by ELSS are comparatively higher than other tax-saving schemes in the long run, as the investments are primarily made in equity markets. Investment can either be made in a lump sum or SIP (Systematic Investment Plan) method. However, you cannot withdraw your money before the completion of the three-year lock-in period.
          A significant point to take note of here is the risk factor. Since the investments are made in the stock market, they could carry a relatively high risk. But if you remain consistent, it can prove to be a great option in the long run.
        </p>

        
        <h2>2. Section 80CCD</h2>
        <p>
Section 80CCD discusses the tax deductions available to taxpayers regarding the investments in National Pension System (NPS). There are two subsections here:
<br></br>
🎯  Section 80CCD (1):
Investments in NPS are eligible for tax deductions under this section. Any Indian citizen between the age of 18 and 60 years can invest in NPS and avail this tax benefit. Even NRIs can claim this benefit.
The maximum deduction you can avail under this section is 10% of your salary (this includes basic salary + DA). For self-employed individuals, the limit is 20% of their gross total income.
Also, the maximum benefit you can avail of every year under this section is ₹1.5 lakh.
<br></br> </p>

<h2>3. Section 80D</h2>
🎯 Under Section 80D of the Income Tax Act, you can claim deductions up to ₹1 lakh for contributions towards medical insurance premiums bought for insuring self, your spouse, children, and parents. The deductions under 80D are over and above exemptions you can claim under Section 80C. This benefit can be claimed by individuals and Hindu Undivided Families (HUFs).
<br></br>

<h2>4. Section 80E</h2>
🎯 Under Section 80E of the Income Tax Act, the amount you spend in repaying the interest of your education loan can qualify as a deduction from your total income.
<br></br>

<h2>5. Section 80EE</h2>
🎯 Section 80EE of the Income Tax Act, of 1961 allows a tax deduction benefit on the interest paid on home loans taken by a first-time homebuyer. If you fall in this category, you can claim a tax deduction up to ₹50,000 under section 80EE. This deduction limit is over and above the limit provided under section 80C and Section 24 of the IT Act, 1961.
<br></br>

<h2>6. Section 80G</h2>
🎯 Charity begins at home, but did you know that if you widen the scope of your charitable acts, it can help you save taxes? Section 80G of the Income Tax Act allows you to claim tax deductions on donations made to charitable organizations.
<br></br>

<h2>7. Section 80GG</h2>
🎯  If you are a salaried individual, you may have a House Rent Allowance (HRA) as a component of your salary that you can claim a deduction on it. If your salary does not have an HRA component, but you pay rent for any furnished or unfurnished accommodation occupied for living purposes, you can claim a deduction under Section 80GG on the rent.
<br></br>

<h2>8. Section 80TTA</h2>

🎯  Section 80TTA allows you to claim a deduction of ₹10,000 on your interest income. This deduction is only available to individuals and HUFs. The deduction is allowed on:
<br></br>

<h2>9. Section 80DD</h2>
🎯  Living with a disability or taking care of a family member with a disability is never easy. Certain sections of the Income Tax Act have provisions that allow different-abled individuals or family members with a disability to claim tax benefits.
<br></br>

<h2>10. Section 80DDB</h2>
🎯  Under Section 80DDB of the Income Tax Act, you can claim tax deductions on medical expenses incurred to treat specific ailments. Deductions can only be claimed on the treatment of the diseases listed under Section 80DDB. The treatment must be for the taxpayer or a family member such as a spouse, parent, or sibling, dependent on the taxpayer.
<br></br>


<h2>11. Section 80U</h2>
🎯  Under Section 80U of the Income Tax Act, individuals who have been certified to be at least 40% disabled by relevant medical authorities according to government rules, can claim tax benefits. Any person suffering from the following ailments can claim tax benefits under Section 80U. These are:
<br></br>
Blindness
Low vision
Leprosy-cured
Hearing impairment
Locomotor disability
Mental retardation
Mental illness<br></br>


<h2>12. Section 80GGC</h2>
🎯  Section 80GGC of the Income Tax Act allows individuals to claim tax deductions on contributions made to political parties registered under Section 29A of the Representation of the People Act, 1951, and electoral trusts.
<br></br>


<h2>13. Conclusion</h2>
Before choosing a tax-saving instrument, it is important to factor in the risk level, lock-in period, liquidity, and returns. There is no point in opting for a tax-saver product if doesn’t suit your also individual needs. It also helps to stay updated about the latest developments in tax-saving provisions. Barring Section 80C, many taxpayers are not familiar with the other sections of the Income Tax Act using which they can significantly reduce their tax burden.
      </div>
      {/* FAQ Section */}
      <div className="faq-section">
        <h2>FAQ</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className="faq-question">{item.question}</div>
            {expandedItem === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxSystem;
