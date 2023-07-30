import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    throw new Error('Connection to the database failed.');
  }
}

export default dbConnect;
