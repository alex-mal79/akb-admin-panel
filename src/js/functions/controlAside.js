//================================================================
// Кнопки управления боковой панелю
//================================================================
export const controlAside = () => {

    const header = document.querySelector('[data-header]');
    const aside = document.querySelector('[data-menu-body]');
    const iconMenu = document.querySelector('[data-icon-menu]');
    const btnNavHide = document.querySelector('[data-btn-nav-hide]');
    const btnNavResize = document.querySelector('[data-btn-nav-resize]');
    const pageContant  = document.querySelector('[data-page-contant]');

    if(btnNavHide){
        btnNavHide.addEventListener("click", function(e){
        aside.classList.contains('burger--active') ? showAside() : hideAside();
        });
    }

    if(btnNavResize){
        btnNavResize.addEventListener("click", function(e){
            asideMinimize();
        });
    }

    const asideMinimize = () => {
        if(pageContant.classList.contains('aside--extensive')){
            pageContant.classList.remove('aside--extensive');
            aside.classList.remove('aside--minimize');
            aside.classList.remove('aside--hover');
            localStorage.removeItem('asideStatus', "asideMinimize");
        }
        else{
            pageContant.classList.add('aside--extensive');
            aside.classList.add('aside--minimize');
            setTimeout(() => { aside.classList.add('aside--hover'); }, 200);
            localStorage.setItem('asideStatus', "asideMinimize");
        }
    }

    const hideAside = () => {
        header.classList.add('aside--hide');
        aside.classList.add('aside--hide');
         if(pageContant.classList.contains('aside--extensive')){
            pageContant.classList.remove('aside--extensive');
            aside.classList.remove('aside--minimize');
            aside.classList.remove('aside--hover');
        }
        localStorage.setItem('asideStatus', "asideHide");
    }
    const showAside = () => {
        header.classList.remove('aside--hide');
        aside.classList.remove('aside--hide');
        if(aside.classList.contains('burger--active')){
            aside.classList.remove('burger--active');
            iconMenu.classList.remove('burger--active');
        }
        localStorage.removeItem('asideStatus');
    }

    const addStyleResizeWindow = (sizeWindowWidth) => {
        sizeWindowWidth < 992 ? hideAside() : showAside();
    }

    window.addEventListener('resize', () => {
        if(header){
            addStyleResizeWindow(window.innerWidth);
        }
    });

    const getStatusAside = () => {
        if((localStorage.getItem('asideStatus')) !== null){
            localStorage.getItem('asideStatus') === 'asideMinimize' ? asideMinimize() : hideAside();
        }
    }
    getStatusAside();

    //===================//

    const navBtns = Array.from(document.querySelectorAll('[data-nav-btn]'));
        console.log(navBtns);

    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", showItemsNav)
        console.log(navBtn);

    });

    function showItemsNav(e){
        e.preventDefault();
        let currentNavBtn = e.target.closest('[data-nav-btnw]');
        let currentNavBtn2 = e.currentTarget.nextElementSibling;
        console.log(currentNavBtn);
        console.log(currentNavBtn2);
    }
}