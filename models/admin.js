// adminModel.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model('Admin', adminSchema);

export { AdminModel };
