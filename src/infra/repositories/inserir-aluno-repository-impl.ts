import { InserirAlunoRepository } from "../../domain/interfaces/repositories/inserir-aluno.repository";
import { Aluno } from "../../domain/entities/aluno";

const inserirAlunoRepositoryImpl: InserirAlunoRepository = (aluno: Aluno) => {
    return Promise.resolve();
};

export { inserirAlunoRepositoryImpl };