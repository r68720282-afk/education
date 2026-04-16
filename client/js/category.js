
fetch("http://localhost:5000/api/colleges")
.then(r=>r.json())
.then(d=>{
const t=new URLSearchParams(location.search).get("type");
document.getElementById("list").innerHTML=
d.filter(c=>c.category===t).map(c=>"<p>"+c.name+"</p>").join("");
});
