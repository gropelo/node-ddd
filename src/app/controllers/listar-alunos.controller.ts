import { Request, Response } from "express";
import { listarAlunosUseCaseFactory } from "../../domain/usecases/listar-alunos.usecase";
import { listarAlunosRepositoryImpl } from "../../infra/repositories/listar-alunos.repository-impl";

const listarAlunosController = async (req: Request, res: Response) => {
    const listarAlunosUseCase = listarAlunosUseCaseFactory({ repository: listarAlunosRepositoryImpl, context: 'traceid: bla' });  
    const alunos = await listarAlunosUseCase();
    res.send(alunos).status(200);
};

export { listarAlunosController };