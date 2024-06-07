const burgerBtn = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.main_menu_links li');


if (window.innerWidth > 768) {
    document.addEventListener('DOMContentLoaded', slideUpLinks);
    window.addEventListener('scroll', slideUpLinks)
} else {
    document.removeEventListener('DOMContentLoaded', slideUpLinks);
    window.removeEventListener('scroll', slideUpLinks)

}



burgerBtn.addEventListener('click', extendMenu);


function slideUpLinks(e) {
    console.log(window.innerWidth)
    if (window.scrollY > window.innerHeight) {
        menuLinks.forEach(ml => ml.classList.remove('active'))

    } else if (window.scrollY <= 50) {
        menuLinks.forEach(ml => ml.classList.add('active'))
    } 
}


function extendMenu(e) {
    /**
     * TODO: Traitement du burger
     */

    // Affichage du menu principal
    const menu = document.querySelector('.main_menu_links');
    menu.classList.toggle('active');
    menuLinks.forEach(menuLink => {
        setTimeout(() => {
            menuLink.classList.toggle('active')

        }, 750)
        
})}