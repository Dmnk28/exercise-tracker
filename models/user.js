import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema ({
  username: {
    type: String, 
    required: true
  },
  log: [
    {
      description: {
        type: String
      },
      duration: {
          type: Number
      },
      date: {
          type: String
      }
    },
  ]
});

export default mongoose.model('User', userSchema);