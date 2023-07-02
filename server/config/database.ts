import mongoose, { ConnectOptions } from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

// production / development database
const database =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_DEV;

export const db = async (): Promise<void> => {
  // connect to database
  try {
    await mongoose.connect(
      database as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log(`💾[database] Connected to database at ${database}`);
  } catch (error) {
    console.log(`💾[database] There has been an error: ${error}`);
    process.exit(1);
  }
};
