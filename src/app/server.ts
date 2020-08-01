import express from 'express';
import { listarAlunosController } from './controllers/listar-alunos.controller';
import { inserirAlunoController } from './controllers/inserir-aluno.controller';

const app = express();

app.use(express.json());

app.get('/', listarAlunosController);
app.post('/', inserirAlunoController);

app.listen(3000, () => console.info('Server UP'));