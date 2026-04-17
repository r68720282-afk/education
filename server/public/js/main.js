/* ===============================
🎯 POPUP CONTROL
================================= */

function openForm(courseName = "General") {
const popup = document.getElementById("popup");
popup.style.display = "flex";

// course auto select
if (courseName) {
const courseField = document.getElementById("course");
if (courseField) courseField.value = courseName;
}
}

function closeForm() {
document.getElementById("popup").style.display = "none";
}

/* ===============================
🧠 FORM SUBMIT (API CONNECT)
================================= */

const form = document.getElementById("studentForm");

if (form) {
form.addEventListener("submit", async function (e) {
e.preventDefault();

```
const data = {
  name: document.getElementById("name").value,
  mobile: document.getElementById("mobile").value,
  course: document.getElementById("course").value,
  city: document.getElementById("city").value
};

try {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();

  if (result.success) {
    alert("✅ Form Submitted Successfully!");

    // optional WhatsApp redirect
    const msg = `Name: ${data.name}%0ACourse: ${data.course}%0ACity: ${data.city}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);

    form.reset();
    closeForm();
  } else {
    alert("❌ Something went wrong");
  }

} catch (error) {
  console.error(error);
  alert("❌ Server error");
}
```

});
}

/* ===============================
🖼️ IMAGE SLIDER
================================= */

const images = [
"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800"
];

let index = 0;
const slideImage = document.getElementById("slideImage");

if (slideImage) {
setInterval(() => {
index = (index + 1) % images.length;
slideImage.src = images[index];
}, 3000);
}

/* ===============================
🔥 CLICK OUTSIDE POPUP CLOSE
================================= */

window.addEventListener("click", function (e) {
const popup = document.getElementById("popup");

if (e.target === popup) {
closeForm();
}
});

/* ===============================
🎯 SIMPLE SCROLL EFFECT
================================= */

window.addEventListener("scroll", () => {
const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {
navbar.style.background = "#000";
} else {
navbar.style.background = "#020617";
}
});
