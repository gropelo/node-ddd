import express from 'express';
import { apis } from './apis';

const app = express();

app.use(express.json());
app.use(apis);

app.listen(3000, () => console.info('Server UP'));