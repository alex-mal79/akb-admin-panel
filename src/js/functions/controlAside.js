//================================================================
// Кнопки управления боковой панелю
//================================================================
export const controlAside = () => {
    const btnResizeNav = document.querySelector('[data-btn-resize-nav]');
    const pageWrapper  = document.querySelector('[data-page-wrapper]');
    if(btnResizeNav && pageWrapper){
        btnResizeNav.addEventListener("click", function(e){
            let currentButton = e.currentTarget;
            let currentButtonParent = currentButton.closest('[data-aside]');
            if(currentButtonParent){
                currentButtonParent.classList.toggle('aside--minimize');
                pageWrapper.classList.toggle('aside--extensive');
                setTimeout(() => { currentButtonParent.classList.toggle('aside--hover'); }, 100);
            }
        });

    }
}