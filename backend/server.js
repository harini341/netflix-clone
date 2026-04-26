const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { moviesData } = require('./data/movies');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'your_super_secret_jwt_key_netflix_clone_2024';

app.use(cors());
app.use(express.json());

// Login endpoint – simplified for demo
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  console.log('Login attempt:', { email, password }); // Debug log

  // Accept the exact default credentials
  if (email === 'user@netflix.com' && password === 'password123') {
    const token = jwt.sign({ id: 1, email }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({
      success: true,
      token,
      user: { email, name: 'John Doe' }
    });
  }

  // Optional: accept any other email/password with length > 2 for testing
  if (email && password && email.length > 2 && password.length > 2) {
    const token = jwt.sign({ id: Date.now(), email }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({
      success: true,
      token,
      user: { email, name: email.split('@')[0] }
    });
  }

  // If nothing matches
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Get movies (protected route example)
app.get('/api/movies', verifyToken, (req, res) => {
  res.json(moviesData);
});

// Public route for movies (optional - for demo)
app.get('/api/public/movies', (req, res) => {
  res.json(moviesData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});