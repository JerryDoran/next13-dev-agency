import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, 'Please enter title for the post'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a post description'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Please enter an image'],
    },
    content: {
      type: String,
      required: [true, 'Please enter post content'],
    },
    username: {
      type: String,
      required: [true, 'Please enter a username'],
    },
  },
  { timestamps: true }
);

// Need to export the model like this in Next JS
export default mongoose.models.Post || mongoose.model('Post', postSchema);
