/* ===============================
✅ GLOBAL FUNCTIONS FIX
================================= */

window.openForm = function(courseName = "General") {
const popup = document.getElementById("popup");
if (popup) {
popup.style.display = "flex";
}

const courseField = document.getElementById("course");
if (courseField) {
courseField.value = courseName;
}
};

window.closeForm = function() {
const popup = document.getElementById("popup");
if (popup) {
popup.style.display = "none";
}
};

/* ===============================
✅ AFTER LOAD
================================= */

document.addEventListener("DOMContentLoaded", function () {

// FORM SUBMIT
const form = document.getElementById("studentForm");

if (form) {
form.addEventListener("submit", async function (e) {
e.preventDefault();

```
  const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    course: document.getElementById("course").value,
    city: document.getElementById("city")?.value || ""
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
      form.reset();
      window.closeForm();
    } else {
      alert("❌ Submission Failed");
    }

  } catch (err) {
    console.error(err);
    alert("❌ Server Error");
  }
});
```

}

// IMAGE SLIDER
const images = [
"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
"https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800"
];

let i = 0;
const slideImage = document.getElementById("slideImage");

if (slideImage) {
setInterval(() => {
i = (i + 1) % images.length;
slideImage.src = images[i];
}, 3000);
}

// CLICK OUTSIDE POPUP CLOSE
window.addEventListener("click", function (e) {
const popup = document.getElementById("popup");
if (e.target === popup) {
window.closeForm();
}
});

});
