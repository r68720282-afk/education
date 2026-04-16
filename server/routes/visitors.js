
const r=require("express").Router();
const V=require("../models/Visitor");
r.post("/",async(req,res)=>{
await new V({ip:req.ip,device:req.headers["user-agent"]}).save();
res.send("ok");
});
r.get("/",async(req,res)=>res.json(await V.find()));
module.exports=r;
