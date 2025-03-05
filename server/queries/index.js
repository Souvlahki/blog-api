const prisma = require("../config/prisma");

// populate the db with some mock users
async function main() {
  await prisma.user.deleteMany();
}

main();
