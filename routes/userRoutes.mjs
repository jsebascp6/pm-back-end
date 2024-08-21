import express from 'express';
import User from '../models/User.mjs';

const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = user.generateAuthToken();
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta de login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await user.validPassword(password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    const token = user.generateAuthToken();
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
