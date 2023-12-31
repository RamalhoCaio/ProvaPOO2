import express from 'express';
import dotenv from 'dotenv';
import UsuarioRouter from './src/routes/UsuarioRoutes';
import LeilaoRouter from './src/routes/LeilaoRoutes';
import LanceRouter from './src/routes/LanceRoutes';

dotenv.config({ path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env' });

const app = express();
app.use(express.json());
app.use('/api', UsuarioRouter);
app.use('/api', LeilaoRouter);
app.use('/api', LanceRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log('Fail to load environment');
}
