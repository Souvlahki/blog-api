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

postsRouter.put("/:postId", passport.authenticate("jwt", { session: false }));
postsRouter.put(
  "/comments/:commentId",
  passport.authenticate("jwt", { session: false })
);
postsRouter.put(
  "/comments/:commentId/replies",
  passport.authenticate("jwt", { session: false })
);

// handle delete requests
postsRouter.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false })
);
postsRouter.delete(
  "/comments/:commentId",
  passport.authenticate("jwt", { session: false })
);
postsRouter.delete(
  "/comments/:commentId/replies",
  passport.authenticate("jwt", { session: false })
);

module.exports = postsRouter;
