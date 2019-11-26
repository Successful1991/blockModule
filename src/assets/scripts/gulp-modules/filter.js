let filterCategory = [];
let filterAllElements = [];
// let filterElements = [];
(function () {
    $('.js-filter').on('click', filterAddCategory);
    $('.js-works-filter__remove').on('click', filterRemove);
    addFilter('.js-filter__category');
    paginationInit({wrap: '.news__pagination',dots: true,dotsAmount: 3,dotsLast: true,arrow: true,extremeArrow: true, elementInPage: 8});
    // checkedPage(1);
})();

function addFilter(clas){
    $(clas).map((i,el) => {
        filterAllElements.push({
            category: el.dataset.category,
            data: el
        });
        filterElements.push(el);
    });

}
function filterAddCategory(e) {
    var elem = $(e.target);
    var active = elem.closest('.works-filter__elem');
    var close = elem.closest('.js-works-filter__remove');
    if( !active.hasClass('active') && close.length === 0 ){
        elem.addClass('active');
        filterCategory.push( elem.data('category') );
    }
    filter(filterAllElements);
}
function filterRemove() {
    var elem =  $(this).closest('.works-filter__elem'),
    category = elem.data('category'),
    index = filterCategory.indexOf(category);
    elem.removeClass('active');
    filterCategory.splice(index,1);
    filter(filterAllElements);
}

function filter(element) {
    filterElements = [];
    element.map(function (cat) {
        if(filterCategory.length > 0) {
            $(cat.data).hide();
            if( filterCategory.includes(cat.category) ){
                $(cat.data).show();
                filterElements.push(cat.data);
            } else {
                $(cat.data).hide();
            }
        } else {
            $(cat.data).show();
        }
    });
    checkedPage(1);
}


