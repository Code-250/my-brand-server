import { Router } from "express";
import { upload } from "./middleware/ImageUpload";
import articleController from "./controllers/Article.controller";
import commentsController from "./controllers/comment.controller";


const {
  createArticle,
  readAllArticles,
  singleArticle,
  updateOneArticle,
  removeArticle,
} = articleController;

const {createArticleComment, getAllCommentsOnArticle, likeArticle} = commentsController

const ArticleRouter = Router();
ArticleRouter.route("/post")
  .post(upload.single("imageUrl"), createArticle)
  .get(readAllArticles);
ArticleRouter.route("/post/:id")
  .get(singleArticle)
  .delete(removeArticle)
  .put(upload.single("imageUrl"), updateOneArticle);

ArticleRouter.route("/post/:id/comment").post(createArticleComment);
ArticleRouter.route("/post/:id/allComments").get(getAllCommentsOnArticle);
ArticleRouter.route("/post/:id/like").patch(likeArticle)
export default ArticleRouter;
