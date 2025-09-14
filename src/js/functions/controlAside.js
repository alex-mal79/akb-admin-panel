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
            pageContant.classList.toggle('aside--extensive');
            aside.classList.toggle('aside--minimize');
            setTimeout(() => { aside.classList.toggle('aside--hover'); }, 100);
        });
    }

    const hideAside = () =>{
        header.classList.add('aside--hide');
        aside.classList.add('aside--hide');
         if(pageContant.classList.contains('aside--extensive')){
            pageContant.classList.remove('aside--extensive');
            aside.classList.remove('aside--minimize');
            aside.classList.remove('aside--hover');
        }
    }
    const showAside = () =>{
        header.classList.remove('aside--hide');
        aside.classList.remove('aside--hide');
        if(aside.classList.contains('burger--active')){
            aside.classList.remove('burger--active');
            iconMenu.classList.remove('burger--active');
        }
    }

    const addStyleResizeWindow = (sizeWindowWidth) => {
        sizeWindowWidth < 992 ? hideAside() : showAside();
    }

    window.addEventListener('resize', () => {
        if(header){
            addStyleResizeWindow(window.innerWidth);
        }
    });
}