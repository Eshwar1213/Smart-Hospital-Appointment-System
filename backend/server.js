import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Import routes
import authRoutes from './routes/authRoutes.js';

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // To accept JSON data in the body

// --- API Routes ---
app.get('/', (req, res) => {
  res.send('Smart Hospital API is running...');
});

app.use('/api/auth', authRoutes);
// You can add other routes here, e.g., for appointments
// app.use('/api/appointments', appointmentRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));