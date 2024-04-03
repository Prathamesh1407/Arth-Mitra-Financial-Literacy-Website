import { Router } from "express";

import {
    getAllGoal,
    getGoal,
    removeGoal,
    addGoal,
    UpdateAmount} from '../Controllers/goal.js';

import {
    requireSignIn,
    isAgeGroup1,
    isAgeGroup2,
    isAgeGroup3,
    isAgeGroup4
} from '../middlewares/auth.middleware.js';


const router = Router();


router.route("/getAllGoal").post(requireSignIn , isAgeGroup2 , getAllGoal);
router.route("/getGoal").post(requireSignIn , isAgeGroup2 ,getGoal);
router.route("/removeGoal").post(requireSignIn , isAgeGroup2 ,removeGoal);
router.route("/addGoal").post(requireSignIn , isAgeGroup2 ,addGoal);
router.route("/UpdateAmount").post(requireSignIn , isAgeGroup2 ,UpdateAmount);

export default router;