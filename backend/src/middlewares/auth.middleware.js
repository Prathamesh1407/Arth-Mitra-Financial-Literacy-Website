import JWT from 'jsonwebtoken'
import {User} from '../models/user.model.js';
import dotenv from 'dotenv'

dotenv.config()

//Protected Routes token base
const requireSignIn = async(req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log("Error in MiddleWare :-",error);
    return res.status(401).send({
      success: false,
      error,
      message: "Error in middleware",
    });
  }
};

//admin acceess
const isAgeGroup1 = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.ageGroup < 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};

const isAgeGroup2 = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.ageGroup < 2) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};

const isAgeGroup3 = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.ageGroup < 3) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};

const isAgeGroup4 = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.ageGroup < 4) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};

export{
    requireSignIn,
    isAgeGroup1,
    isAgeGroup2,
    isAgeGroup3,
    isAgeGroup4
}