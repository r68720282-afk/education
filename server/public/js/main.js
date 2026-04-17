let currentCourse="";

const categories={
Medical:{title:"Nursing Courses",desc:"Best nursing courses",courses:["GNM","BSc Nursing"]},
Pharmacy:{title:"Pharmacy Courses",desc:"Pharmacy programs",courses:["B.Pharmacy"]},
Engineering:{title:"Engineering Courses",desc:"Engineering programs",courses:["B.Tech"]},
Computer:{title:"IT Courses",desc:"IT programs",courses:["BCA"]},
Management:{title:"Management Courses",desc:"Business programs",courses:["MBA"]}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("categoryDetail").style.display="block";
document.getElementById("catTitle").innerText=data.title;
document.getElementById("catDesc").innerText=data.desc;

document.getElementById("courseList").innerHTML=
data.courses.map(c=>`<div onclick="openForm('${c}')">${c}</div>`).join("");

window.scrollTo({top:600,behavior:"smooth"});
}

function openForm(course){
document.getElementById("popup").style.display="flex";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

window.openCategory=openCategory;
window.openForm=openForm;
window.closeForm=closeForm;

/* FORM SUBMIT */
document.getElementById("studentForm").addEventListener("submit",async(e)=>{
e.preventDefault();

const data={
name:name.value,
mobile:mobile.value,
email:email.value,
city:city.value,
course:course.value
};

await fetch("http://localhost:5000/api/apply",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

alert("Form Submitted ✅");
closeForm();
});
