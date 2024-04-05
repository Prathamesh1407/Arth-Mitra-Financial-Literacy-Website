import React, { useState } from 'react'

const financeQuestions = [
    {
      question: 'What is the Dow Jones Industrial Average (DJIA)?',
      correct_answer: 'A stock market index that measures the stock performance of 30 large companies listed on stock exchanges in the United States.',
      incorrect_answers: [
        'A measure of inflation in the United States.',
        'A type of bond issued by the United States government.',
        'An economic indicator used to measure the rate of unemployment.'
      ]
    },
    {
      question: 'What does the term "ROI" stand for in finance?',
      correct_answer: 'Return on Investment',
      incorrect_answers: [
        'Risk of Investment',
        'Rate of Interest',
        'Revenue of Income'
      ]
    },
    {
      question: 'What is a bear market?',
      correct_answer: 'A market condition where prices of securities are falling and widespread pessimism causes negative sentiment.',
      incorrect_answers: [
        'A market condition where prices of securities are rising and optimism is high.',
        'A type of market with no trading activity.',
        'A market condition where prices of securities remain stable.'
      ]
    },
    {
      question: 'What is an ETF?',
      correct_answer: 'Exchange-Traded Fund - A type of investment fund and exchange-traded product that trades like a stock on an exchange.',
      incorrect_answers: [
        'Economic Trading Fund',
        'Equity Transaction Fund',
        'Earnings Taxation Factor'
      ]
    },
    {
      question: 'What is the purpose of diversification in investment?',
      correct_answer: 'To spread investment risk across different assets and reduce the impact of any single asset\'s performance on the overall portfolio.',
      incorrect_answers: [
        'To concentrate investment in a single asset for maximum returns.',
        'To avoid investing in different assets and focus on one sector only.',
        'To increase investment risk by investing in similar assets.'
      ]
    },
    {
      question: 'What does the term "liquidity" refer to in finance?',
      correct_answer: 'The ease with which an asset or security can be converted into cash without affecting its market price.',
      incorrect_answers: [
        'The value of an asset or security based on its market price.',
        'The long-term growth potential of an investment.',
        'The total amount of money invested in a portfolio.'
      ]
    },
    {
      question: 'What is a dividend?',
      correct_answer: 'A payment made by a corporation to its shareholders, usually in the form of cash or additional shares, based on the company\'s profits.',
      incorrect_answers: [
        'An expense incurred by shareholders for owning stocks.',
        'A fee charged by brokers for executing trades on behalf of investors.',
        'A tax levied on corporate profits.'
      ]
    },
    {
      question: 'What is a bond?',
      correct_answer: 'A fixed-income investment where an investor loans money to an entity (typically a corporation or government) which borrows the funds for a defined period at a variable or fixed interest rate.',
      incorrect_answers: [
        'A share of ownership in a company.',
        'A type of derivative used for speculative trading.',
        'A form of currency issued by a central bank.'
      ]
    },
    {
      question: 'What does the term "asset allocation" mean in investment?',
      correct_answer: 'The process of spreading investment capital across different asset classes such as stocks, bonds, and cash to optimize risk and return based on an investor\'s goals and risk tolerance.',
      incorrect_answers: [
        'The purchase of a single asset for investment purposes.',
        'The process of converting assets into cash for immediate use.',
        'The selection of specific securities within an asset class.'
      ]
    },
    {
      question: 'What is a bull market?',
      correct_answer: 'A market condition where prices of securities are rising and optimism is high among investors, leading to increased buying activity.',
      incorrect_answers: [
        'A market condition where prices of securities are falling and pessimism prevails.',
        'A type of market with no trading activity.',
        'A market condition where prices of securities remain stable.'
      ]
    },
    {
      question: 'What is a mutual fund?',
      correct_answer: 'An investment vehicle that pools money from multiple investors to invest in stocks, bonds, and other securities according to specific investment objectives.',
      incorrect_answers: [
        'A type of hedge fund limited to accredited investors.',
        'A type of corporate bond issued by a single company.',
        'A government program that provides financial assistance to low-income individuals.'
      ]
    },
    {
      question: 'What is an annuity?',
      correct_answer: 'A financial product typically offered by insurance companies that provides a stream of income payments over a specified period or for the lifetime of the annuitant.',
      incorrect_answers: [
        'A type of stock option traded on a futures exchange.',
        'A tax-exempt savings account used for education expenses.',
        'A type of mortgage loan with a fixed interest rate.'
      ]
    },
    {
      question: 'What is the concept of compounding in finance?',
      correct_answer: 'The process where the value of an investment increases over time as the earnings on an investment, both capital gains and interest, earn interest as time passes.',
      incorrect_answers: [
        'The process of converting assets into cash for immediate use.',
        'The process of spreading investment capital across different asset classes.',
        'The process of reducing investment risk by diversifying assets.'
      ]
    },
    {
      question: 'What is the purpose of a budget in personal finance?',
      correct_answer: 'To plan and manage income and expenses to achieve financial goals and objectives, and to track spending and saving habits.',
      incorrect_answers: [
        'To track the performance of investment portfolios.',
        'To evaluate the creditworthiness of individuals applying for loans.',
        'To provide guidance on filing income tax returns.'
      ]
    },
    {
      question: 'What does the term "capital gains" refer to in finance?',
      correct_answer: 'The profit realized from the sale of a capital asset such as stocks, bonds, or real estate, where the selling price exceeds the purchase price.',
      incorrect_answers: [
        'The interest earned on investments in a savings account.',
        'The amount of money borrowed to purchase assets such as a home or car.',
        'The fee charged by brokers for executing trades on behalf of investors.'
      ]
    },
    {
      question: 'What is the Federal Reserve?',
      correct_answer: 'The central banking system of the United States responsible for conducting monetary policy, regulating banks, and maintaining financial stability.',
      incorrect_answers: [
        'A government agency that oversees the stock market and enforces securities regulations.',
        'A federal program that provides financial assistance to low-income individuals.',
        'A nonprofit organization that promotes economic development in rural areas.'
      ]
    },
    {
      question: 'What is the purpose of financial planning?',
      correct_answer: 'To set financial goals, create a plan to achieve those goals, and make informed decisions about spending, saving, and investing to secure financial well-being.',
      incorrect_answers: [
        'To manage day-to-day expenses and track spending habits.',
        'To evaluate the performance of investment portfolios.',
        'To provide guidance on filing income tax returns.'
      ]
    },
    {
      question: 'What is the term "inflation" in economics?',
      correct_answer: 'A sustained increase in the general price level of goods and services in an economy over a period of time, resulting in a decrease in the purchasing power of money.',
      incorrect_answers: [
        'A decrease in the general price level of goods and services in an economy.',
        'An economic indicator used to measure the rate of unemployment.',
        'The process of converting assets into cash for immediate use.'
      ]
    },
    {
      question: 'What is a 401(k) retirement plan?',
      correct_answer: 'A tax-advantaged retirement savings plan sponsored by an employer where employees can contribute a portion of their pre-tax salary to a retirement account.',
      incorrect_answers: [
        'A government program that provides financial assistance to low-income individuals in retirement.',
        'A type of annuity offered by insurance companies to provide income during retirement.',
        'A type of individual retirement account (IRA) with employer contributions.'
      ]
    },
    {
      question: 'What is the purpose of insurance in personal finance?',
      correct_answer: 'To protect against financial losses due to unexpected events such as accidents, illnesses, and natural disasters by transferring the risk to an insurance company.',
      incorrect_answers: [
        'To provide investment growth and income during retirement.',
        'To facilitate the exchange of goods and services in the economy.',
        'To provide financial assistance to low-income individuals.'
      ]
    },
    {
      question: 'What is the definition of a credit score?',
      correct_answer: 'A numerical representation of an individual\'s creditworthiness based on their credit history and financial behavior, used by lenders to evaluate the risk of lending to the individual.',
      incorrect_answers: [
        'The total amount of money owed by an individual to lenders and creditors.',
        'The interest rate charged on loans and credit cards.',
        'The maximum amount of credit available on a credit card or line of credit.'
      ]
    },
    
  ];
const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(null);
  
    // Function to select random questions
    const generateRandomQuestions = () => {
      const randomQuestions = [];
      const shuffledQuestions = financeQuestions.sort(() => 0.5 - Math.random());
      for (let i = 0; i < 10; i++) {
        randomQuestions.push(shuffledQuestions[i]);
      }
      setQuestions(randomQuestions);
      setScore(null); // Reset score
    };
  
    const Question = ({ index, question }) => {
      const [selectedOption, setSelectedOption] = useState('');
      const [bgColor, setBgColor] = useState('');
  
      const handleOptionChange = (option) => {
        setSelectedOption(option);
        setBgColor(option === question.correct_answer ? 'bg-green-100' : 'bg-red-100');
      };
  
      return (
        <div className={`border border-gray-300 p-4 my-4 rounded ${bgColor}`}>
          <p className="text-lg font-semibold mb-2">{index + 1}. {question.question}</p>
          <ul>
            {question.incorrect_answers.map((option, idx) => (
              <li key={idx} className="my-2">
                <label className="inline-flex items-center">
                  <input type="radio" className="form-radio h-5 w-5 text-blue-600" name={`question${index}`} value={option} onChange={() => handleOptionChange(option)} checked={selectedOption === option} />
                  <span className="ml-2">{option}</span>
                </label>
              </li>
            ))}
            <li className="my-2">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio h-5 w-5 text-blue-600" name={`question${index}`} value={question.correct_answer} onChange={() => handleOptionChange(question.correct_answer)} checked={selectedOption === question.correct_answer} />
                <span className="ml-2">{question.correct_answer}</span>
              </label>
            </li>
          </ul>
        </div>
      );
    };
  
    return (
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-5 mb-5">
          <div>
            <h2 className="text-2xl font-semibold">Finance Quiz</h2>
            {score !== null && <p className="text-lg font-semibold">{`Your score: ${score}/10`}</p>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generateRandomQuestions}>Generate Questions</button>
        </div>
        {questions.map((question, index) => (
          <Question key={index} index={index} question={question} />
        ))}
      </div>
    );
}

export default Quiz
