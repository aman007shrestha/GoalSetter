const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a Password'],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', UserSchema);
module.exports = User;
