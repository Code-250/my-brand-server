import Article from "../models/article";

class articleServices {

  static async createArticle(post) {
    const createArticle = await Article.create(post);
    // if (!createArticle) return null;
    return createArticle;
  }


  static async readAllArticles() {
    const readAllArticles = await Article.find();
    return readAllArticles;
  }


  static async readSingleArticle({ id: _id }) {
    const readSingleArticle = await Article.findOne({ _id });
    return readSingleArticle;
  }
  
  // update

  static async updateArticle({ id: _id }, post) {
    const updateArticle = await Article.findOneAndUpdate({ _id }, post, {
      runValidators: true,
      new: true,
    });
    return updateArticle;
  }

  static async deleteArticle({ id: _id }) {
    const deleteArticle = await Article.findOneAndDelete({ _id });
    return deleteArticle;
  }
}
export default articleServices;
