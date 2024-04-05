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
        <br/>
        <p>🎯 Public Provident Fund
          Public Provident Fund is a long-term government savings scheme that has a tenure of 15 years. A common income tax saving scheme is available at most banks and post offices in India. Its rates change every quarter. Per the circular, the current interest rate on PPF is 7.1%.
          The interest on PPF is tax-free. Therefore, one can open a PPF account with as little as Rs. 500, while the maximum investment allowed in a financial year is Rs. 1.5 lakh, respectively.
        </p>
        <br/>
        <p>🎯 National Savings Certificate 
          National Savings Certificate is another significant income tax saving scheme that provides a fixed rate of interest at a rate of 7.7% per annum and has a tenure of 5 years.
          The interest received on NSC is considered a tax-saving option, and up to Rs 1.5, lakh can be taken as a rebate under section 80C.
        </p>
        <br/>
        <h2>2. Section 80CCD</h2>
        <p>
Section 80CCD discusses the tax deductions available to taxpayers regarding the investments in National Pension System (NPS). There are two subsections here:
<br></br><br></br>
🎯  Section 80CCD (1):
Investments in NPS are eligible for tax deductions under this section. Any Indian citizen between the age of 18 and 60 years can invest in NPS and avail this tax benefit. Even NRIs can claim this benefit.
The maximum deduction you can avail under this section is 10% of your salary (this includes basic salary + DA). For self-employed individuals, the limit is 20% of their gross total income.
Also, the maximum benefit you can avail of every year under this section is ₹1.5 lakh.
<br></br><br></br>
🎯  Section 80CCD (1b):
This subsection provides an additional deduction of ₹50,000 on investments in NPS. This is over and above the ₹1.5 lakhs available under Section 80CCD(1). So, in short, you can avail a total tax deduction of ₹2 lakhs when you invest in NPS every year.
</p>
<h2>3. Section 80D</h2>
🎯 Under Section 80D of the Income Tax Act, you can claim deductions up to ₹1 lakh for contributions towards medical insurance premiums bought for insuring self, your spouse, children, and parents. The deductions under 80D are over and above exemptions you can claim under Section 80C. This benefit can be claimed by individuals and Hindu Undivided Families (HUFs).
<br></br>
🎯 If you file your taxes as an individual, you can claim deductions for insuring yourself and your family. In addition:

You can claim a maximum deduction of ₹25,000 in a financial year on the health insurance premium for self and family, i.e., spouse, parents, and children
If you are a senior citizen, you can claim a maximum deduction of ₹50,000 per financial year.<br></br>
🎯 Here are the provisions for premiums bought for medical Insurance for parents.
If your parents are less than 60 years of age, you can claim a maximum deduction of ₹25,000 per year on their health insurance premiums bought on their behalf.
If they are senior citizens, the maximum deduction allowed is ₹50,000 in a financial year.
Overall, if you purchase a life insurance policy for your family as well as your parents (and your parents are below the age of 60), you can claim a maximum tax deduction of ₹50,000. But if you and your parents are above the age of 60, you can avail a maximum deduction of ₹1 lakh under Section 80D.
<br></br>
🎯 Expenditure incurred on preventive health check-ups is also eligible for deduction under Section 80D with a maximum cap of Rs 5,000 for self or family. But remember that this deduction is within the limit of Rs. 25,000 or Rs. 50,000.

<h2>4. Section 80E</h2>
🎯 Under Section 80E of the Income Tax Act, the amount you spend in repaying the interest of your education loan can qualify as a deduction from your total income.
<br></br>
🎯 The loan should have been taken for the education of self, spouse, children or a student for whom you are the legal guardian and should have been taken from a bank or an approved financial institution.
<br></br>
🎯 The total amount paid in repaying the loan interest in a financial year is regarded as the deduction amount and there is no cap on the maximum amount you can claim as a deduction. You will have to acquire a certificate from the bank that differentiates the principal from the interest component of the education loan you have repaid.

<h2>5. Section 80EE</h2>
🎯 Section 80EE of the Income Tax Act, of 1961 allows a tax deduction benefit on the interest paid on home loans taken by a first-time homebuyer. If you fall in this category, you can claim a tax deduction up to ₹50,000 under section 80EE. This deduction limit is over and above the limit provided under section 80C and Section 24 of the IT Act, 1961.
<br></br>
🎯 As a taxpayer, you need to satisfy the following conditions to be eligible to claim this deduction
<br></br>
🎯 You should not own any other residential property on the date of the sanction of the loan.
The value of the house should be less than ₹50 lakh. The loan must not be availed for a commercial property.
The loan amount needs to be less than ₹35 lakh.
The deduction is only available on the interest portion of the loan.
You do not necessarily have to reside in that property to be eligible.
<h2>6. Section 80G</h2>
🎯 Charity begins at home, but did you know that if you widen the scope of your charitable acts, it can help you save taxes? Section 80G of the Income Tax Act allows you to claim tax deductions on donations made to charitable organizations.
<br></br>
🎯 Only the donations made towards charitable institutions registered under Section 12A can qualify for deductions. The donations must have been made through taxable income sources. Only those donations where contributions have been made via cash or cheque or demand draft will be eligible. All taxpayers, including non-resident Indians, are eligible.
<br></br>
🎯 Cash donations exceeding ₹2,000 are not allowed as a deduction. For donations above ₹2,000 to qualify as a tax deduction, the contribution has to be made using other modes of payment. The various contributions are eligible for a deduction of up to either 100% or 50%, with or without restriction, under Section 80G.

<h2>7. Section 80GG</h2>
🎯  If you are a salaried individual, you may have a House Rent Allowance (HRA) as a component of your salary that you can claim a deduction on it. If your salary does not have an HRA component, but you pay rent for any furnished or unfurnished accommodation occupied for living purposes, you can claim a deduction under Section 80GG on the rent.
<br></br>
🎯  In order to claim tax benefits under Section 80G, these are the conditions that have to be fulfilled.
<br></br>
1. You are either self-employed or salaried.<br></br>
2. There should be no HRA component in your salary during the year for which you are claiming a deduction under Section 80GG.
You or anyone from your family, i.e., your spouse or minor child or HUF of which you are a member ‐ should not own a residential property in the city you are living or running a business.
3. This benefit is only applicable to individuals and Hindu Undivided Families (HUFs).<br></br>
4. You are not eligible for a deduction if you are claiming a benefit, for a house you own in another location, listed as Self-Occupied Property.<br></br>
5. You can claim the least of the following amounts:
₹60,000 annually (₹5,000 monthly)
Total rent paid minus 10% of the total income
25% of annual salary<br></br>
6. For example, you earn ₹8 lakhs annually and do not get HRA, but pay a rent of ₹16,000 per month, i.e. ₹1.92 lakhs in a year.
As per the first condition, you can avail of a tax exemption of ₹60,000. According to the second condition, the permissible deduction would be ‐ ₹1,92,000 ‐ ₹80,000 (10% of income) ‐ ₹1,12,000. Under the third condition, ₹2 lakhs. The least of these amounts will qualify as a tax deduction under Section 80GG, which means you can claim only ₹60,000 as a tax deduction.
<br></br>
<h2>8. Section 80TTA</h2>

🎯  Section 80TTA allows you to claim a deduction of ₹10,000 on your interest income. This deduction is only available to individuals and HUFs. The deduction is allowed on:
<br></br>
🎯  The interest earned on a savings bank account.
The interest earned on a savings bank account with a cooperative society engaged in banking activities
The interest on a savings bank account with a post office
Your entire interest income will qualify as a deduction if it is less than ₹10,000. If your interest income is more than ₹10,000, your deduction shall be capped at ₹10,000.
<br></br>
<h2>9. Section 80DD</h2>
🎯  Living with a disability or taking care of a family member with a disability is never easy. Certain sections of the Income Tax Act have provisions that allow different-abled individuals or family members with a disability to claim tax benefits.
<br></br>
🎯  You can claim a deduction under section 80DD of the Income Tax Act if you have a dependent who is differently-abled and entirely dependent on you for maintenance.
<br></br>
🎯  The following conditions have to be met to claim tax deductions under Section 80DD

1. You are only allowed to claim this deduction for a dependant and not for yourself.<br></br>
2. Individuals and members of the Hindu Undivided Family (HUFs) are eligible.<br></br>
3. The dependant can be your spouse, parents, siblings, or children. For HUFs, it can be a member of the HUF.<br></br>
4. The disability of the defendant should not be less than 40%. Also, the disability should be as per the specifications under section 2(i) of the Persons with Disabilities Act, 1995.
As a taxpayer, you should have made expenditures for the treatment, nursing, rehabilitation, and training of the differently-abled dependent.<br></br>
5. A deduction of up to ₹75,000 is allowed if the disability is more than 40% and less than 80%. If the disability is more than 80%, you can claim a deduction of ₹1,25,000. The deduction amount does not depend on your expenditures toward caring for the dependent. Also, if you have bought a LIC life insurance policy or a cover from the Unit Trust of India for a differently-abled dependent person, those expenses are deducted from the income tax calculation.
<h2>10. Section 80DDB</h2>
🎯  Under Section 80DDB of the Income Tax Act, you can claim tax deductions on medical expenses incurred to treat specific ailments. Deductions can only be claimed on the treatment of the diseases listed under Section 80DDB. The treatment must be for the taxpayer or a family member such as a spouse, parent, or sibling, dependent on the taxpayer.
<br></br>
🎯  Only individuals and Hindu Undivided Families (HUFs) can claim deductions under Section 80DDB. Tax deductions are only available to residents of India. From Assessment Year 2019-20 onwards, a tax deduction equal to the total amount paid for the treatment or ₹40,000 can be claimed depending on whichever is lower. For senior and super-senior citizens, a deduction of ₹1,00,000 or the actual amount paid for the treatment can qualify as a deduction based on the smallest amount.
<br></br>
🎯  To qualify for a tax deduction under Section 80DDB, you will need to produce a certificate of the disease. If you have been treated at a private hospital, you must acquire the certification from the same hospital. This is also true for treatments conducted at a government hospital.

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
🎯  A person suffering from at least 40% disability, can claim a tax deduction up to ₹75,000. For those severely disabled, i.e., with 80% disability or more, the tax deduction limit under Section 80U is ₹1,25,000.

<h2>12. Section 80GGC</h2>
🎯  Section 80GGC of the Income Tax Act allows individuals to claim tax deductions on contributions made to political parties registered under Section 29A of the Representation of the People Act, 1951, and electoral trusts.
<br></br>
🎯  Should you choose to contribute to a political party, tax deductions can be availed on 50-100% of the contribution amount. According to Income Tax Act regulations, you can donate up to 10% of your gross earning to any political organization of your choice.
<br></br>
🎯  This benefit is only available to individual taxpayers. Local authorities and companies cannot avail of tax deductions under this section. Also, Artificial Juridical Persons, who receive funds from the government are ineligible.
<br></br>
🎯  If you file for deductions on donations towards a political party or electoral trust, 100% of your contribution is eligible to qualify as a deduction. Thus, your taxable income can decrease in proportion to gift donations. The entire donated amount is deductible from your taxable income.

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
