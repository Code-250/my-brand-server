import express from "express";
import morgan from "morgan";
import connectdB from "./config/database";
import "dotenv/config";
import allRoutes from "./routes";

const app = express();
connectdB();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", allRoutes);

const port = process.env.PORT;
app.listen(port, console.log("server is running on port:", port));
