const prisma = require("../config/prisma");
// clear user db
async function main() {
  const post = await prisma.post.findUnique({
    where: { id: 1 },
    include: {
      author: { select: { username: true } }, // Post author
      comments: {
        include: {
          author: { select: { username: true } }, // Comment author
          replies: {
            include: {
              author: { select: { username: true } }, // Reply author
            },
          },
        },
      },
    },
  });

  console.log(post);
}

main();
