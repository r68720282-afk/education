let currentCourse="";

const categories={
Medical:{
title:"Nursing & Paramedical Courses",
img:"https://images.unsplash.com/photo-1580281657527-47e9b6e33c61",
desc:"Top nursing and paramedical courses with practical training.",
courses:["GNM","BSc Nursing","ANM","Lab Technician","Radiology"]
},

Pharmacy:{
title:"Pharmacy Courses",
img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
desc:"Pharmacy courses with lab exposure.",
courses:["B.Pharmacy","D.Pharmacy","Clinical Pharmacy"]
},

Engineering:{
title:"Engineering Courses",
img:"https://images.unsplash.com/photo-1581092335397-9583eb92d232",
desc:"Technical engineering courses with placements.",
courses:["B.Tech","Diploma","Civil","Mechanical"]
},

Computer:{
title:"Computer & IT Courses",
img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c",
desc:"Software and IT courses.",
courses:["BCA","MCA","Data Science","Web Development"]
},

Management:{
title:"Management Courses",
img:"https://images.unsplash.com/photo-1552664730-d307ca884978",
desc:"Business and management courses.",
courses:["MBA","BBA","HR","Marketing"]
},

Design:{
title:"Design Courses",
img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7",
desc:"Creative design courses.",
courses:["Graphic Design","Fashion Design"]
},

Law:{
title:"Law Courses",
img:"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1",
desc:"Legal education programs.",
courses:["LLB","BA LLB"]
},

Agriculture:{
title:"Agriculture Courses",
img:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
desc:"Agriculture and farming courses.",
courses:["BSc Agriculture","Dairy Technology"]
}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("categoryDetail").style.display="block";
document.getElementById("catTitle").innerText=data.title;
document.getElementById("catImage").src=data.img;
document.getElementById("catDesc").innerText=data.desc;

document.getElementById("courseList").innerHTML=
data.courses.map(c=>`<div class="course-card" onclick="openForm('${c}')">${c}</div>`).join("");

// SEO update
document.title=data.title;
document.querySelector("meta[name='description']").setAttribute("content",data.desc);
}

function openForm(course){
document.getElementById("popup").style.display="block";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

document.getElementById("studentForm").addEventListener("submit",function(e){
e.preventDefault();

fetch("/api/users",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:name.value,
mobile:mobile.value,
email:email.value,
city:city.value,
course:course.value
})
}).then(()=>alert("Submitted ✅"));
});
