const { Router } = require("express");
const passport = require("passport");
const postsRouter = Router();
const postsController = require("../controllers/postsController");

// handle get requests
postsRouter.get("/", postsController.postsGet);
postsRouter.get("/:postId", postsController.singlePostGet);
postsRouter.get("/:postId/comments", postsController.commentsGet);
postsRouter.get("/:postId/comments/:commentId", postsController.singleCommentGet);

// handle post requests
postsRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postsController.createPost
);
postsRouter.post(
  "/comments",
  passport.authenticate("jwt", { session: false }),
  postsController.createComment
);
postsRouter.post(
  "/comments/:commentId/replies",
  passport.authenticate("jwt", { session: false }),
  postsController.createReply
);

// handle put requests
// postsRouter.put("/:postId", passport.authenticate("jwt", { session: false }));
// postsRouter.put(
//   "/comments/:commentId",
//   passport.authenticate("jwt", { session: false })
// );
// postsRouter.put(
//   "/comments/:commentId/replies",
//   passport.authenticate("jwt", { session: false })
// );

// // handle delete requests
// postsRouter.delete(
//   "/:postId",
//   passport.authenticate("jwt", { session: false })
// );
// postsRouter.delete(
//   "/comments/:commentId",
//   passport.authenticate("jwt", { session: false })
// );
// postsRouter.delete(
//   "/comments/:commentId/replies",
//   passport.authenticate("jwt", { session: false })
// );

module.exports = postsRouter;
