fetch("http://localhost:5000/api/colleges")
.then(res => res.json())
.then(data => {

  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const search = params.get("search");

  let filtered = data;

  if(type){
    filtered = data.filter(c => c.category === type);
  }

  if(search){
    filtered = data.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  let output = "";

  filtered.forEach(c => {
    output += `
      <div class="card">
        <h3>${c.name}</h3>
      </div>
    `;
  });

  document.getElementById("list").innerHTML = output;
});
