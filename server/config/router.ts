import {
  recipeRouter as recipeController,
  userRouter as userController,
} from '../controllers/controllers.module';

export const router = (app: Express): void => {
  app.use('/api/users', userController);
  app.use('/api/recipes', recipeController);
};
