import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import redditRoutes from './src/routes/reddit.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.use('/api/reddit', redditRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
