require("dotenv").config();
const asyncHandler = require("express-async-handler");
const prisma = require("../config/prisma");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const CustomNotAuthorizedError = require("../errors/CustomNotAuthorizedError");

const getQueries = require("../queries/getQueries");

// get all posts
exports.postsGet = asyncHandler(async (req, res) => {
  const posts = await getQueries.getPosts();

  if (!posts) {
    res.json(null);
  }

  return res.status(201).json({ posts });
});

// get a single post
exports.singlePostGet = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await getQueries.getPost(postId);

  if (!post) {
    throw new CustomNotFoundError("Post not found");
  }

  res.status(201).json({
    post,
  });
});

// get all comments of a specific post
exports.commentsGet = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const comments = await getQueries.getComments(postId);

  if (!comments) {
    res.json(null);
  }

  res.status(201).json({
    comments,
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
      authorId: req.user.id,
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

  const { postId } = req.params;

  await prisma.comment.create({
    data: {
      content: req.body.content,
      postId: parseInt(postId),
      authorId: req.user.id,
    },
  });

  res.status(201).json({
    message: "comment created",
  });
});

// create reply
exports.createReply = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new CustomNotAuthorizedError("user not authorized");
  }

  const { postId, commentId } = req.params;

  await prisma.comment.create({
    data: {
      postId: parseInt(postId),
      parentId: parseInt(commentId),
      content: req.body.content,
      authorId: req.user.id,
    },
  });

  res.status(201).json({
    message: "reply created",
  });
});
