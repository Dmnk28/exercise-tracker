import mongoose from 'mongoose';
// const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema ({
  username: {
    type: String, 
    required: true
  },
  _id: {
    type: String, 
    required: true
  }
});

export default mongoose.model('User', userSchema);