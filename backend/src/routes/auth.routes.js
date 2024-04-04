import { Router } from "express";

import {signUp,Login , getCoins} from '../Controllers/auth.js';



const router = Router();


router.route("/register").post(signUp);
router.route("/Login").post(Login);
router.route("/LogingetCoins").post(getCoins);

export default router;