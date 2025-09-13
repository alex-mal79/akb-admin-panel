//================================================================
//Меню бургер
//================================================================
export const burger = () => {
    const iconMenu = document.querySelector('[data-icon-menu]');
    const menuBody = document.querySelector('[data-menu-body]');
    if (iconMenu) {
        iconMenu.addEventListener("click", function(e){
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('burger--active');
            menuBody.classList.toggle('burger--active');

        });
    }
}