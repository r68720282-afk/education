const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,          // B.Tech Admission
  slug: String,           // btech-admission-mp
  description: String,    // SEO description
  content: String,        // full HTML content
  keywords: String        // SEO keywords
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
