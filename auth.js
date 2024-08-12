const express = require('express'); 
const bcrypt = require('bcrypt');    
const jwt = require('jsonwebtoken'); 
const User = require('../models/user'); 
const router = express.Router();
module.exports = router;
router.post('/signup', async (req, res) => {
  const { username, email, phone, password, gender, dob } = req.body;
    try {
      const user = new User({ username, email, phone, password, gender, dob });
      await user.save();
      res.status(201).send('User registered successfully');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.post('/login', async (req, res) => {
    const { emailOrUsername, password } = req.body;
    try {
      const user = await User.findOne({
        $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
      });
      if (!user) return res.status(404).json({ error: 'User not found' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.error('Backend login error:', error);
      res.status(500).json({ error: 'Error logging in' });
    }
});

    

  