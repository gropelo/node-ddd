import { Request, Response } from "express";
import { inserirAlunoUseCaseFactory } from "../../domain/usecases/inserir-aluno.usecase";
import { inserirAlunoRepositoryImpl } from "../../infra/repositories/inserir-aluno-repository-impl";
import { Aluno } from "../../domain/entities/aluno";

const inserirAlunoCommand = async (aluno: Aluno) => {
  const inserirAlunoUseCase = inserirAlunoUseCaseFactory({ repository: inserirAlunoRepositoryImpl, context: 'traceid bla' });
  return inserirAlunoUseCase(aluno);
};

export { inserirAlunoCommand };