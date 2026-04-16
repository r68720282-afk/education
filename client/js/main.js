function goCategory(type){
  window.location.href = "category.html?type=" + type;
}

function searchCollege(){
  const q = document.getElementById("search").value;
  window.location.href = "category.html?search=" + q;
}
