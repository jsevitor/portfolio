let menu = document.getElementById("menu");
let headerMenu = document.getElementById("header-menu");
let itemMenu = document.querySelectorAll(".item-menu");
let hero = document.querySelector(".hero");


menu.addEventListener('click', () => {
    
    if (headerMenu.style.display == "flex") {
        headerMenu.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    } else {
        headerMenu.style.display = "flex";
        menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
})

hero.addEventListener('click', () => {
    headerMenu.style.display = "none";
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
})

itemMenu.forEach(item => {
    item.addEventListener('click', () => {
        headerMenu.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });
});


