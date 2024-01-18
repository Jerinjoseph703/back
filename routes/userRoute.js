// userRoute.js
import express from 'express';
import { createUser, bookVisit, getAllBookings, cancelBooking, tofav, getAllfavourites } from '../controllers/userCntrl.js';
import { UserModel } from '../models/user.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('Email is already registered');
    }

    // Create a new user instance
    const newUser = new UserModel({ name, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({ message: 'Sign Up successful', user: newUser });
  } catch (error) {
    console.error('Error during Sign Up', error);
    res.status(500).json({ error: 'Sign Up failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await UserModel.findOne({ email });

    // Check if the user exists and the password matches
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during Login', error);
    res.status(401).json({ error: 'Login failed' });
  }
});

router.post('/register', createUser);
router.post('/bookVisit/:id', bookVisit);
router.post('/getAllBookings', getAllBookings);
router.post('/removeBooking/:id', cancelBooking);
router.post('/tofav/:rid', tofav);
router.post('/allfav/', getAllfavourites);

export default router;
