function toggleMenu(){
    const Menu = document.querySelector(".Menu-links"); /*we are targeting Menu-links on HTML-5 line 40*/
    const icon = document.querySelector(".Menu-icon");
    Menu.classList.toggle("open");
    icon.classList.toggle("open");

}