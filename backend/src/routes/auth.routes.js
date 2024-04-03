import { Router } from "express";

import {signUp,Login} from '../Controllers/auth.js';



const router = Router();


router.route("/register").post(signUp);
router.route("/login").post(Login);

export default router;