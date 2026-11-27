import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";

export function createPrismaClient(envVar = "DATABASE_URL"): PrismaClient {
  const connectionString = process.env[envVar];
  if (!connectionString) {
    throw new Error(`${envVar} is missing: check your .env`);
  }

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}