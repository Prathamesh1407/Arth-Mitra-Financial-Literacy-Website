import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Page/Home";
import GoalSetting from "./Page/GoalSetting";
import ChatButton from "./Page/ChatButton";

function App() {
  return (
    <div>
      <Navbar/>
      
      {/* <ChatButton/> */}
      <GoalSetting/>
      {/* <Footer/> */}
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
