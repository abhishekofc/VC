import express from "express";
import dotenv from "dotenv";
import connectDb from "./configs/connectDb.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import courseRouter from "./routes/courseRoute.js";
import paymentRouter from "./routes/paymentRoute.js";
import aiRouter from "./routes/aiRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
dotenv.config();

let port = process.env.PORT;
let app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/payment", paymentRouter);
app.use("/ai", aiRouter);
app.use("/review", reviewRouter);

// Creating a simple route to check if the server is running
app.get("/api", (req, res) => {
  res.send("Hello From Server");
});
app.listen(port, () => {
  console.log("Server Started");
  connectDb();
});
