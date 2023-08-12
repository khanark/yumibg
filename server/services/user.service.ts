import { IUser } from '../interfaces/User';
import Recipe from '../models/Recipe';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (user: IUser) => {
  const { email, password } = user;
  const existingUser = await User.findOne({ email }).select('+password');

  if (!existingUser) {
    throw new Error('Wrong username or password.');
  }

  const isCorrectPassword = await bcrypt.compare(password, existingUser.password);

  if (!isCorrectPassword) {
    throw new Error('Wrong username or password.');
  }

  const token = createToken(existingUser);

  return {
    ...returnUserWithoutPassword(existingUser),
    token,
  };
};

const register = async (user: IUser) => {
  const { email, password, username } = user;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email is already taken.');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
    username,
  });

  const result = await newUser.save();

  const token = createToken(result);

  return {
    ...returnUserWithoutPassword(result),
    token,
  };
};

const getSingleUser = async (id: string) => {
  return await User.findById(id).populate('createdRecipes savedRecipes');
};

const updateUser = async (id: string, user: IUser) => {
  await User.findByIdAndUpdate(id, user), { runValidators: true };
  return getSingleUser(id);
};

const saveRecipe = async (recipeId: string, userId: string) => {
  const user = await User.findById(userId);
  const recipe = await Recipe.findById(recipeId);
  recipe.savedByUserData.savedUsers.push(userId);
  recipe.savedByUserData.count++;
  await recipe.save();
  user?.savedRecipes.push(recipeId);
  await user?.save();
};

function returnUserWithoutPassword(user: any) {
  return {
    ...user.toJSON(),
    password: undefined,
  };
}

function createToken(user: IUser) {
  const payload = {
    id: user._id,
    email: user.email,
    username: user.username,
  };

  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '365d',
  });
}

export { login, register, getSingleUser, updateUser, saveRecipe };
