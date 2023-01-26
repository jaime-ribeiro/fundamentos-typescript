export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  // statusCode não foi esperado pra receber como number como em cima, porque o valor default dele é 400
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
