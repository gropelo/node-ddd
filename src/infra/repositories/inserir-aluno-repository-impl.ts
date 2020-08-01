import { ListarAlunosRepository } from "../../domain/repositories/listar-alunos.repository";
import { InserirAlunoRepository } from "../../domain/repositories/inserir-aluno.repository";
import { Aluno } from "../../domain/entities/aluno";

const inserirAlunoRepositoryImpl: InserirAlunoRepository = (aluno: Aluno) => {
    return Promise.resolve();
};

export { inserirAlunoRepositoryImpl };