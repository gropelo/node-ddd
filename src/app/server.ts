import express from 'express';
import { listarAlunosController } from './controllers/listar-alunos.controller';

const app = express();

app.use(express.json());

app.get('/', listarAlunosController);

app.listen(3000, () => console.info('Server UP'));