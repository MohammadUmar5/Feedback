// src/routes/reddit.js
import express from 'express';

const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Reddit route working');
});

export default router; 
