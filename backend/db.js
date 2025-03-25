const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  const { readyState } = mongoose.connection;

  if (readyState === 1) {
    console.log('MongoDB is already connected.');
    return;
  }

  if (readyState === 2) {
    console.log('MongoDB is in the process of connecting...');
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Stop the app on failure
  }
};

module.exports = connectDB;
