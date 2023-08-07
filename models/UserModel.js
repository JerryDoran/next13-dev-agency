import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Please enter a username'],
    },
    email: {
      type: String,
      required: [true, 'Please enter a valid email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: [6, 'Your password must be at least 6 characters'],
      // select: false, // this will make sure that when we get a user response back that the password will not be included
    },
  },
  { timestamps: true }
);

// Need to export the model like this in Next JS
export default mongoose.models.User || mongoose.model('User', userSchema);
