import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./src/routes/auth.routes.js";
import goalRoutes from "./src/routes/goal.routes.js";
import transactionRouter from "./src/routes/transaction.routes.js";

//routes declaration
app.use("/api/v1", userRouter);
app.use("/api/v1", goalRoutes);
app.use("/api/v1", transactionRouter);

// http://localhost:8000/api/v1/users/register

export { app };
