import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { createServer } from 'http';
import compression from 'compression';

config();

const app = express();
const { PORT } = process.env;
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());

app.use(compression());
app.use(express.json({ limit: '25mb' }));

try {
  server.listen(PORT, () => {
    console.log(`app runni gon port ${PORT}`);
  });
} catch (err) {
  console.log(err);
}
