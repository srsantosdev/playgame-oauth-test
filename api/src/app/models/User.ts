import { Document } from 'mongoose';
import mongoose from '../../config/database';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);
