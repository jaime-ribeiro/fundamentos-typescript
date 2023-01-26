import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  /* O token vem como "Bearer ***************", será necessário
    separar as informações pq apesar de vim a string Bearer junto do número do token, o que importa é o número do token, então será separado em um array no qual o [0] = Bearer e [1] = token, entretanto usaremos uma outra nomeclatura na qual o array 0 terá seu nome vazio só pegando o segundo com o nome token
  */
  const [, token] = authHeader.split(" ");

  try {
    // Depois do token vem o código de autenticação que foi gerado em md5 randomicamente e pode ser encontrado no arquivo: AuthenticateUserUseCase.ts
    const { sub: user_id } = verify(
      token,
      "809a5eb7049598bb88bb886d5916e912"
    ) as IPayload;

    const userRepository = new UsersRepository();

    const user = await userRepository.findById(user_id);
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid Token!", 401);
  }
}
