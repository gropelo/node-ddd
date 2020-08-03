import { Router, Request, Response } from "express";
import { inserirAlunoCommand } from "../commands/inserir-aluno.command";
import { ValidationError } from "../../domain/exceptions/validation-error";

const inserirAlunoApi = Router();

inserirAlunoApi.post('/', async (req: Request, res: Response) => {
  try {
    await inserirAlunoCommand(req.body);
    res.sendStatus(201);
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).send(err.message);
      return;
    }
    
    console.error(err);
    res.sendStatus(500);
  }
});

export { inserirAlunoApi };