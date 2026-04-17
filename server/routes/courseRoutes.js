const express = require("express");
const router = express.Router();
const Course = require("../models/Course");


// ✅ GET course by slug (MAIN SEO PAGE)
router.get("/:slug", async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });

    if (!course) {
      return res.send("Course not found");
    }

    // 🔥 Dynamic HTML render
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${course.title}</title>
        <meta name="description" content="${course.description}">
      </head>

      <body style="font-family: Arial; padding:20px;">

        <h1>${course.title}</h1>

        <div>
          ${course.content}
        </div>

        <hr>

        <h2>Apply Now</h2>

        <form method="POST" action="/api/leads">
          <input name="name" placeholder="Name" required><br><br>
          <input name="mobile" placeholder="Mobile" required><br><br>
          <input type="hidden" name="course" value="${course.title}">
          <button type="submit">Submit</button>
        </form>

      </body>
      </html>
    `);

  } catch (err) {
    res.send("Server Error");
  }
});


// ✅ ADMIN: Add course
router.post("/add", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ ADMIN: Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
