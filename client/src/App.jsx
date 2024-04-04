import LoginPage from "./Components/LoginPage";
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

function App() {
  return (
    <div>
      {/* <ExpenseTracker/> */}
      {/* <News/> */}
      {/* <Navbar/> */}
      <Trends/>
      <MarketSummary/>
      {/* <ChatButton/> */}
      {/* <GoalSetting/>  */}
      {/* <Footer/> */}
      {/* <LoginPage/>  */}
    </div>
  );
}

export default App;
