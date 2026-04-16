
const m=require("mongoose");
module.exports=m.model("College",new m.Schema({
name:String,category:String
}));
