import Comments from "../services/comments.service";
import articleServices from "../services/article.Service";

const {createComment} = Comments;
const {readSingleArticle} = articleServices;

class commentsController{
  static async createArticleComment(req,res){
    try{
      const {name, email, message} = req.body;
      const comments = await createComment({
        name,
        email,
        message,
        time:Date.now(),
      })
      const post = await readSingleArticle({id:req.params.id});
      if(!post) return res.status(404).send({message:"Article does not exist"});
      await comments.save();
      post.comments.push(comments._id);
      post.commentsCount +=1;
      await post.save()
      res.status(201).send({message:"comment created", post})
    }catch(err){
      console.log(err);
    }
  }

  static async getAllCommentsOnArticle(req,res){
    try{
    const article = await readSingleArticle({id:req.params.id})
    // console.log(article)
    const allComments = article.comments
    res.status(200).send({message:"retrieved all comments on this post", allComments})
    }catch(err){
      res.status(500).send({message:"failed  to fetch post", err})
    }
  }

  static async likeArticle(req,res){
    try{
      const foundArticle = await readSingleArticle({id:req.params.id});
      if(!foundArticle) return res.status(404).send({message:"article is not found"})
      foundArticle.likes +=1;
      await foundArticle.save();
      res.status(200).send({message:"successfully liked an article",foundArticle})
    }catch(err){
      res.status(500).send({message:"can't find the post", err})
    }
  }
}
export default commentsController