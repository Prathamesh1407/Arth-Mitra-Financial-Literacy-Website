import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const signUp = async (req, res) => {
  try {
    const { username, name, email, password, ageGroup } = req.body;
    //validations
    if (!username || !email || !password || !ageGroup) {
      return res.status(403).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const exisitingUser = await User.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(401).json({
        success: false,
        message: "User Already Registered",
      });
    }
    //register user
    const user = await User.create({
      username,
      email,
      password: password,
      ageGroup,
      coins: 50,
    });
    const jsonUser = JSON.stringify(user);
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while Registration",
      message: error.message,
    });
  }
};

//POST LOGIN
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(403).json({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await jwt.sign(
      {
        _id: user._id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        ageGroup: user.ageGroup,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("token", token, options)
      .json({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while Logging In",
      error,
    });
  }
};
const getTrends = async (req, res) => {
  try {
    const GAINERS_URL =
      "https://www.nseindia.com/api/live-analysis-variations?index=gainers";
    const LOSERS_URL =
      "https://www.nseindia.com/api/live-analysis-variations?index=loosers";
    const MARKET_STATUS_URL = "https://www.nseindia.com/api/marketStatus";
    let response = await fetch(`${GAINERS_URL}`);
    const gain = await response.json();
    response = await fetch(`${LOSERS_URL}`);
    const lose = await response.json();
    response = await fetch(`${MARKET_STATUS_URL}`);
    const status = await response.json();
    return res.status(200).json({
      gain,
      lose,
      status,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while Logging In",
      error,
    });
  }
};
const getCoins = async (req, res) => {
  try {
    const id = req.user._id;

    const user = await User.findById(id);

    return res.status(200).json({
      success: true,
      message: "login successfully",
      coins: user.coins,
      ageGroup: user.ageGroup,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while Logging In",
      error,
    });
  }
};

const quizSubmit = async(req , res)=>{
  try {

    const {score} = req.body;

    const id = req.user._id;

    const user = await User.findByIdAndUpdate(
      id,
      { $inc: { coins: afterP - prevP } },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "coins updated",
      coins: user.coins,
      increment: score,
    });

    
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while Logging In",
      error,
    });
  }
}

export { signUp, Login, getCoins, getTrends ,quizSubmit};
