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
    minlength: 6,
    select: false,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
  },
});

export const User = model<IUser>('User', userSchema);
