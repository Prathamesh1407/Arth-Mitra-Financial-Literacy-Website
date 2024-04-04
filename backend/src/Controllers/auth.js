import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  try {
    const { username, name, email, password, ageGroup } = req.body;
    //validations
    if (
        !username ||
      !email ||
      !password ||
      !ageGroup
      
    ) {
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
      coins:50
      
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
    const token = await user.generateAccessToken();

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200).cookie("token", token, options).json({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      },
      token,
    });


    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken,
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

export { signUp, Login };
