import { listarAlunosUseCaseFactory } from "../../domain/usecases/listar-alunos.usecase";
import { listarAlunosRepositoryMongodb } from "../../infra/repositories/listar-alunos.repository-mongodb";

const listarAlunosCommand = async () => {
    const listarAlunosUseCase = listarAlunosUseCaseFactory({ repository: listarAlunosRepositoryMongodb, context: 'traceid: bla' });  
    return listarAlunosUseCase();
};

export { listarAlunosCommand };