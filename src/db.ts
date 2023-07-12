import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  pisma?: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.pisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.pisma = prisma;
