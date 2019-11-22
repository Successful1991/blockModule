let dotsAmount = 0;
(function () {
    $('.js-pagination').on('click', function (e) {
        e.target.dataset.page ? checkedPage(e.target.dataset.page) : checkedPage($(e.target).closest('.pagination__arrow').data('page'));
    });
    paginationInit({
        wrap: '.news__pagination',
        dots: true,
        dotsAmount: 3,
        dotsLast: true,
        arrow: true,
        extremeArrow: true
    });
})();

function paginationInit(conf) {
    var defaults = {
        wrap: conf.wrap||'.pagination',
        clickClass : 'js-pagination',
        dots: true,
        dotsAmount: 3,
        dotsLast: true,
        arrow: true,
        extremeArrow: true
    };
    dotsAmount = defaults.dotsAmount;

    if(defaults.dots) {
        $(defaults.wrap).append(createDots(defaults.dotsAmount,defaults.dotsLast ) );
    }

    if(defaults.arrow) {
        $(defaults.wrap).prepend(createArrow(['pagination__arrow--left','disabled'], "prev", 1));
        $(defaults.wrap).append(createArrow(['pagination__arrow--right'], "next", 1));
    }

    if(defaults.extremeArrow) {
        $(defaults.wrap).prepend(createArrow(['pagination__arrow--left','disabled'], "first", 2));
        $(defaults.wrap).append(createArrow(['pagination__arrow--right'], "last", 2));
    }
}

function createDots(amount) {
    var el = document.createElement('ul');
    el.className = 'dots';
    for (let i = 1; i <= amount; i++){
        el.append(createDot(i, i));
    }
    return el
}

function createArrow(clas, data, type){
    let icon = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99999 12.0001L7 11.0001L1.99992 6.00002L6.99993 1.00001L5.99993 -4.37146e-08L-0.000110412 6.00004L0.999896 7.00004L0.999913 7.00003L5.99999 12.0001Z"/> </svg>';
    var el = document.createElement('div');
    el.className = 'pagination__arrow '+ clas.join(' ');
    el.dataset.page = data;
    type === 1 ? el.innerHTML = icon : el.innerHTML = icon + icon;
    return el
}

function createDot(index, data){
    var el = document.createElement('li');
    index !== 1 ? el.className = 'dots__element' : el.className = 'dots__element active';
    el.dataset.page = data;
    el.innerHTML = data;
    return el
}

var elementInPage = 8;
var currentPage = 1;
function pagination(page) {
    filterElements.map(function (el, i) {
       if(i+1 > page * elementInPage - elementInPage && i+1 <= page * elementInPage) {
            $(el).show();
       } else {
           $(el).hide();
       }
    });

}

function checkedPage(pages) {
    var page = {
        last: Math.ceil(filterElements.length/elementInPage),
        current: pages,
    };
    hideDots(page);
    changePage(page);
}

function hideDots(page) {
    $('.dots__element').map(function(i, elem){
        $(elem).show();
        if(i >= page.last) {
            $(elem).hide();
        }
    });
}

function changePage(page){
    if(page.current !== undefined) {
        switch (page.current){
            case "first":
                currentPage = 1;
                break;
            case "prev":
                currentPage = currentPage > 1?currentPage-1: 1;
                break;
            case "next":
                currentPage = currentPage < page.last?currentPage+1: page.last;
                break;
            case "last":
                currentPage = page.last;
                break;
            // case "more":
            //     currentPage = currentPage + 3 < page.last?currentPage+3: page.last - 3;
            //     break;
            default:
                currentPage = +page.current;
        }
    }
    changeDots(currentPage, page.last);
    pagination(currentPage);
}

function changeDots(page, last) {
    if(page > 1) {
        $('.pagination__arrow--left').removeClass('disabled');
    }
    if (page === 1){
        $('.pagination__arrow--left').addClass('disabled');
    }
    if (page === last){
        $('.pagination__arrow--right').addClass('disabled');
    }
    if (page < last){
        $('.pagination__arrow--right').removeClass('disabled');
    }
    if(last > 3 && page < last - 2) {
        $('.dots__element').map( (i,li) => {
           li.dataset.page =  page + i + 1;
           li.html =  page + i + 1;
        })
    }
    if(last <= 3) {
        $('.dots__element').map( (i,li) => {
            $(li).removeClass('active');
            if(i+1 === page) {$(li).addClass('active');}
        })
    }
}
