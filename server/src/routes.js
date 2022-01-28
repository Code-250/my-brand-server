import { Router } from "express";
import { upload } from "./middleware/ImageUpload";
import articleController from "./controllers/Article.controller";
import queryController from "./controllers/query.controller";


const {
  createArticle,
  readAllArticles,
  singleArticle,
  updateOneArticle,
  removeArticle,
} = articleController;

const {sendMessages, findQueries}  = queryController;

const ArticleRouter = Router();
ArticleRouter.route("/post")
  .post(upload.single("imageUrl"), createArticle)
  .get(readAllArticles);
ArticleRouter.route("/post/:id")
  .get(singleArticle)
  .delete(removeArticle) 
  .put(upload.single("imageUrl"), updateOneArticle);

ArticleRouter.route("/send-message").post(sendMessages);
ArticleRouter.route("/all-messages").get(findQueries);

export default ArticleRouter;
