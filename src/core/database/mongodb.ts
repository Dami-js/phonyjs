import mongoose from 'mongoose';
import { MONGODB_URI } from '@config/constants';

export const mongodb = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to mongodb`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
