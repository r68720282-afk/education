let currentCourse="";

const categories={
Medical:{title:"Medical Courses",desc:"Best medical courses",courses:["MBBS","GNM","ANM"]},
Engineering:{title:"Engineering Courses",desc:"Top engineering courses",courses:["B.Tech","Diploma"]},
Computer:{title:"IT Courses",desc:"Computer courses",courses:["BCA","MCA"]},
Management:{title:"Management Courses",desc:"Business courses",courses:["MBA","BBA"]},
Pharmacy:{title:"Pharmacy Courses",desc:"Pharmacy programs",courses:["B.Pharm"]},
Law:{title:"Law Courses",desc:"Legal studies",courses:["LLB"]}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("courseSection").style.display="block";

catTitle.innerText=data.title;
catDesc.innerText=data.desc;

courseList.innerHTML=
data.courses.map(c=>`<div onclick="openForm('${c}')">${c}</div>`).join("");
}

function openForm(course){
popup.style.display="flex";
document.getElementById("course").value=course;
}

function closeForm(){
popup.style.display="none";
}

window.openCategory=openCategory;
window.openForm=openForm;
window.closeForm=closeForm;
