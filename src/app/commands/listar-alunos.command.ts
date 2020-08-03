import { listarAlunosUseCaseFactory } from "../../domain/usecases/listar-alunos.usecase";
import { listarAlunosRepositoryImpl } from "../../infra/repositories/listar-alunos.repository-impl";

const listarAlunosCommand = async () => {
    const listarAlunosUseCase = listarAlunosUseCaseFactory({ repository: listarAlunosRepositoryImpl, context: 'traceid: bla' });  
    return listarAlunosUseCase();
};

export { listarAlunosCommand };