// adminRoute.js
import express from 'express';
// import { createAdmin, adminLogin } from '../controllers/adminCntrl.js';
import { AdminModel } from '../models/admin.js';

const router = express.Router();

router.post('/createAdmin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      throw new Error('Email is already registered');
    }

    // Create a new admin instance
    const newAdmin = new AdminModel({ email, password });

    // Save the admin to the database
    await newAdmin.save();

    res.status(200).json({ message: 'Admin creation successful', admin: newAdmin });
  } catch (error) {
    console.error('Error during Admin creation', error);
    res.status(500).json({ error: 'Admin creation failed' });
  }
});

router.post('/adminLogin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await AdminModel.findOne({ email });

    // Check if the admin exists and the password matches
    if (!admin || admin.password !== password) {
      throw new Error('Invalid email or password');
    }

    res.status(200).json({ message: 'Admin login successful', admin });
  } catch (error) {
    console.error('Error during Admin login', error);
    res.status(401).json({ error: 'Admin login failed' });
  }
});

// Add more routes for other admin-related operations as needed

export default router;
