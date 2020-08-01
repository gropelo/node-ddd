import { Aluno } from "../entities/aluno";
import { InserirAlunoRepository } from "../repositories/inserir-aluno.repository";
import { ValidationError } from "../exceptions/validation-error";

interface IDependencies {
    repository: InserirAlunoRepository;
    context: any;
}

const inserirAlunoUseCaseFactory = ({repository, context}: IDependencies) => (aluno: Aluno): Promise<void> => {
    if (!aluno.nome) {
        throw new ValidationError('Nome inválido');
    }

    console.info(context);
    return repository(aluno);
};

export { inserirAlunoUseCaseFactory };