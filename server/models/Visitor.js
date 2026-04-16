
const m=require("mongoose");
module.exports=m.model("Visitor",new m.Schema({
ip:String,device:String,time:{type:Date,default:Date.now}
}));
