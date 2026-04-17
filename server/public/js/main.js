let currentCourse = "";

const categories = {

  Medical: {
    title: "Nursing & Paramedical Courses",
    img: "https://images.unsplash.com/photo-1580281657527-47e9b6e33c61",
    desc: "Explore nursing and paramedical courses for healthcare careers.",
    courses: [
      "GNM Nursing",
      "BSc Nursing",
      "ANM Nursing",
      "Lab Technician",
      "Radiology",
      "Physiotherapy"
    ]
  },

  Pharmacy: {
    title: "Pharmacy Courses",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Pharmacy courses with practical lab training.",
    courses: [
      "B.Pharmacy",
      "D.Pharmacy",
      "Clinical Pharmacy",
      "Pharma Research"
    ]
  },

  Engineering: {
    title: "Engineering Courses",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    desc: "Technical engineering programs with placement support.",
    courses: [
      "B.Tech",
      "Diploma Engineering",
      "Mechanical",
      "Civil",
      "Electrical"
    ]
  },

  Computer: {
    title: "Computer & IT Courses",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    desc: "IT and software development courses.",
    courses: [
      "BCA",
      "MCA",
      "Data Science",
      "Web Development",
      "Cyber Security"
    ]
  },

  Management: {
    title: "Management Courses",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc: "Business and management courses.",
    courses: [
      "MBA",
      "BBA",
      "Marketing",
      "Finance",
      "HR"
    ]
  },

  Design: {
    title: "Design Courses",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    desc: "Creative design courses.",
    courses: [
      "Graphic Design",
      "Fashion Design",
      "Interior Design"
    ]
  },

  Law: {
    title: "Law Courses",
    img: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1",
    desc: "Legal education programs.",
    courses: [
      "LLB",
      "BA LLB",
      "Corporate Law"
    ]
  },

  Agriculture: {
    title: "Agriculture Courses",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    desc: "Agriculture and farming related courses.",
    courses: [
      "BSc Agriculture",
      "Dairy Technology",
      "Food Technology"
    ]
  }

};

function openCategory(name){

  const data = categories[name];
  currentCourse = name;

  document.getElementById("categoryDetail").style.display = "block";

  document.getElementById("catTitle").innerText = data.title;
  document.getElementById("catImage").src = data.img;
  document.getElementById("catDesc").innerText = data.desc;

  const courseList = data.courses.map(course => `
    <div class="course-card" onclick="openForm('${course}')">
      ${course}
    </div>
  `).join("");

  document.getElementById("courseList").innerHTML = courseList;

  // SEO
  document.title = data.title;
  document.querySelector("meta[name='description']")
    .setAttribute("content", data.desc);
}

function openForm(course){
  document.getElementById("popup").style.display = "block";
  document.getElementById("course").value = course;
}

function closeForm(){
  document.getElementById("popup").style.display = "none";
}

document.getElementById("studentForm")
.addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    course: document.getElementById("course").value
  };

  fetch("/api/users", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  })
  .then(()=>alert("Form submitted ✅"));
});
