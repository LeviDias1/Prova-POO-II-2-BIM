// index.ts
import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import usuarioRoutes from './routes/usuarioRoutes';
import leilaoRoutes from './routes/leilaoRoutes';
import lanceRoutes from './routes/lanceRoutes';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/leiloes', leilaoRoutes);
app.use('/api/lances', lanceRoutes);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit();
});
