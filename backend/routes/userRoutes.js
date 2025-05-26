const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');
const authenticateJWT = require('../middleware/authMiddleware');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Example of a protected route
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;