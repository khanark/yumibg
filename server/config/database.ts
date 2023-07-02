const mongoose = require('mongoose');
require('dotenv').config();

// production / development database
const dbURI =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/yummibg';

export const db = async (): Promise<void> => {
  // connect to database
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('💾[database] Connected to database');
  } catch (error) {
    console.log(`💾[database] There has been an error: ${error}`);
    process.exit(1);
  }
};
