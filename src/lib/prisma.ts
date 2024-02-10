import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // Adiciona como resposta de uma requisição todos os comandos SQL gerados
});
