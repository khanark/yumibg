import { Schema, model } from 'mongoose';

import { IUser } from '../interfaces/User';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    lowrcase: true,
    minLength: 6,
    select: false,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
  },
});

export const User = model<IUser>('User', userSchema);
