// ===============================
// GLOBAL COURSE
// ===============================
let currentCourse = "General";


// ===============================
// OPEN FORM
// ===============================
function openForm(course){
    currentCourse = course || "General";

    const popup = document.getElementById("popup");
    const courseInput = document.getElementById("course");

    if(popup){
        popup.style.display = "flex";
    }

    if(courseInput){
        courseInput.value = currentCourse;
    }
}


// ===============================
// CLOSE FORM
// ===============================
function closeForm(){
    const popup = document.getElementById("popup");
    if(popup){
        popup.style.display = "none";
    }
}


// ===============================
// CLOSE POPUP ON OUTSIDE CLICK
// ===============================
window.addEventListener("click", function(e){
    const popup = document.getElementById("popup");
    if(e.target === popup){
        popup.style.display = "none";
    }
});


// ===============================
// IMAGE SLIDER (SAFE VERSION)
// ===============================
const slides = [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800"
];

let slideIndex = 0;

function startSlider(){
    const slideImage = document.getElementById("slideImage");

    // अगर image नहीं है तो slider run नहीं होगा (no error)
    if(!slideImage) return;

    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        slideImage.src = slides[slideIndex];
    }, 3000);
}


// ===============================
// FORM SUBMIT (SAFE)
// ===============================
function handleFormSubmit(){
    const form = document.getElementById("studentForm");

    if(!form) return; // दूसरे pages में error नहीं देगा

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name")?.value;
        const mobile = document.getElementById("mobile")?.value;
        const course = document.getElementById("course")?.value;
        const city = document.getElementById("city")?.value;

        // VALIDATION
        if(!name || !mobile){
            alert("Please fill all required fields");
            return;
        }

        if(mobile.length !== 10){
            alert("Enter valid 10 digit mobile number");
            return;
        }

        // DATA OBJECT
        const data = {
            name,
            mobile,
            course,
            city
        };

        console.log("Form Data:", data);

        // 👉 Backend connect ready (optional)
        /*
        fetch("http://localhost:5000/api/apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        */

        alert("Form Submitted Successfully ✅");

        form.reset();
        closeForm();
    });
}


// ===============================
// INIT (PAGE LOAD)
// ===============================
window.addEventListener("DOMContentLoaded", () => {
    startSlider();
    handleFormSubmit();
});


// ===============================
// GLOBAL ACCESS (IMPORTANT)
// ===============================
window.openForm = openForm;
window.closeForm = closeForm;
