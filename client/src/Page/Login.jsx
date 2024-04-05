import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import TextInput from "../Components/TextInput";
import PasswordInput from "../Components/PasswordInput";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
const Login = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const dataL = { email, password };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/Login`,
      dataL
    );
    if (data) {
      console.log(data.token);
      const token = data?.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      navigate("/home");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="inputRegion w-1/4 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-4">To continue, log in to CHANAKYA.</div>

        <TextInput
          label="Email address or username"
          placeholder="Email address or username"
          className="my-2"
          value={email}
          setValue={setEmail}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        <div className="w-full flex items-center justify-center mt-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            LOGIN
          </button>
        </div>

        <div className="w-full border border-solid border-gray-300 mt-4"></div>

        <div className="my-6 font-semibold text-lg">
          Don't have an account ?
        </div>

        <div className="border border-gray-500 text-gray-500 w-full flex justify-center items-center py-3 rounded-full font-bold">
          <Link to="/register">SIGN UP FOR CHANAKYA</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
