import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weatherRoutes';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
