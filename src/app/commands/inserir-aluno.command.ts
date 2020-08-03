import { Request, Response } from "express";
import { inserirAlunoUseCaseFactory } from "../../domain/usecases/inserir-aluno.usecase";
import { inserirAlunoRepositoryMongodb } from "../../infra/repositories/inserir-aluno-repository-mongodb";
import { Aluno } from "../../domain/entities/aluno";

const inserirAlunoCommand = async (aluno: Aluno) => {
  const inserirAlunoUseCase = inserirAlunoUseCaseFactory({ repository: inserirAlunoRepositoryMongodb, context: 'traceid bla' });
  return inserirAlunoUseCase(aluno);
};

export { inserirAlunoCommand };