@@include('./libs.js');

(function () {
	var loader = function () {
		$(".loader-wrap").delay(500).fadeOut(500);
	};
	loader();


const wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	live: true
});
wow.init();
// валидация формы

    // $(".js-hover__menu .top-menu__nested").hide();
    $(".js-hover").hover(
        function(){
            $(this).toggleClass('hover')}
    );
})();