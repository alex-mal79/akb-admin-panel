//================================================================
//Меню DropDown
//================================================================
export const dropDown = () => {
    const dropMenuButtons = document.querySelectorAll('[data-drop-btn]');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if(dropMenuButtons.length){
        for(let i = 0; i < dropMenuButtons.length; i++){
            let dropMenuButton = dropMenuButtons[i];
            dropMenuButton.addEventListener("click", function(e){
                let currentButton = e.currentTarget;
                let dropDownParent = currentButton.closest('[data-drop-parent]');

                function ScreenChange(e) {
                    if (e.matches) {
                        for(let i = 0; i < dropMenuButtons.length; i++){
                            let dropMenuButton = dropMenuButtons[i];
                            if(dropMenuButton !== currentButton){
                                dropMenuButton.closest('[data-drop-parent]').classList.remove('drop--active');
                            }
                        }
                    }
                }
                mediaQuery.addListener(ScreenChange);
                ScreenChange(mediaQuery);

                dropDownParent.classList.toggle('drop--active');
            });
        }
    }
}