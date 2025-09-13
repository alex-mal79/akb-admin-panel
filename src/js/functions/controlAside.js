//================================================================
// Кнопки управления боковой панелю
//================================================================
export const controlAside = () => {

    const header = document.querySelector('[data-header]');
    const aside = document.querySelector('[data-menu-body]');
    const iconMenu = document.querySelector('[data-icon-menu]');

    const hideAside = () =>{
        header.classList.add('aside--hide');
        aside.classList.add('aside--hide');
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
        if(sizeWindowWidth < 992 ){
            hideAside();
        }
        else{
            showAside();
        }
    }

    window.addEventListener('resize', () => {
        if(header){
            addStyleResizeWindow(window.innerWidth);
        }
    });


    // const btnNavResize = document.querySelector('[data-btn-nav-resize]');
    // const btnNavHide = document.querySelector('[data-btn-nav-hide]');
    // const pageWrapper  = document.querySelector('[data-page-wrapper]');
    // const iconMenu = document.querySelector('[data-icon-menu]');
    // const menuBody = document.querySelector('[data-menu-body]');
    // const aside = document.querySelector('[data-aside]');
    // if(btnNavResize && pageWrapper){
    //     btnNavResize.addEventListener("click", function(e){
    //         let currentButton = e.currentTarget;
    //         let currentButtonParent = currentButton.closest('[data-aside]');
    //         if(currentButtonParent){
    //             currentButtonParent.classList.toggle('aside--minimize');
    //             pageWrapper.classList.toggle('aside--extensive');
    //             setTimeout(() => { currentButtonParent.classList.toggle('aside--hover'); }, 100);
    //         }
    //     });

    // }
    // if(btnNavHide && pageWrapper){
    //     btnNavHide.addEventListener("click", function(e){
    //         let currentButton = e.currentTarget;
    //         let currentButtonParent = currentButton.closest('[data-aside]');
    //         menuBody.classList.toggle('aside--hide');
    //         if(currentButtonParent){
    //             currentButtonParent.classList.toggle('aside--hide');
    //             iconMenu.classList.toggle('aside--hide');
    //             if(aside.classList.contains('aside--minimize')){
    //                 aside.classList.remove('aside--minimize');
    //                 pageWrapper.classList.remove('aside--extensive');
    //             }
    //             if(aside.classList.contains('burger--active')){
    //                 aside.classList.remove('burger--active');
    //                 iconMenu.classList.remove('burger--active');
    //             }
    //         }
    //     });
    // }
    // if(window.innerWidth <= 992){
    //     iconMenu.classList.add('aside--hide');
    //     menuBody.classList.add('aside--hide');
    // }
    // window.addEventListener('resize', () => {
    //     if(window.innerWidth <= 992){
    //     iconMenu.classList.add('aside--hide');
    //     menuBody.classList.add('aside--hide');
    //     }
    //     else{
    //         iconMenu.classList.remove('aside--hide');
    //         menuBody.classList.remove('aside--hide');
    //     }
    // });
}