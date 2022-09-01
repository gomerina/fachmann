var mainScreenSlider=new Swiper(".main-screen__slider",{spaceBetween:0,speed:800,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:6e3,disableOnInteraction:!1}}),newSlider=new Swiper(".new-slider",{spaceBetween:20,slidesPerView:3,slidesPerGroup:3,speed:800,pagination:{el:".swiper-pagination-new",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:1.2,slidesPerGroup:1},767:{slidesPerView:2,slidesPerGroup:2},1130:{slidesPerView:3,slidesPerGroup:3}}}),clientsSlider=new Swiper(".clients-slider",{spaceBetween:36,slidesPerView:"auto",speed:800,pagination:{el:".swiper-pagination-clients",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),usageSlider=new Swiper(".usage-slider",{spaceBetween:21,slidesPerView:3,slidesPerGroup:3,speed:800,pagination:{el:".swiper-pagination-usage",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:1.2,slidesPerGroup:1},650:{slidesPerView:2,slidesPerGroup:2},1130:{slidesPerView:3,slidesPerGroup:3}}}),verticalSlider=new Swiper(".verical-slider",{spaceBetween:10,slidesPerView:3,slidesPerGroup:1,direction:"vertical",speed:800,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),bigSlider=new Swiper(".card-slider__big",{spaceBetween:10,slidesPerView:1,slidesPerGroup:1,speed:800,thumbs:{swiper:verticalSlider},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-big",clickable:!0}}),relatedSlider=new Swiper(".related-slider",{spaceBetween:21,slidesPerView:3,slidesPerGroup:3,speed:800,pagination:{el:".swiper-pagination-related",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:1.2,slidesPerGroup:1},650:{slidesPerView:2,slidesPerGroup:2},1130:{slidesPerView:3,slidesPerGroup:3}}});const historyImgSlider=new Swiper(".history-slider-images",{wrapperClass:"history-slider-wrapper",slideClass:"history-slider-item",speed:800,effect:"creative",slidesPerView:1,simulateTouch:!1,pagination:{el:".swiper-pagination",clickable:!0},creativeEffect:{prev:{origin:"right top",shadow:!1,translate:[82,25,0]},next:{shadow:!1,origin:"left bottom",translate:[44,-25,0]}}}),historySlider=new Swiper(".history-slider",{spaceBetween:-290,slidesPerView:1,slidesPerGroup:1,speed:800,grabCursor:!0,pagination:{el:".swiper-pagination",type:"progressbar"},thumbs:{swiper:historyImgSlider},breakpoints:{280:{spaceBetween:0},650:{spaceBetween:0},1025:{spaceBetween:-290}}});var blogSmallSlider=new Swiper(".blog__slider-small",{spaceBetween:26,slidesPerView:3,slidesPerGroup:3,speed:800,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{280:{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},650:{slidesPerView:3,slidesPerGroup:3,spaceBetween:26}}}),blogBigSlider=new Swiper(".blog__slider-big",{spaceBetween:0,slidesPerView:1,slidesPerGroup:1,speed:800,grabCursor:!1,thumbs:{swiper:blogSmallSlider}});function mobCatalog(){window.innerWidth<=1024?($(".header__catalog-menu").appendTo(".header-catalog__mobile"),$(".header__contacts-link").appendTo(".mobile-contacts"),$(".header__social a").appendTo(".mobile-social")):($(".header__catalog-menu").appendTo(".header__catalog"),$(".header__contacts-link").appendTo(".header__contacts"),$(".header__social a").appendTo(".header__social"))}function mobSearch(){window.innerWidth<=460?($(".header__search").appendTo(".mobile-search"),$(".header-search__input").attr("placeholder","Поиск")):($(".header__search").appendTo(".desctope-search"),$(".header-search__input").attr("placeholder"," "))}historySlider.on("slideChange",(function(){$(".history-years__item").eq(historySlider.realIndex).addClass("active").siblings().removeClass("active"),historyImgSlider.slideTo(historySlider.realIndex)})),historyImgSlider.on("slideChange",(function(){$(".history-years__item").eq(historyImgSlider.realIndex).addClass("active").siblings().removeClass("active"),historySlider.slideTo(historyImgSlider.realIndex)})),$(".history-years__item").on("click",(function(){$(this).addClass("active").siblings().removeClass("active"),historySlider.slideTo($(this).index(),800),historyImgSlider.slideTo($(this).index(),800)})),$(document).ready((function(){$("[data-tooltip]").mousemove((function(e){$data_tooltip=$(this).attr("data-tooltip"),$(".tooltip").text($data_tooltip).css({top:e.pageY+35,left:e.pageX-100}).show()})).mouseout((function(){$(".tooltip").hide().text("").css({top:0,left:0})}))})),$("#range-slider__diameter").slider({animate:"slow",range:!0,min:1e3,max:1e5,values:[1e3,1e5],slide:function(e,i){$(".diameter-min").val(i.values[0]),$(".diameter-max").val(i.values[1])}}),$("#range-slider__ses").slider({animate:"slow",range:!0,min:1e3,max:1e5,values:[1e3,1e5],slide:function(e,i){$(".ses-min").val(i.values[0]),$(".ses-max").val(i.values[1])}}),$("#range-slider__height").slider({animate:"slow",range:!0,min:1e3,max:1e5,values:[1e3,1e5],slide:function(e,i){$(".height-min").val(i.values[0]),$(".height-max").val(i.values[1])}}),$("#range-slider__throughput").slider({animate:"slow",range:!0,min:1e3,max:1e5,values:[1e3,1e5],slide:function(e,i){$(".troughput-min").val(i.values[0]),$(".troughput-max").val(i.values[1])}}),document.addEventListener("click",(function(){$(".custom-select").removeClass("active")})),$(".custom-select").each((function(){$(this).click((function(e){e.stopPropagation(),$(this).toggleClass("active").siblings().removeClass("active")})),$(this).find(".select-menu__item").click((function(){$(this).closest(".custom-select").find(".custom-select__value").html($(this).html()),$(this).closest(".custom-select").find(".custom-select__input").val($(this).html()),$(this).addClass("hidden").siblings().removeClass("hidden")}))})),$(".params-chars__open").click((function(){$(this).closest(".product-card__params").find(".card__params-item").removeClass("hidden"),$(this).remove()})),function(e){e((function(){e("ul.tabs__caption").on("click",".tab__item:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(e(this).index()).addClass("active")}))}))}(jQuery),$(".maker__accodion-head").click((function(){$(this).toggleClass("active"),$(this).next(".maker__accordion-content").slideToggle()})),$(".header__search").click((function(){$(this).addClass("active"),$(".header-search__input").focus(),$(".header__search-img").addClass("hidden"),$(".header-search__btn").addClass("show"),$(".header__nav").addClass("search"),$(".header-navigation").addClass("search")})),$(".mob-menu").click((function(){$(".header__nav").fadeIn(300),$(".header__nav").css("display","flex")})),$(".close-menu").click((function(){$(".header__nav").fadeOut(300)})),mobSearch(),$(".header__catalog").click((function(){window.innerWidth<=1024&&$(".header__catalog-menu").slideDown(600)})),window.addEventListener("resize",(function(){mobCatalog(),mobSearch()})),mobCatalog(),$(".mobile-filter").click((function(){$(".catalog-filter").addClass("active"),$(".overlay").fadeIn()})),$(".overlay").click((function(){$(".catalog-filter").removeClass("active"),$(this).fadeOut()})),$(".filter-accordion-name").click((function(){$(this).toggleClass("active"),$(this).next(".filter-accordion__body").slideToggle()})),$(".storages-address__item").each((function(){$(this).find(".button-transparent").click((function(){$(this).closest(".storages-address__item").find("img").remove(),$(this).remove()}))})),$(".button").click((function(){$(this).addClass("active")})),$(".tabs__docs-download").click((function(){$(this).addClass("active")})),$(".advantages__item--catalog .button-transparent").click((function(){$(this).addClass("active")}));