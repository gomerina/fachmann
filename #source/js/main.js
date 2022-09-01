// Соайдер первый экран
var mainScreenSlider = new Swiper(".main-screen__slider", {
    spaceBetween: 0,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});
// Слайдер новинки
var newSlider = new Swiper(".new-slider", {
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 800,
    pagination: {
        el: ".swiper-pagination-new",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1130: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
// Слайдер клиенты
var clientsSlider = new Swiper(".clients-slider", {
    spaceBetween: 36,
    slidesPerView: "auto",
    speed: 800,
    pagination: {
        el: ".swiper-pagination-clients",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Слайдер применение
var usageSlider = new Swiper(".usage-slider", {
    spaceBetween: 21,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 800,
    pagination: {
        el: ".swiper-pagination-usage",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1130: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});
// Вертикальный слайдер
var verticalSlider = new Swiper(".verical-slider", {
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: 1,
    direction: "vertical",
    speed: 800,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
// Слайдер в большой карточке 
var bigSlider = new Swiper(".card-slider__big", {
    spaceBetween: 10,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 800,
    thumbs: {
        swiper: verticalSlider,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination-big",
        clickable: true,
    },
});
// Слайдер сопутствующие товары
var relatedSlider = new Swiper(".related-slider", {
    spaceBetween: 21,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 800,
    pagination: {
        el: ".swiper-pagination-related",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1130: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    }
});


const historyImgSlider = new Swiper(".history-slider-images", {
    wrapperClass: "history-slider-wrapper",
    slideClass: "history-slider-item",
    speed: 800,
    effect: "creative",
    slidesPerView: 1,
    simulateTouch: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    creativeEffect: {
        prev: {
            origin: "right top",
            shadow: false,
            translate: [82, 25, 0],
        },
        next: {
            shadow: false,
            origin: "left bottom",
            translate: [44, -25, 0],
        },
    },
});

const historySlider = new Swiper(".history-slider", {
    spaceBetween: -290,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 800,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

    thumbs: {
        swiper: historyImgSlider,
    },
    breakpoints: {
        280: {
            spaceBetween: 0,
        },
        650: {
            spaceBetween: 0,
        },
        1025: {
            spaceBetween: -290,
        },
    }
});

// Слайдер в блоге
var blogSmallSlider = new Swiper(".blog__slider-small", {
    spaceBetween: 26,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        650: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 26,
        },
    }
});

var blogBigSlider = new Swiper(".blog__slider-big", {
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 800,
    grabCursor: false,
    thumbs: {
        swiper: blogSmallSlider,
    }
});

historySlider.on('slideChange', function () {
    $('.history-years__item').eq(historySlider.realIndex).addClass('active').siblings().removeClass('active');
    historyImgSlider.slideTo(historySlider.realIndex)
});
historyImgSlider.on('slideChange', function () {
    $('.history-years__item').eq(historyImgSlider.realIndex).addClass('active').siblings().removeClass('active');
    historySlider.slideTo(historyImgSlider.realIndex)
});
$('.history-years__item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    historySlider.slideTo(($(this).index()), 800)
    historyImgSlider.slideTo(($(this).index()), 800)
});

// Всплывающая подсказка в карточках товара
$(document).ready(function () {

    $("[data-tooltip]").mousemove(function (eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $(".tooltip").text($data_tooltip)
            .css({
                "top": eventObject.pageY + 35,
                "left": eventObject.pageX - 100
            })
            .show();

    }).mouseout(function () {

        $(".tooltip").hide()
            .text("")
            .css({
                "top": 0,
                "left": 0
            });
    });

});
// Слайдеры в фильтре
$("#range-slider__diameter").slider({
    animate: "slow",
    range: true,
    min: 1000,
    max: 100000,
    values: [1000, 100000],
    slide: function (event, ui) {
        $('.diameter-min').val(ui.values[0]);
        $('.diameter-max').val(ui.values[1]);
    }
});
$("#range-slider__ses").slider({
    animate: "slow",
    range: true,
    min: 1000,
    max: 100000,
    values: [1000, 100000],
    slide: function (event, ui) {
        $('.ses-min').val(ui.values[0]);
        $('.ses-max').val(ui.values[1]);
    }
});
$("#range-slider__height").slider({
    animate: "slow",
    range: true,
    min: 1000,
    max: 100000,
    values: [1000, 100000],
    slide: function (event, ui) {
        $('.height-min').val(ui.values[0]);
        $('.height-max').val(ui.values[1]);
    }
});
$("#range-slider__throughput").slider({
    animate: "slow",
    range: true,
    min: 1000,
    max: 100000,
    values: [1000, 100000],
    slide: function (event, ui) {
        $('.troughput-min').val(ui.values[0]);
        $('.troughput-max').val(ui.values[1]);
    }
});
// select
document.addEventListener('click', function () {
    $('.custom-select').removeClass('active');
})

$('.custom-select').each(function () {
    $(this).click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').siblings().removeClass('active');
    })
    $(this).find('.select-menu__item').click(function () {
        $(this).closest('.custom-select').find('.custom-select__value').html($(this).html());
        $(this).closest('.custom-select').find('.custom-select__input').val($(this).html());
        $(this).addClass('hidden').siblings().removeClass('hidden');
    })
})

// Кнопка показать все характеристики

$('.params-chars__open').click(function () {
    $(this).closest('.product-card__params').find('.card__params-item').removeClass('hidden');
    $(this).remove();
});
// Табы
(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', '.tab__item:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

// Аккордион проектировщиков
$('.maker__accodion-head').click(function () {
    $(this).toggleClass('active');
    $(this).next('.maker__accordion-content').slideToggle();
})
// Поиск в шапке 
$('.header__search').click(function () {
    $(this).addClass('active');
    $('.header-search__input').focus()
    $('.header__search-img').addClass('hidden')
    $('.header-search__btn').addClass('show');
    $('.header__nav').addClass('search');
    $('.header-navigation').addClass('search')
})
// моб меню
$('.mob-menu').click(function () {
    $('.header__nav').fadeIn(300)
    $('.header__nav').css('display', 'flex');
})
$('.close-menu').click(function () {
    $('.header__nav').fadeOut(300)
})
// Меняем местами разметку в шапке

function mobCatalog() {
    if (window.innerWidth <= 1024) {
        $('.header__catalog-menu').appendTo('.header-catalog__mobile')
        $('.header__contacts-link').appendTo('.mobile-contacts')
        $('.header__social a').appendTo('.mobile-social');
    } else {
        $('.header__catalog-menu').appendTo('.header__catalog')
        $('.header__contacts-link').appendTo('.header__contacts')
        $('.header__social a').appendTo('.header__social');
    }
}
function mobSearch() {
    if (window.innerWidth <= 460) {
        $('.header__search').appendTo('.mobile-search')
        $('.header-search__input').attr('placeholder', 'Поиск')
    } else {
        $('.header__search').appendTo('.desctope-search')
        $('.header-search__input').attr('placeholder', ' ')
    }
}
mobSearch()
$('.header__catalog').click(function () {
    if (window.innerWidth <= 1024) {
        $('.header__catalog-menu').slideDown(600);
    }
})
window.addEventListener('resize', function () {
    mobCatalog();
    mobSearch();
})
mobCatalog();

// Фильтр в каталоге
$('.mobile-filter').click(function () {
    $('.catalog-filter').addClass('active');
    $('.overlay').fadeIn();
})
$('.overlay').click(function () {
    $('.catalog-filter').removeClass('active');
    $(this).fadeOut();
})
// Аккордион в фильтре
$('.filter-accordion-name').click(function () {
    $(this).toggleClass('active')
    $(this).next('.filter-accordion__body').slideToggle();
})
// Контакты

$('.storages-address__item').each(function () {
    $(this).find('.button-transparent').click(function () {
        $(this).closest('.storages-address__item').find('img').remove()
        $(this).remove();
    })
})
$('.button').click(function () {
    $(this).addClass('active');
})
$('.tabs__docs-download').click(function () {
    $(this).addClass('active');
})
$('.advantages__item--catalog .button-transparent').click(function () {
    $(this).addClass('active');
})