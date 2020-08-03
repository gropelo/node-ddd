import { ListarAlunosRepository } from "../interfaces/repositories/listar-alunos.repository";
import { Aluno } from "../entities/aluno";

interface IDependencies {
    repository: ListarAlunosRepository;
    context: any;
}

const listarAlunosUseCaseFactory = ({repository, context}: IDependencies) => (): Promise<Aluno[]> => {
    console.info(context);
    return repository();
};

export { listarAlunosUseCaseFactory };