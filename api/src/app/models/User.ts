import { Document } from 'mongoose';
import mongoose from '../../config/database';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  auth_type?: string;
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
    select: false,
  },
  auth_type: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model<IUser>('User', UserSchema);
