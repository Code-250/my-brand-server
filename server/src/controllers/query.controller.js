import queryMessage from "../services/query.service";

const {sendMessage, findAllQueries} = queryMessage;

class queryController{
  static async sendMessages(req,res){
    const {guestName, email, message} = req.body;
    const Messages = await sendMessage({
      guestName,
      email,
      message
    })
    if(!guestName || !email|| !message) return res.status(400).send({message:"all fields are requires"})
    Messages.save();
    return res.status(201).send({message:"message sent successfully",Messages});

  }

  static async findQueries(req,res){
    const Queries = await findAllQueries();
    if(!Queries) return res.status(404).send({message:"failed to fetch contact messages"})
    return res.status(200).send({message:"retrieve all contact messages", Queries})
  }

}

export default queryController;
