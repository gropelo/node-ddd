import { Router, Request, Response } from "express";
import { listarAlunosCommand } from "../commands/listar-alunos.command";

const listarAlunosApi = Router();

listarAlunosApi.get('/', async (req: Request, res: Response) => {
  try {
    const alunos = await listarAlunosCommand();
    res.send(alunos);
  } catch (err) {
    res.status(500);
    console.error(err);
  }
});

export { listarAlunosApi };