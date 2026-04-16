
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/collegeDB");

app.use("/api/visitors",require("./routes/visitors"));
app.use("/api/users",require("./routes/users"));
app.use("/api/colleges",require("./routes/colleges"));

app.listen(5000);
