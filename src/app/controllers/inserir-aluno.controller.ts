import { Request, Response } from "express";
import { inserirAlunoUseCaseFactory } from "../../domain/usecases/inserir-aluno.usecase";
import { inserirAlunoRepositoryImpl } from "../../infra/repositories/inserir-aluno-repository-impl";
import { ValidationError } from "../../domain/exceptions/validation-error";

const inserirAlunoController = async (req: Request, res: Response) => {
  const inserirAlunoUseCase = inserirAlunoUseCaseFactory({ repository: inserirAlunoRepositoryImpl, context: 'traceid bla' });

  try {
    
    await inserirAlunoUseCase(req.body);
    res.sendStatus(201);

  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).send(err.message);
      return;
    }
    
    console.error(err);
    res.sendStatus(500);
  }
};

export { inserirAlunoController };