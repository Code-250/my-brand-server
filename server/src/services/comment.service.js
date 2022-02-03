import Comments from "../models/comments";

class commentsService {
  static async createComment(comment) {
    const shareComment = await Comments.create(comment);
    return shareComment;
  }
}
export default commentsService;
