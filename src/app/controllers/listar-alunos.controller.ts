import { Request, Response } from "express";
import { listarAlunosUseCase } from "../../domain/usecases/listar-alunos.usecase";
import { listarAlunosRepositoryImpl } from "../../infra/repositories/listar-alunos.repository-impl";

const listarAlunosController = async (req: Request, res: Response) => {
    const alunos = await listarAlunosUseCase({ repository: listarAlunosRepositoryImpl, context: 'traceid: bla' });
    res.send(alunos).status(200);
};

export { listarAlunosController };