const screen = window.innerWidth;
let menu = document.getElementById("menu");
let headerMenu = document.getElementById("header-menu");
let itemMenu = document.querySelectorAll(".item-menu");
let hero = document.querySelector(".hero");

let themeBtn = document.querySelector(".theme-icon");
let body = document.querySelector("body");
let sectionBg = document.querySelectorAll(".section-bg");

themeBtn.addEventListener('click', () => {
    if (themeBtn.value == "1") {
        themeBtn.value = "-1";
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        body.classList.toggle("dark-mode");

        sectionBg.forEach(item => {
            item.classList.toggle("dark-bg");
        })

        if (screen <= 768) {
            headerMenu.style.backgroundColor = "#242424";
        }
    } else {
        themeBtn.value = "1";
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`; 
        body.classList.remove("dark-mode");

        sectionBg.forEach(item => {
            item.classList.remove("dark-bg");
        })

        if (screen <= 768) {
            headerMenu.style.backgroundColor = "#ECE1C1";
        }
    }
})

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
        headerMenu.style.display = "none";
        themeBtn.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
});


