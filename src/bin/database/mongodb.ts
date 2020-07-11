import mongoose from "mongoose";
import { MONGO_DB_URI } from "../utils/constants";

export async function useMongodb() {
  try {
    await mongoose.connect(`${MONGO_DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connected to mongodb`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
}
