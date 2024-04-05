import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import GoalSetting from "./Page/GoalSetting";
import ChatButton from "./Page/ChatButton";

import Trends from "./Page/Trends";
import News from "./Page/News";
import ExpenseTracker from "./Page/ExpenseTracker";
import MarketSummary from "./Page/MarketSummary";
import LoginComp from "./Page/SignUp";
import { Route, Router, Routes } from "react-router";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import TaxSystem from "./Page/TaxSystem";
import SIPCalculator from "./Page/SIPCalculator";

import TaxSavingInformation from "./Page/TaxSavingInformation";
import Quiz from "./Page/Quiz";
import HomeY from "./Page/HomeY";
import InsurancePage from "./Page/Insurance_page";
function App() {
  return (
    <div>
      <Navbar loggedIn={true} age={2} coinsCount={20}/>
      {/* <ChatButton/> */}
      {/* <ExpenseTracker/> */}
      {/* <News/> */}
      {/* <Trends/> */}
      {/* <MarketSummary/> */}
      {/* <SIPCalculator/> */}
      {/* <TaxSavingInformation/> */}
      {/* <GoalSetting/>  */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <LoginPage/>  */}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goalSetter" element={<GoalSetting />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homey" element={<HomeY/>} />
        <Route path="/blogs" element={<News/>} />
        <Route path="/trends" element={<MarketSummary/>} />
        <Route path="/sipCalc" element={<SIPCalculator/>} />
        <Route path="/tax" element={<TaxSystem/>} />
        <Route path="/expTracker" element={<ExpenseTracker/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/insurance" element={<InsurancePage/>} />
      </Routes>
    </div>
  );
}

export default App;
