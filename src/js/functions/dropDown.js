//================================================================
//Меню DropDown
//================================================================
export const dropDown = () => {

    const navBtns = Array.from(document.querySelectorAll('[data-nav-btn]'));
    const dropBtns = Array.from(document.querySelectorAll('[data-drop-btn]'));

    if(dropBtns.length > 0){
        dropBtns.forEach((dropBtn) => {
            dropBtn.addEventListener("click", function(e){
                e.preventDefault();
                showItem(dropBtns, dropBtn);
            });
        });
    }

    if(navBtns.length > 0){
        navBtns.forEach((navBtn) => {
            navBtn.addEventListener("click", function(e){
                e.preventDefault();
                showItem(navBtns, navBtn);
            });
        });
    }

    const showItem = (clickBtns, clickBtn) => {
        let i = 0;
        while(i < clickBtns.length){
            let clickBtn = clickBtns[i];
            if(clickBtn.parentNode.closest('.drop--active')){
                clickBtn.parentNode.classList.remove('drop--active');
            }
            if(clickBtn.nextElementSibling !== null){
                    clickBtn.nextElementSibling.classList.remove('drop--active');
            }
            i++;
        }
        clickBtn.parentNode.classList.add('drop--active');
        if(clickBtn.nextElementSibling !== null){
            clickBtn.nextElementSibling.classList.add('drop--active');
        }
    }
}