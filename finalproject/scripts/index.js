// Toggle Hamburger Menu
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.classList.add("responsive");
    } else {
        x.className = "topnav";
    }
}

// Last Modified Date
let lastMod = new Date(document.lastModified);
let currentCopy = new Date().getFullYear();

let modifiedDate = document.querySelector(".last-modified");
modifiedDate.innerHTML = lastMod.toLocaleString();

// Smoothies animation
const ctaEl = document.getElementById("cta");
const bSmoothieEl = document.getElementById("blue-smoothie");
const oSmoothieEl = document.getElementById("orange-smoothie");

ctaEl.addEventListener('mouseenter', () => {
    bSmoothieEl.classList.add("bounce-blue");
    setTimeout(() => {
        oSmoothieEl.classList.add("bounce-orange")
    }, 500);
});

ctaEl.addEventListener('mouseleave', () => {
    bSmoothieEl.classList.remove("bounce-blue");
    oSmoothieEl.classList.remove("bounce-orange");
});