const prisma = require("../config/prisma");

// populate the db with some mock users
async function main() {
  const user = await prisma.user.create({
    data: {
      email: "kokoadsff@dad.com",
      username: "kakfdasa",
      password: "kokooasdgadsfo",
    },
  });
}

main();
