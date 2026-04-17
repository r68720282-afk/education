let currentCourse = "";

const categories = {
  Medical: {
    title: "Medical Colleges",
    img: "https://images.unsplash.com/photo-1580281657527-47e9b6e33c61",
    desc: "Top MBBS and healthcare colleges"
  },
  Engineering: {
    title: "Engineering Colleges",
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    desc: "Best engineering colleges with placements"
  },
  Management: {
    title: "MBA Colleges",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    desc: "Top business schools"
  }
};

function openCategory(name){
  const data = categories[name];
  currentCourse = name;

  document.getElementById("categoryDetail").style.display = "block";
  document.getElementById("catTitle").innerText = data.title;
  document.getElementById("catImage").src = data.img;
  document.getElementById("catDesc").innerText = data.desc;
}

function openForm(course){
  document.getElementById("popup").style.display = "block";
  document.getElementById("course").value = course;
}

function closeForm(){
  document.getElementById("popup").style.display = "none";
}

/* FORM SUBMIT (IMPORTANT) */
const form = document.getElementById("studentForm");

if(form){
form.addEventListener("submit", function(e){
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
  .then(()=>alert("Submitted ✅"));
});
}
