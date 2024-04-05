import { Router } from "express";

import { signUp, Login, getCoins, getTrends ,quizSubmit} from "../Controllers/auth.js";

import {
  requireSignIn,
  isAgeGroup1,
  isAgeGroup2,
  isAgeGroup3,
  isAgeGroup4,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(signUp);
router.route("/Login").post(Login);
router.route("/getCoins").post(requireSignIn, isAgeGroup1, getCoins);
router.route("/getTrends").post(requireSignIn, isAgeGroup1,getTrends);
router.route("/quizSubmit").post(requireSignIn, isAgeGroup1,quizSubmit);
export default router;
