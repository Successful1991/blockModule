@@include('./libs.js')


(function () {
    $("body").fadeIn(800);
	// var loader = function () {
	// 	$(".loader-wrap").delay(500).fadeOut(500);
	// };
	// loader();

    // burger
    $('.js-burger').on('click', function () {
        $('.menu').addClass('active');
    });
    $('.js-menu__close').on('click', function () {
        $('.menu').removeClass('active');
    });

    $(".js-hover").hover(
        function(){$(this).toggleClass('hover')}
    );


    // slider init start
    $('.js-single-work__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev single-work__button single-work__button--left"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        nextArrow: '<button type="button" class="slick-next single-work__button single-work__button--right"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    vertical: false,

                }
            }, {
                breakpoint: 767,
                settings: {
                    vertical: true,

                }
            }]

    });
    var singleWorkSlider = $('.js-single-work__slider--big').slick({
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.js-single-work__slider img').on('click', function () {
        var index = $(this).data('slick-index');
        singleWorkSlider[0].slick.slickGoTo(index);
    });

    $('.js-single-catalog__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev single-catalog__slider-button single-catalog__slider-button--left"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        nextArrow: '<button type="button" class="slick-next single-catalog__slider-button single-catalog__slider-button--right"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }
            },
            ]

    });
    var singlecatalogSlider = $('.js-single-catalog__slider--big').slick({
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.js-single-catalog__slider img').on('click', function () {
        var index = $(this).data('slick-index');
        singlecatalogSlider[0].slick.slickGoTo(index);
    });

    $('.js-sl').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        prevArrow: $('.sl__button--left'),
        nextArrow: $('.sl__button--right'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.js-index-clients-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        prevArrow: $('.index-clients-slider__button--left'),
        nextArrow: $('.index-clients-slider__button--right'),
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 469,
            settings: {
                slidesToShow: 1
            }
        }]
    });


    $('.js-about-top__slider').slick({
        infinite: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev about-top__slider-button about-top__slider-button--left"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        nextArrow: '<button type="button" class="slick-next about-top__slider-button about-top__slider-button--right"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    });

    $('.js-about-photo__slider').slick({
        infinite: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev about-photo__slider-button about-photo__slider-button--left"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        nextArrow: '<button type="button" class="slick-next about-photo__slider-button about-photo__slider-button--right"><svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"> <path d="M8.4853 0.707107L7.7782 0L4.24263 3.53557L0.707107 4.65512e-05L0 0.707153L4.24264 4.94979L4.94975 4.24269L4.94974 4.24268L8.4853 0.707107Z"/> </svg></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.js-scroll__up').on('click',function () {
       $('window, html').animate({'scrollTop':'0'},900)
    });
    let accordeonList = document.querySelectorAll('.accordeon-item');
    accordeonList.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('.accordeon-open-block').classList.toggle('accordeon-opened');
            item.querySelector('.accordeon-item__title').classList.toggle('transformed');
        })
    });


    // slider init end
    $('.js-drop').on('click','.drop__head', function () {
        $(this).closest('.faq__drop').toggleClass('active');
    });

    $('.js-tabs__catalog').on('click',function (e) {
        if(e.target.dataset.category !== undefined){
            $('.js-tabs__catalog .active').removeClass('active');
            $(e.target).addClass('active');
            $('[data-type = '+e.target.dataset.category+']').addClass('active');
        }
    });

    $('.js-form__close').on('click', function (e) {
        $(this.closest('.popup-wrap')).removeClass('active');
    });

    $('.js-single-catalog__table').on('click', function (e) {
        e.preventDefault();
        $('.js-popup').addClass('active');
    });

    $('.js-form__project').on('click', function(e){
        e.preventDefault();
        $('.js-form--project').addClass('active');
    });
    $('.js-form__comers').on('click', function(e){
        e.preventDefault();
        $('.js-form--comers').addClass('active');
    });

    $('.js-form__submit').on('click',function (e) {
        e.preventDefault();
        ajax_form(e,"POST","/wp-content/themes/block-module/inc/application/form.php");
    })
})()


function initMap() {
    var uluru = {lat: 50.464756, lng: 30.522190};
    var map = new google.maps.Map(document.getElementById('contact__map'), {
        zoom: 14,
        center: uluru,
        disableDefaultUI: true,
    });
    var content = "<p class='content'>Украина, г. Киев, ул. Ильинская 12</p>";
    var infowindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 500
    });
    var styleMap = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {"color": "#e9e9e9"},
                { "lightness": 17}
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {"color": "#e4e4e4"},
                {"lightness": 20}
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#b9b9b9"},
                {"lightness": 20}
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                { "color": "#ffffff"},
                { "lightness": 17}
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#ffffff"},
                {"lightness": 29},
                {"weight": 0.2}
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {"color": "#ffffff"},
                {"lightness": 18}
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {"color": "#ffffff"},
                {"lightness": 16}
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {"color": "#f5f5f5"},
                {"lightness": 21}
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {"color": "#dedede"},
                {"lightness": 21}
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {"visibility": "on"},
                {"color": "#ffffff"},
                {"lightness": 16}
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {"saturation": 36},
                {"color": "#333333"},
                {"lightness": 40}
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {"visibility": "off"}
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {"color": "#f2f2f2"},
                {"lightness": 19}
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {"color": "#fefefe"},
                {"lightness": 20}
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {"color": "#fefefe"},
                {"lightness": 17},
                {"weight": 1.2}
            ]
        }
    ];
    map.setOptions({styles: styleMap});

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(uluru.lat, uluru.lng),
        map: map,
        icon: new google.maps.MarkerImage('./assets/images/icon/map__marker.svg',
            new google.maps.Size(53, 71),
            new google.maps.Point(0, 0))
    });

    google.maps.event.addListener(marker, 'click', (function(marker, content) {
        return function() {
            infowindow.setContent(content); // установка нужного контента в всплывайку
            infowindow.open(map, marker); // открытие нужного окна
            map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
        }
    })(marker, content));


    var newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
    var newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
    google.maps.event.addListener(map, "zoom_changed", function() {
        newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
        newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
    });
}


function ajax_form(e,methods,url) {
    event.preventDefault();
    var form = $(e.target).closest("form");
    var str = form.serialize();

    var errors = false; // по умолчанию ошибок в форме нет

    $(form).find('.js__form__input ').each(function() {
        errors = validateForm(this);
    });
    $(".js__form__input").on("mouseup",delMessageErrorForm);

    if ( !errors) {
        $.ajax({
            method: methods,
            url: url,
            data: str,
            beforeSend: function() {
                $(form).find('button > span').text('Отправка...') // замена текста в кнопке при отправке
            },
            error: function(){
                $(form).find('button > span').text('Ошибка отправки!');// замена текста в кнопке при отправке в случае
            }
        })
            .done(function (data) {
                console.log($(form));

                var data = JSON.parse(data);

                // success();
                successSendMesage();



                if (data.result){

                    //$(e).find('.result-text').removeClass('error');
                    $(form)[0].reset();



                } else {

                    //$(e).find('.result-text').addClass('error');
                }

                if (data.message){

                    $(form).find('.result-text').fadeIn();
                    $(form).find('.result-text').html(data.message);
                    setTimeout(function(){$(e).find('.result-text').fadeOut();},20000)
                }


            });
    }
}

function validateForm(self) {

    var regular = new RegExp('^[a-zA-Zа-яА-Я\'][a-zA-Zа-яА-Я-\' ]+[a-zA-Zа-яА-Я\']?$');
    console.log($(self).val());



    if (( $(self).attr('type') === 'tel' && $(self).val().length <5) ||
        ( $(self).attr('type') !== 'tel' && $.trim ( $(self).val() ).length < 2) ||
        ( $(self).attr('type') !== 'tel' && !regular.test($(self).val()) )  ){
        var errorMessage = $(self).next().data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
        $(self).next().text(errorMessage);
        $(self).addClass('js-no-valid');
        return true
    }
    return false
}
function delMessageErrorForm() {
    var defaultMessage = $(this).next().data("defaultmessage"); // при клике на input убираем сообщение и class
    $(this).next().text('');
    $(this).removeClass('js-no-valid');
}
function successSendMesage(){
    $('.send__success').addClass('.active');
    setTimeout(function () {
        $('.popup-wrap').removeClass('active');
        $('.send__success').removeClass('.active');
    },2000);
}

