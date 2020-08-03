import { ListarAlunosRepository } from "../../domain/interfaces/repositories/listar-alunos.repository";

const listarAlunosRepositoryMongodb: ListarAlunosRepository = () => {
    return Promise.resolve([
        { id: '1', nome: 'teste' },
        { id: '2', nome: 'teste2' }
    ]);
};

export { listarAlunosRepositoryMongodb };