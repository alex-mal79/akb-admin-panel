//================================================================
//Меню DropDown
//================================================================
export const dropDown = () => {
//     const dropMenuButtons = document.querySelectorAll('[data-drop-btn]');
//     const mediaQuery = window.matchMedia('(min-width: 768px)');
//     if(dropMenuButtons.length){
//         for(let i = 0; i < dropMenuButtons.length; i++){
//             let dropMenuButton = dropMenuButtons[i];
//             dropMenuButton.addEventListener("click", function(e){
//                 let currentButton = e.currentTarget;
//                 let dropDownParent = currentButton.closest('[data-drop-parent]');

//                 function ScreenChange(e) {
//                     if (e.matches) {
//                         for(let i = 0; i < dropMenuButtons.length; i++){
//                             let dropMenuButton = dropMenuButtons[i];
//                             if(dropMenuButton !== currentButton){
//                                 dropMenuButton.closest('[data-drop-parent]').classList.remove('drop--active');
//                             }
//                         }
//                     }
//                 }
//                 mediaQuery.addListener(ScreenChange);
//                 ScreenChange(mediaQuery);

//                 dropDownParent.classList.toggle('drop--active');
//             });
//         }
//     }

    const navBtns = Array.from(document.querySelectorAll('[data-drop-btn]'));

    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", function(e){
            e.preventDefault();

            let dropParent = e.target.closest('[data-drop-parent]');
            let dropBtn = e.target.closest('[data-drop-btn]');
            let dropBlock = e.currentTarget.nextElementSibling;
            let dropParentChildren = dropParent.childNodes;

            let dropParents = document.querySelectorAll('[data-drop-parent]');

            console.log("dropParentBtn = ", dropParent);
            console.log("dropBtn = ", dropBtn);
            console.log("dropBlock = ", dropBlock);
            console.log("dropParentChildren = ", dropParentChildren);

            console.log("allParent = ", dropParents);
        });
    });

        // function showItemsNav(e){

        //     console.log("navBtn", navBtn);
        //     e.preventDefault();
        //     let currentBtn = e.target.closest('[data-drop-btn]');
        //     let currentParent = e.target.closest('[data-drop-parent]');
        //     let currentElementSibling = e.currentTarget.nextElementSibling;
        //     console.log("currentBtn", currentBtn);
        //     console.log("currentParent", currentParent);
        //     console.log("currentElementSibling", currentElementSibling);
        // }


}