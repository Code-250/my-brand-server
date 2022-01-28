import Comment from "../models/comments";

class Comments{
  static async createComment(comment){
    const createComment = await Comment.create(comment);
    return createComment;
  }
}
export default Comments;