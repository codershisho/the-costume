import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();
  const customers = await prisma.customer.findMany();

  return customers;
});
