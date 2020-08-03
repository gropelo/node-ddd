import { Aluno } from "../../entities/aluno"

type InserirAlunoRepository = (aluno: Aluno) => Promise<void>;

export { InserirAlunoRepository };