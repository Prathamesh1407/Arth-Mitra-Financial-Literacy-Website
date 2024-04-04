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
function App() {
  return (
    <div>
      {/* <News/> */}
      {/* <Navbar/>
      <News/>
      <Trends/>
      <MarketSummary/>
      {/* <ChatButton/> */}
      {/* <GoalSetting/>  */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <LoginPage/>  */}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/goalSetter" element={<GoalSetting/>}/>
      </Routes>
    </div>
  );
}

export default App;
