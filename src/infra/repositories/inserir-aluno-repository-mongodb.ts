import { InserirAlunoRepository } from "../../domain/interfaces/repositories/inserir-aluno.repository";
import { Aluno } from "../../domain/entities/aluno";

const inserirAlunoRepositoryMongodb: InserirAlunoRepository = (aluno: Aluno) => {
    return Promise.resolve();
};

export { inserirAlunoRepositoryMongodb };