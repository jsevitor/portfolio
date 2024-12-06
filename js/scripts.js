document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById("menu");
    let headerMenu = document.getElementById("header-menu");
    let itemMenu = document.querySelectorAll(".menu-item"); // Corrigido
    let hero = document.querySelector(".hero-container");

    // Função para alternar o menu de navegação no mobile
    menu.addEventListener('click', () => {
        console.log('Menu clicked');
        if (headerMenu.style.display == "flex") {
            headerMenu.style.display = "none";
            menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        } else {
            headerMenu.style.display = "flex";
            menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }
    });

    // Fecha o menu ao clicar no "hero"
    hero.addEventListener('click', () => {
        headerMenu.style.display = "none";
        menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    });

    // Fecha o menu ao clicar em qualquer item do menu
    itemMenu.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                headerMenu.style.display = "none";
                menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            } else {
                headerMenu.style.display = "flex";
            }
        });
    });
});
