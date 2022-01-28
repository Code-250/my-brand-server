import { Router } from "express";
import { upload } from "./middleware/ImageUpload";
import articleController from "./controllers/Article.controller";

const {
  createArticle,
  readAllArticles,
  singleArticle,
  updateOneArticle,
  removeArticle,
} = articleController;

const ArticleRouter = Router();
ArticleRouter.route("/post")
  .post(upload.single("imageUrl"), createArticle)
  .get(readAllArticles);
ArticleRouter.route("/post/:id")
  .get(singleArticle)
  .delete(removeArticle)
  .put(upload.single("imageUrl"), updateOneArticle);
export default ArticleRouter;
