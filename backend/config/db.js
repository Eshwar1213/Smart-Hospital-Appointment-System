import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // IMPORTANT: Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual MongoDB connection string.
    // You can get this from MongoDB Atlas or your local MongoDB setup.
    // Example: "mongodb://127.0.0.1:27017/smart_hospital"
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://user:pass@cluster.mongodb.net/smart_hospital?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;