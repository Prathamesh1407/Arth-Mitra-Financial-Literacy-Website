import { Router } from "express";

import {
    getAllTransaction,
    getTransaction,
    removeTransaction,
    addTransaction,
    clearTransactions} from '../Controllers/transaction.controllers.js';
 import {
    getAllCategories,
    addCategory,
    removeCategory

 }from '../Controllers/category.js';

import {
    requireSignIn,
    isAgeGroup1,
    isAgeGroup2,
    
} from '../middlewares/auth.middleware.js';


const router = Router();


router.route("/getAllTransaction").post(requireSignIn , isAgeGroup1 , getAllTransaction);
router.route("/addTransaction").post(requireSignIn , isAgeGroup1 ,addTransaction);
router.route("/getTransaction").post(requireSignIn , isAgeGroup1 ,getTransaction);
router.route("/removeTransaction").post(requireSignIn , isAgeGroup1 ,removeTransaction);
router.route("/clearTransactions").post(requireSignIn , isAgeGroup1,clearTransactions);

router.route("/getAllCategories").post(requireSignIn , isAgeGroup1 ,getAllCategories);
router.route("/removeCategory").post(requireSignIn , isAgeGroup1 ,removeCategory);
router.route("/addCategory").post(requireSignIn , isAgeGroup1 ,addCategory);


export default router;