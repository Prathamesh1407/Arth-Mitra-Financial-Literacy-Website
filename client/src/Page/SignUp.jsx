import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import TextInput from "../Components/TextInput";
import PasswordInput from "../Components/PasswordInput";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
const SignUp = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [ageGroup, setAgeGroup] = useState(0);
  const navigate = useNavigate();
  //   const ages = [
  //     { val: 1, grp: "10 TO 18" },
  //     { val: 2, grp: "18 TO 25" },
  //     { val: 3, grp: "25 TO 50" },
  //     { val: 4, grp: "50+" },
  //   ];
  const ages = ["10 - 18", "18 - 25", "25 - 50", "50 +"];
  const handleSignUp = async () => {
    const data = { email, password, username, ageGroup };
    const response = await axios.post("/register", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      //navigate("/home");
    }
  };
console.log(ageGroup);
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

        <TextInput
          label="Name"
          placeholder="Enter Your Name"
          className="my-2"
          value={username}
          setValue={setUsername}
        />

        <div className="m-1 w-75">
          <Select
            bordered={true}
            placeholder="Select A Age Group"
            size="large"
            showSearch
            className="form-select text-white mb-3"
            onChange={(value) => {
              setAgeGroup(value);
            }}
          >
            {ages?.map((item, ind) => {
              return (
                <Select.Option key={ind} value={ind+1}>
                  {item}
                </Select.Option>
              );
            })}
          </Select>
        </div>

        <div className="w-full flex items-center justify-center mt-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            REGISTER
          </button>
        </div>

        <div className="w-full border border-solid border-gray-300 mt-4"></div>

        <div className="my-6 font-semibold text-lg">Don't have an account?</div>

        {/* <div className="border border-gray-500 text-gray-500 w-full flex justify-center items-center py-3 rounded-full font-bold">
          <Link to="/signup">SIGN UP FOR CHANAKYA</Link>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
