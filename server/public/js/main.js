let currentCourse="";

const categories={
Medical:{
title:"Nursing & Paramedical Courses in MP",
img:"https://images.unsplash.com/photo-1576765608866-5b51046452be",
desc:"Top nursing and paramedical colleges in MP.",
courses:["GNM","BSc Nursing","ANM","Radiology","Lab Technician"]
},

Pharmacy:{
title:"Pharmacy Courses in MP",
img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
desc:"Top pharmacy colleges.",
courses:["B.Pharmacy","D.Pharmacy","Clinical Pharmacy"]
},

Engineering:{
title:"Engineering Colleges in MP",
img:"https://images.unsplash.com/photo-1581091012184-5c1d4b0d4b7f",
desc:"Best engineering colleges with placements.",
courses:["B.Tech","Diploma","Civil","Mechanical"]
},

Computer:{
title:"IT & Computer Courses",
img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
desc:"Best IT courses.",
courses:["BCA","MCA","Data Science","Web Development"]
},

Management:{
title:"MBA & Management Courses",
img:"https://images.unsplash.com/photo-1552664730-d307ca884978",
desc:"Top MBA colleges.",
courses:["MBA","BBA","HR","Marketing"]
},

Design:{
title:"Design Courses",
img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7",
desc:"Creative courses.",
courses:["Graphic Design","Fashion Design"]
},

Law:{
title:"Law Courses",
img:"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1",
desc:"Top law colleges.",
courses:["LLB","BA LLB"]
},

Agriculture:{
title:"Agriculture Courses",
img:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
desc:"Agriculture education.",
courses:["BSc Agriculture","Dairy Tech"]
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

document.title=data.title;
document.querySelector("meta[name='description']").setAttribute("content",data.desc);

window.scrollTo({top:600,behavior:"smooth"});
}

function openForm(course){
document.getElementById("popup").style.display="block";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

const form=document.getElementById("studentForm");

if(form){
form.addEventListener("submit",function(e){
e.preventDefault();

fetch("/api/users",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:document.getElementById("name").value,
mobile:document.getElementById("mobile").value,
email:document.getElementById("email").value,
city:document.getElementById("city").value,
course:document.getElementById("course").value
})
})
.then(()=>{
alert("Submitted Successfully ✅");
form.reset();
closeForm();
})
.catch(()=>alert("Error ❌"));
});
}
