let currentCourse = "";

const categories = {
  Medical: {
    title: "Medical Colleges in MP",
    img: "https://images.unsplash.com/photo-1580281657527-47e9b6e33c61",
    desc: "Explore MBBS, BDS and top healthcare colleges with expert guidance."
  },

  Engineering: {
    title: "Engineering Colleges in MP",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    desc: "Find best engineering colleges with placements and labs."
  },

  Management: {
    title: "MBA Colleges",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc: "Top MBA colleges with internships and corporate exposure."
  },

  IT: {
    title: "IT & Computer Courses",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    desc: "Learn coding, software and IT skills from top institutes."
  },

  Arts: {
    title: "Arts Courses",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    desc: "Explore creative and humanities courses."
  },

  Pharmacy: {
    title: "Pharmacy Colleges",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    desc: "Top pharma colleges with labs and industry exposure."
  }
};

function openCategory(name){
  const data = categories[name];
  currentCourse = name;

  document.getElementById("categoryDetail").style.display = "block";
  document.getElementById("catTitle").innerText = data.title;
  document.getElementById("catImage").src = data.img;
  document.getElementById("catDesc").innerText = data.desc;

  // SEO update
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
    name: name.value,
    mobile: mobile.value,
    email: email.value,
    city: city.value,
    course: course.value
  };

  fetch("/api/users", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
  })
  .then(()=>alert("Form submitted ✅"));
});
