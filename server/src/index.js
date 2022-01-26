import express from "express";
import connectdB from "./config/database";
import "dotenv/config";
import cors from "cors";

const app = express();
connectdB();
app.use(cors());
const port = process.env.PORT;
app.listen(port, console.log("server is running on port:", port));
