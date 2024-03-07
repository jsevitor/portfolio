function switchMenu() {
    let nav_menu = document.getElementById("nav_menu");

    if (nav_menu.style.display == "flex") {
        nav_menu.style.display = "none";
    } else {
        nav_menu.style.display = "flex";
    }
}