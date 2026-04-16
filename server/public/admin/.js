// DASHBOARD DATA
if(document.getElementById("studentsCount")){
  fetch("/api/users")
  .then(res => res.json())
  .then(data => {
    document.getElementById("studentsCount").innerText = data.length;
  });

  fetch("/api/visitors")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitorsCount").innerText = data.length;
  });
}

// STUDENTS DATA
if(document.getElementById("data")){
  fetch("/api/users")
  .then(res => res.json())
  .then(data => {
    window.allData = data;
    render(data);
  });
}

function render(data){
  document.getElementById("data").innerHTML =
    data.map(u => `
      <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.course}</td>
        <td>${u.city}</td>
      </tr>
    `).join("");
}

// SEARCH
function searchData(){
  const val = document.getElementById("search").value.toLowerCase();
  const filtered = window.allData.filter(u =>
    u.name.toLowerCase().includes(val)
  );
  render(filtered);
}

// VISITORS DATA
if(document.getElementById("visitorData")){
  fetch("/api/visitors")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitorData").innerHTML =
      data.map(v => `
        <tr>
          <td>${v.ip}</td>
          <td>${v.device || "Unknown"}</td>
        </tr>
      `).join("");
  });
}
