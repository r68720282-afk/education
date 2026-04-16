document.getElementById("form").onsubmit = async (e)=>{
  e.preventDefault();

  await fetch("http://localhost:5000/api/users",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value
    })
  });

  alert("Registered!");
};
