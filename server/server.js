const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());

// 🔥 STATIC FILES SERVE
app.use(express.static(path.join(__dirname, "public")));

// API ROUTES
app.use("/api/users", require("./routes/users"));
app.use("/api/visitors", require("./routes/visitors"));

// 🔥 ROOT FIX (IMPORTANT)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log("DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
