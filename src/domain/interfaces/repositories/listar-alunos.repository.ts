import { Aluno } from "../../entities/aluno"

type ListarAlunosRepository = () => Promise<Aluno[]>;

export { ListarAlunosRepository };