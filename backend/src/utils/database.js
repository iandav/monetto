const {PrismaClient} = require("@prisma/client")

// Initialize database once for importing elsewhere
exports.db = new PrismaClient();