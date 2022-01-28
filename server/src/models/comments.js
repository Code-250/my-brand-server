import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
  name:{type:String, defaullt:"Anonymous"},
  email:{type:String,default:''},
  message:{type:String, required:true},
  time:{type:Date}
})

export default mongoose.model("Comment", commentsSchema);