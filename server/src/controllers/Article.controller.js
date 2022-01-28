import articleServices from "../services/article.service";

import cloudinary from "../config/cloudinary";

const {
  createArticle,
  readAllArticles,
  readSingleArticle,
  updateArticle,
  deleteArticle,
} = articleServices;

class articleController {
  static async createArticle(req, res) {
    // console.log(req.file);
    const results = await cloudinary.uploader.upload(req.file.path);

    const { title, content } = req.body;
    console.log(req.body);
    const articleCreate = await createArticle({
      title,
      content,
      imageUrl: results.url,
      cloudinary_id: results.public_id,
    });
    articleCreate.save();

    return res.status(200).json(articleCreate);
  }

  static async readAllArticles(req, res) {
    const findAllArticles = await readAllArticles();
    return res
      .status(200)
      .send({ message: "retrieved all article", findAllArticles });
  }

  static async singleArticle(req, res) {
    const singleArticle = await readSingleArticle({ id: req.params.id });

    return res.status(200).send({
      message: `retrieved article with id ${req.params.id}`,
      singleArticle,
    });
  }

  static async updateOneArticle(req, res) {
    console.log(req.body);
    const findArticle = await readSingleArticle({ id: req.params.id });
    await cloudinary.uploader.destroy(findArticle.cloudinary_id);
    const results = await cloudinary.uploader.upload(req.file.path);
    const data = {
      title: req.body.title || findArticle.title,
      content: req.body.content || findArticle.content,
      imageUrl: results.url || findArticle.imageUrl,
      cloudinary_id: results.public_id || findArticle.cloudinary_id,
    };
    const updatedArticle = await updateArticle(
      {
        id: req.params.id,
      },
      data
    );
    return res.status(200).send(updatedArticle);
  }
  static async removeArticle(req, res) {
    const removeArticle = await deleteArticle({ id: req.params.id });
    await cloudinary.uploader.destroy(removeArticle.cloudinary_id);
    return res
      .status(200)
      .send({ message: "article is deleted successfully", removeArticle });
  }
}

export default articleController;
