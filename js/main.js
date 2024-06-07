//*** Gestion de la navigation ***//

/**
 * 
 */
class Navigation {
    /**
     * 
     * @param {*} id 
     */
    constructor(id) {
        this.element = document.querySelector(`#${id}`);
        this.links = [...this.element.getElementsByTagName('a')];
        this.button = document.querySelector('.burger');
        this.pages = [...document.getElementsByClassName('page')].slice(1);

        this.button.addEventListener('click', this.extendMenu.bind(this));
        this.links.forEach(link => link.addEventListener('click', this.navigate.bind(this)));
        window.addEventListener('scroll', this.fadeInContents.bind(this));
        window.addEventListener('DOMContentLoaded', this.slideUpLinks.bind(this))
        window.addEventListener('scroll', this.slideUpLinks.bind(this));

    }

    /**
     * 
     * @param {PointerEvent} e 
     */
    navigate(e) {
        e.preventDefault();
        const page = e.currentTarget.dataset.page;
        const targetY = window.innerHeight * page;
        
        window.scrollTo({
            left: 0,
            top: targetY,
            behavior: "smooth"
        })
    }

    extendMenu(e) {

        /**
         * TODO: Traitement du burger
         */
    
        // Affichage du menu principal
        const menu = document.querySelector('.main_menu_links');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 1000 )
            
        } else {
            menu.style.display = 'flex';
            setTimeout(() => {
                menu.classList.add('active')
            }, 100 )

        }
        
        // setTimeout(() => {
        //     menu.classList.toggle('active')
        // }, 100 )
        // menu.classList.toggle('active');
            
    }

    fadeInContents(e) {
        this.pages.forEach(page => {
            const article = page.querySelector('article');
            const top = page.getBoundingClientRect().top;
            if (top / innerHeight * 100 < 75 && top + innerHeight > 0) {
                article.classList.add('visible')
            } else {
                article.classList.remove('visible')
            }
        })
    }

    slideUpLinks(e) {
        if (window.scrollY > window.innerHeight) {
            this.links.forEach(link => link.parentElement.classList.remove('active'))
    
        } else if (window.scrollY <= 50) {
            this.links.forEach(link => link.parentElement.classList.add('active'))
        } 
    }
}

const nav = new Navigation('main-nav');