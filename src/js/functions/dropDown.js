//================================================================
//Меню DropDown
//================================================================
export const dropDown = () => {
    const dropBtns = Array.from(document.querySelectorAll('[data-drop-btn]'));

    if(dropBtns.length > 0){

        dropBtns.forEach((dropBtn) => {
            dropBtn.addEventListener("click", function(e){
                e.preventDefault();
                let countParent = countDropParent(dropBtn);

                // if(countParent == 1){
                    let i = 0;
                    while(i < dropBtns.length){
                        let dropBtn = dropBtns[i];
                        if(dropBtn.parentNode.closest('.drop--active')){
                            dropBtn.parentNode.classList.remove('drop--active');
                        }
                        if(dropBtn.nextElementSibling !== null){
                                dropBtn.nextElementSibling.classList.remove('drop--active');
                        }
                        i++;
                    }
                    dropBtn.parentNode.classList.add('drop--active');
                    if(dropBtn.nextElementSibling !== null){
                        dropBtn.nextElementSibling.classList.add('drop--active');
                    }
                // }
                // else{

                // }

                // let dropParent = e.target.closest('[data-drop-parent]');
                // let dropBtn = e.target.closest('[data-drop-btn]');
                // let dropBlock = e.currentTarget.nextElementSibling;
                // let dropParentChildren = dropParent.childNodes;

                // console.log("dropParentBtn = ", dropParent);
                // console.log("dropBtn = ", dropBtn);
                // console.log("dropBlock = ", dropBlock);
                // console.log("dropParentChildren = ", dropParentChildren);
                // console.log("allParent = ", dropParents);
            });
        });
        // Функция возврата количество радительских элементов с атрибутом data-drop-parent
        const countDropParent = (dropBtn) => {
            let parents = [];
            let countParent = 0;

            while(dropBtn.parentNode.closest('[data-drop-parent]') && dropBtn.parentNode.nodeName.toLowerCase() != 'body') {
                dropBtn = dropBtn.parentNode;
                parents.push(dropBtn);
            }

            console.log(parents);


            parents.forEach((parent) => {
                if(parent.hasAttribute('data-drop-parent')){
                    countParent++;
                }
            });

            return countParent;
        }

    }
}