let currentCourse="";

const categories={
Medical:{
title:"Nursing Courses",
img:"https://source.unsplash.com/600x400/?nursing",
desc:"Top nursing courses.",
courses:["GNM","BSc Nursing","ANM"]
},

Pharmacy:{
title:"Pharmacy Courses",
img:"https://source.unsplash.com/600x400/?pharmacy",
desc:"Pharmacy programs.",
courses:["B.Pharmacy","D.Pharmacy"]
},

Engineering:{
title:"Engineering Courses",
img:"https://source.unsplash.com/600x400/?engineering",
desc:"Engineering courses.",
courses:["B.Tech","Diploma"]
},

Computer:{
title:"IT Courses",
img:"https://source.unsplash.com/600x400/?coding",
desc:"IT courses.",
courses:["BCA","MCA"]
},

Management:{
title:"Management Courses",
img:"https://source.unsplash.com/600x400/?business",
desc:"Business courses.",
courses:["MBA","BBA"]
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
}

function openForm(course){
document.getElementById("popup").style.display="block";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

/* FORM FIX */
document.getElementById("studentForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Form Submitted ✅");
});
