let currentCourse="";

const categories={
Medical:{title:"Medical Courses",desc:"MBBS, Nursing, ANM",courses:["MBBS","GNM","ANM"]},
Engineering:{title:"Engineering Courses",desc:"B.Tech, Diploma",courses:["B.Tech","Diploma"]},
Computer:{title:"IT Courses",desc:"BCA, MCA",courses:["BCA","MCA"]},
Management:{title:"Management Courses",desc:"MBA, BBA",courses:["MBA","BBA"]},
Pharmacy:{title:"Pharmacy Courses",desc:"B.Pharm",courses:["B.Pharm"]},
Law:{title:"Law Courses",desc:"LLB",courses:["LLB"]}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("courseSection").style.display="block";

document.getElementById("catTitle").innerText=data.title;
document.getElementById("catDesc").innerText=data.desc;

document.getElementById("courseList").innerHTML=
data.courses.map(c=>`<div onclick="openForm('${c}')">${c}</div>`).join("");
}

function openForm(course){
document.getElementById("popup").style.display="flex";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

/* GLOBAL FIX */
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
course:course.value
};

await fetch("http://localhost:5000/api/apply",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

alert("Submitted Successfully");
closeForm();
});
