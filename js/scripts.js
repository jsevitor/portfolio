const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

let menu = document.getElementById("menu");
let headerMenu = document.getElementById("header-menu");
let itemMenu = document.querySelectorAll(".item-menu");
let hero = document.querySelector(".hero");

let themeBtn = document.querySelector(".theme-icon");
let body = document.querySelector("body");
let sectionBg = document.querySelectorAll(".section-bg");

if (isDarkMode) {
    setDarkMode();
} else {
    setLightMode();
}

function toggleTheme() {
    if (themeBtn.value == "1") {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setDarkMode() {
    themeBtn.value = "-1";
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    body.classList.add("dark-mode");

    sectionBg.forEach(item => {
        item.classList.add("dark-bg");
    });

    if (window.innerWidth <= 768) {
        headerMenu.style.backgroundColor = "#242424";
    }
}

function setLightMode() {
    themeBtn.value = "1";
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.classList.remove("dark-mode");

    sectionBg.forEach(item => {
        item.classList.remove("dark-bg");
    });

    if (window.innerWidth <= 768) {
        headerMenu.style.backgroundColor = "#ECE1C1";
    }
}

themeBtn.addEventListener('click', toggleTheme);

menu.addEventListener('click', () => {

    if (headerMenu.style.display == "flex") {
        headerMenu.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        themeBtn.style.display = "none";
    } else {
        headerMenu.style.display = "flex";
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        themeBtn.style.display = "block";
    }
})

hero.addEventListener('click', () => {
    headerMenu.style.display = "none";
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    themeBtn.style.display = "none";
})

itemMenu.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            headerMenu.style.display = "none";
            themeBtn.style.display = "none";
            menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        } else {
            headerMenu.style.display = "flex";
        }
    });
});