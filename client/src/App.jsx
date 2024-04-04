import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import GoalSetting from "./Page/GoalSetting";
import ChatButton from "./Page/ChatButton";
import Trends from "./Page/Trends";
import News from "./Page/News";

function App() {
  return (
    <div>
      <News/>
      {/* <Navbar/>
      <News/>
      <Trends/>
      <ChatButton/>
      <GoalSetting/> 
      <Footer/>
      <LoginPage/> */}
    </div>
  );
}

export default App;
