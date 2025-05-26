const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Signup logic
exports.signup = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    // Check if email or username already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: 'Email already exists' });

    const existingusername = await User.findOne({ username });
    if (existingusername) return res.status(400).json({ message: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, username, email, password: hashedPassword });
    console.log(newUser);
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login logic (with username and password)
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username (username)
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    // Create JWT token
    const token = jwt.sign(
      { username: user.username, email: user.email, id: user._id },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      fullName: user.fullName,
      email: user.email,
      username: user.username
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
