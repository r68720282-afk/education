
const r=require("express").Router();
const U=require("../models/User");
r.post("/",async(req,res)=>{await new U(req.body).save();res.send("ok");});
r.get("/",async(req,res)=>res.json(await U.find()));
module.exports=r;
