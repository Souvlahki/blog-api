const { Router } = require("express");
const passport = require("passport");
const postsRouter = Router();
const postsController = require("../controllers/postsController");

// handle get requests
postsRouter.get("/", postsController.postsGet);
postsRouter.get("/:postId", postsController.singlePostGet);
postsRouter.get("/:postId/comments", postsController.commentsGet);

// handle post requests

// create post
postsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postsController.createPost
);

// create comment for a single post
postsRouter.post(
  "/:postId/comments",
  passport.authenticate("jwt", { session: false }),
  postsController.createComment
);

// create reply for a single comment
postsRouter.post(
  "/:postId/comments/:commentId/replies",
  passport.authenticate("jwt", { session: false }),
  postsController.createReply
);

postsRouter.put(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postsController.editPost
);

postsRouter.put(
  "/:postId/comments/:commentId",
  passport.authenticate("jwt", { session: false }),
  postsController.editComment
);

postsRouter.put(
  "/:postId/comments/:commentId/replies/:replyId",
  passport.authenticate("jwt", { session: false }),
  postsController.editReply
);

// handle delete requests
postsRouter.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  postsController.deletePost
);

postsRouter.delete(
  "/:postId/comments/:commentId",
  passport.authenticate("jwt", { session: false }),
  postsController.deleteComment
);

postsRouter.delete(
  "/:postId/comments/:commentId/replies/:replyId",
  passport.authenticate("jwt", { session: false }),
  postsController.deleteReply
);

module.exports = postsRouter;
