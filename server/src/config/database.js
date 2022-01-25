import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_URL } = process.env;

const connectdB = async () => {
  try {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true });
    await console.log("connected to database Successfully");
  } catch (err) {
    await console.log("failes to connect to database");
  }
};
export default connectdB;
