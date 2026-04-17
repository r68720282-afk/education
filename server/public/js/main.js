let currentCourse = "";

const categories = {
Medical:{
title:"Nursing Courses",
desc:"Choose best nursing programs.",
courses:["GNM","BSc Nursing","ANM"]
},

Pharmacy:{
title:"Pharmacy Courses",
desc:"Pharmacy programs.",
courses:["B.Pharmacy","D.Pharmacy"]
},

Engineering:{
title:"Engineering Courses",
desc:"Engineering programs.",
courses:["B.Tech","Diploma"]
},

Computer:{
title:"IT Courses",
desc:"Computer courses.",
courses:["BCA","MCA"]
},

Management:{
title:"Management Courses",
desc:"Business courses.",
courses:["MBA","BBA"]
}
};

function openCategory(name){
const data = categories[name];
currentCourse = name;

document.getElementById("categoryDetail").style.display="block";
document.getElementById("catTitle").innerText=data.title;
document.getElementById("catDesc").innerText=data.desc;

document.getElementById("courseList").innerHTML =
data.courses.map(c =>
`<div class="card" onclick="openForm('${c}')">${c}</div>`
).join("");
}

function openForm(course){
document.getElementById("popup").style.display="flex";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

document.getElementById("studentForm").addEventListener("submit", async function(e){
e.preventDefault();

const data={
name: name.value,
mobile: mobile.value,
email: email.value,
city: city.value,
course: course.value
};

const res = await fetch("http://localhost:5000/api/apply",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

const result = await res.json();

if(result.success){
alert("Form Submitted ✅");
closeForm();
}else{
alert("Error ❌");
}
});
