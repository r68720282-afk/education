
const r=require("express").Router();
const C=require("../models/College");

r.get("/",async(req,res)=>res.json(await C.find()));
r.post("/",async(req,res)=>{await new C(req.body).save();res.send("ok");});

module.exports=r;
