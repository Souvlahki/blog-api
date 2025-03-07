require("dotenv").config();
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const prisma = require("../config/prisma");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const CustomNotAuthorizedError = require("../errors/CustomNotAuthorizedError");

// get all posts
exports.postsGet = asyncHandler(async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      posts: {
        include: {
          comments: {
            include: {
              replies: true,
            },
          },
        },
      },
      author: true,
    },
  });

  return res.json({
    posts,
  });
});

// get a single post
exports.singlePostGet = asyncHandler(async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.body.postId,
    },
    include: {
      comments: {
        include: {
          replies: true,
        },
      },
    },
  });

  if (!post) {
    throw new CustomNotFoundError("Post not found");
  }

  res.json({
    post,
  });
});

// get all comments of a specific post
exports.commentsGet = asyncHandler(async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: req.body.postId,
    },
    include: {
      replies: true,
    },
  });

  res.json({
    comments,
  });
});

// get a single comment
exports.singleCommentGet = asyncHandler(async (req, res) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id: req.params.commentId,
    },
  });

  if (!comment) {
    throw new CustomNotFoundError("comment not found");
  }

  res.status(201).json({
    comment,
  });
});

// create post
exports.createPost = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new CustomNotAuthorizedError("user not authorized");
  }

  await prisma.post.create({
    data: {
      content: req.body.content,
      title: req.body.title,
      published: req.body.published,
      authoId: data.user.id,
    },
  });

  res.status(201).json({
    message: "post created",
  });
});

// create comment
exports.createComment = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new CustomNotAuthorizedError("user not authorized");
  }

  await prisma.comment.create({
    data: {
      content: req.body.content,
      postId: req.body.postId,
      authorId: req.user.id,
    },
  });

  res.status(201);
});

// create reply
exports.createReply = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new CustomNotAuthorizedError("user not authorized");
  }

  await prisma.comment.create({
    data: {
      parentId: req.body.commentId,
      content: req.body.content,
      authorId: req.user.id,
    },
  });

  res.status(201);
});
