import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  const [navbarType, setNavbarType] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [coins, setCoins] = useState(0);
  const [ageGrp, setAgeGrp] = useState(0);
  const handleLogout = () => {
    removeCookie("token");
  };
  const getAge = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/getCoins`,
        { accessToken: cookies?.token }
      );
      if (data) {
        setCoins(data.coins);
        setAgeGrp(data.ageGroup);
      }
    } catch (err) {
      console.log("Error While Getting the Age");
    }
  };

  const determineNavbarType = (ageGrp) => {
    if (ageGrp === 1) {
      return "navbarType1";
    } else if (ageGrp === 2) {
      return "navbarType2";
    } else if (ageGrp === 3) {
      return "navbarType3";
    } else {
      return "navbarType4";
    }
  };

  useEffect(() => {
    getAge();
    setNavbarType(determineNavbarType(ageGrp));
  }, [coins]);

  // Different navbar components based on navbar type
  const NavbarType1 = () => (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <div className=" text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/homey">Home🏡</Link>
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer">
          <Link to="/expTracker">Expense Tracker💳</Link>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2 text-lg">🪙{coins}</span>
      </div>
      <div
        className="text-white mr-2 text-lg cursor-pointer"
        onClick={handleLogout}
      >
        LOGOUT
      </div>
    </nav>
  );

  const NavbarType2 = () => (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <div className=" text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/home">Home🏡</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/trends">Trends📈</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/blogs">Blogs📑</Link>
        </div>
    
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/tax">Tax Systems💵</Link>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2 text-lg">🪙{coins}</span>
        <div
          className="text-white mr-2 text-lg cursor-pointer"
          onClick={handleLogout}
        >
          LOGOUT
        </div>
      </div>
    </nav>
  );

  const NavbarType3 = () => (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <div className=" text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/home">Home🏡</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/trends">Trends📈</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/blogs">Blogs📑</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/tax">Tax Systems💵</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/insurance">Insurance💰</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/funds">Mutual Funds📈</Link>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2 text-lg">🪙{coins}</span>
        <div
          className="text-white mr-2 text-lg cursor-pointer"
          onClick={handleLogout}
        >
          LOGOUT
        </div>
      </div>
    </nav>
  );

  const NavbarType4 = () => (
    <nav className="bg-blue-800 p-4 flex justify-between items-center">
      <div className="flex space-x-8">
        <div className=" text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/home">Home🏡</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/trends">Trends📈</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/blogs">Blogs📑</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/tax">Tax Systems💵</Link>
        </div>
        <div className="text-white hover:text-gray-300 text-lg cursor-pointer">
          <Link to="/insurance">Insurance💰</Link>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-white mr-2 text-lg">🪙{coins}</span>
        <div
          className="text-white mr-2 text-lg cursor-pointer"
          onClick={handleLogout}
        >
          LOGOUT
        </div>
      </div>
    </nav>
  );

  return (
    <>
      {cookies?.token ? (
        <>
          {navbarType === "navbarType1" && <NavbarType1 />}
          {navbarType === "navbarType2" && <NavbarType2 />}
          {navbarType === "navbarType3" && <NavbarType3 />}
          {navbarType === "navbarType4" && <NavbarType4 />}
        </>
      ) : (
        <nav className=" bg-blue-800 p-4">
          <div className="flex justify-between space-x-4">
            {/* <span className="text-white hover:text-gray-300 cursor-pointer">
              Home
            </span> */}
            <div className="text-white hover:text-gray-300 cursor-pointer">
              <Link to={"/login"}>Login/Register</Link>
            </div>
            {/* <span className="text-white hover:text-gray-300 cursor-pointer">Register</span> */}
          </div>
        </nav>
        // navigate('/login')
      )}
    </>
  );
};

export default Navbar;
