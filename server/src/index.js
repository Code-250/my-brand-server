import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import connectdB from "./config/database";
import "dotenv/config";
import ArticleRouter from "./routes";
import multer from "multer";

const app = express();
connectdB();
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", ArticleRouter);

const port = process.env.PORT;
app.listen(port, console.log("server is running on port:", port));
