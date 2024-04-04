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
import Login from "./Page/SignUp";
import SignUp from "./Page/SignUp";
import SIPCalculator from "./Page/SIPCalculator";
import TaxSavingInformation from "./Page/TaxSavingInformation";
function App() {
  return (
    <div>
      {/* <Navbar loggedIn={true} age={2} coinsCount={20}/> */}
      {/* <ChatButton/> */}
      {/* <ExpenseTracker/> */}
      {/* <News/> */}
      {/* <Trends/> */}
      {/* <MarketSummary/> */}
      {/* <SIPCalculator/> */}
      <TaxSavingInformation/>
      {/* <GoalSetting/>  */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <LoginPage/>  */}
      {/* <Routes>
        <Route path="/register" element={<SignUp />} />
      </Routes> */}
    </div>
  );
}

export default App;
