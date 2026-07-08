const hero = document.querySelector(".hero");

const images = [
    "../images/hero1.jpg",
    "../images/hero2.jpg",
    "../images/hero3.jpg"
];

let currentImage = 0;

setInterval(() => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    hero.style.backgroundImage = `url('${images[currentImage]}')`;
       

}, 2000);
// ===========================
// DARK MODE
// ===========================

// ===========================
// DARK MODE
// ===========================

const themeButton = document.getElementById("themeToggle");

// Previous theme load
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}

// Toggle Theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeButton.textContent = "🌙";

    }

});
const menuToggle=document.getElementById("menuToggle");

const nav=document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuToggle.innerHTML="✖";

    }else{

        menuToggle.innerHTML="☰";

    }

});
document.addEventListener("click",(e)=>{

if(!nav.contains(e.target) && !menuToggle.contains(e.target)){

nav.classList.remove("active");

menuToggle.innerHTML="☰";

}

});
document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuToggle.innerHTML="☰";

    });

});