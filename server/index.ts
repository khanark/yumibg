import express, { Express, Request, Response } from 'express';

import cors from 'cors';
import { db } from './config/database';
import dotenv from 'dotenv';
import { router } from './config/routes';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

const startServer = () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  db();
  router(app);

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  app.listen(port, (): void =>
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  );
};

startServer();
