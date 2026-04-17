let currentCourse="";

const categories={
Medical:{
title:"Nursing Courses",
desc:"Best nursing programs",
img:"https://images.unsplash.com/photo-1588776814546-ec7e0f0f9c1b?w=600",
courses:["GNM","BSc Nursing"]
},
Engineering:{
title:"Engineering Courses",
desc:"Top engineering programs",
img:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600",
courses:["B.Tech"]
},
Computer:{
title:"IT Courses",
desc:"IT programs",
img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
courses:["BCA"]
}
};

function openCategory(name){
const data=categories[name];
currentCourse=name;

document.getElementById("categoryDetail").style.display="block";

catTitle.innerText=data.title;
catDesc.innerText=data.desc;
catImage.src=data.img;

courseList.innerHTML=
data.courses.map(c=>`<span onclick="openForm('${c}')">${c}</span>`).join("");
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
