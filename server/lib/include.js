const postInclude = {
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
};

const commentInclude = {
  author: { select: { username: true } },
  replies: {
    include: {
      author: { select: { username: true } },
    },
  },
};

module.exports = { postInclude, commentInclude };
