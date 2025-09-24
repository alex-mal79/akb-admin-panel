const filterBtn = document.querySelector('[data-filter-btn-hide]');
    if(filterBtn){
        filterBtn.addEventListener("click", function(e){
            filterBtn.classList.toggle('search--active');
            document.querySelector('[data-filter-block-search]').classList.toggle('search--active');
        });
    }