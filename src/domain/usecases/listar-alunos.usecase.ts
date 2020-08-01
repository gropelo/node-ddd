import { ListarAlunosRepository } from "../repositories/listar-alunos.repository";
import { Aluno } from "../entities/aluno";

interface Input {
    repository: ListarAlunosRepository;
    context: any;
}

const listarAlunosUseCase = ({repository, context}: Input): Promise<Aluno[]> => {
    console.info(context);
    return repository();
};

export { listarAlunosUseCase };