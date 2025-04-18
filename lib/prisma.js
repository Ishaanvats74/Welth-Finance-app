import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

globalThis.prisma = db ;

// globalThis.prisma: This global variable ensures that the Prisma client instance is 
// reused across hot reloads during development . Without this , each time your application 
// reloads , a new instances of the prisma client would be created , potentially leading to connection issues. 
