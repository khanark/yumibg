import { IUser } from '../interfaces/User';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (user: IUser) => {
  const { email, password } = user;
  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) {
    throw new Error('User does not exist');
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { email: existingUser.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1h',
    }
  );

  // const userWithoutPassword = {
  //   ...existingUser.toJSON(),
  //   password: undefined,
  // };

  return {
    ...existingUser.toJSON(),
    token,
  };
};

const register = async (user: IUser) => {
  const { email, password, username } = user;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    email,
    password: hashedPassword,
    username,
  });

  const result = await newUser.save();

  const token = jwt.sign(
    { email: result.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1h',
    }
  );

  return {
    ...result.toJSON(),
    token,
  };
};

const getSingleUser = async (id: string) => {
  return await User.findById(id);
};

const updateUser = async (id: string, user: IUser) => {
  await User.findByIdAndUpdate(id, user), { runValidators: true };
  return getSingleUser(id);
};

export { login, register, getSingleUser, updateUser };
