import { Router } from "express";
import commentsController from "../controllers/comment.controller";

const { createComments, getAllComments } = commentsController;

const commentRouter = Router();

commentRouter.route("/:id/comment").post(createComments);
commentRouter.route("/:id/all-comments").get(getAllComments);

export default commentRouter;
