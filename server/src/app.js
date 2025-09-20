import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import router from "./routes/index.js";

// middlewares and routes
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
app.get("/", (req, res) => {
  res.status(200).send("hello user");
});


export default app;