import { Router } from "express";

import {
    getAllTransaction,
    getTransaction,
    removeTransaction,
    addTransaction} from '../Controllers/transaction.controllers.js';
 import {
    getAllCategories,
    addCategory,
    removeCategory

 }from '../Controllers/category.js';

import {
    requireSignIn,
    isAgeGroup2,
    
} from '../middlewares/auth.middleware.js';


const router = Router();


router.route("/getAllTransaction").post(requireSignIn , isAgeGroup2 , getAllTransaction);
router.route("/addTransaction").post(requireSignIn , isAgeGroup2 ,addTransaction);
router.route("/getTransaction").post(requireSignIn , isAgeGroup2 ,getTransaction);
router.route("/removeTransaction").post(requireSignIn , isAgeGroup2 ,removeTransaction);

router.route("/getAllCategories").post(requireSignIn , isAgeGroup2 ,getAllCategories);
router.route("/removeCategory").post(requireSignIn , isAgeGroup2 ,removeCategory);
router.route("/addCategory").post(requireSignIn , isAgeGroup2 ,addCategory);


export default router;