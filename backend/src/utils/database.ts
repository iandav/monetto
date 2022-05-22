import {PrismaClient} from "@prisma/client";

// Initialize database once for importing elsewhere
export const db = new PrismaClient();