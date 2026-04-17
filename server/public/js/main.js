let currentCourse="";

const categories={
Medical:{title:"Nursing",desc:"Nursing courses",courses:["GNM","BSc Nursing"]},
Pharmacy:{title:"Pharmacy",desc:"Pharmacy courses",courses:["B.Pharmacy"]},
Engineering:{title:"Engineering",desc:"Engineering courses",courses:["B.Tech"]},
Computer:{title:"IT",desc:"IT courses",courses:["BCA"]},
Management:{title:"Management",desc:"Management courses",courses:["MBA"]}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("categoryDetail").style.display="block";
document.getElementById("catTitle").innerText=data.title;
document.getElementById("catDesc").innerText=data.desc;

document.getElementById("courseList").innerHTML=
data.courses.map(c=>`<div class="card" onclick="openForm('${c}')">${c}</div>`).join("");

window.scrollTo({top:500,behavior:"smooth"});
}

function openForm(course){
document.getElementById("popup").style.display="flex";
document.getElementById("course").value=course;
}

function closeForm(){
document.getElementById("popup").style.display="none";
}

/* HERO FORM */
document.getElementById("heroForm").addEventListener("submit",async(e)=>{
e.preventDefault();

const data={
name:hname.value,
mobile:hmobile.value,
course:hcourse.value
};

await fetch("http://localhost:5000/api/apply",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

alert("We will contact you soon!");
});

/* MAIN FORM */
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

/* SCROLL ANIMATION */
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("show");
}
});
});

document.querySelectorAll(".fade-in").forEach(el=>observer.observe(el));
