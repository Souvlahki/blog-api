const prisma = require("../config/prisma");
// clear user db
async function main() {
  await prisma.user.deleteMany();
}

main();
