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

    $(".js-hover").hover(
        function(){
            $(this).toggleClass('hover')}
    );

    $('.sl').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        prevArrow: $('.sl__button--left'),
        nextArrow: $('.sl__button--right'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });
})();