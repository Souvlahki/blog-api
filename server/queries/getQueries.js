const { postInclude, commentInclude } = require("../lib/include");
const prisma = require("../config/prisma");

exports.getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: postInclude,
    });

    return posts;
  } catch (err) {
    return null;
  }
};

exports.getPost = async (postId) => {
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId), published: true },
      include: postInclude,
    });

    return post;
  } catch (err) {
    return null;
  }
};

exports.getComments = async (postId) => {
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: parseInt(postId) },
      include: commentInclude,
    });
    
    return comments
  } catch (err) {
    return null;
  }
};
