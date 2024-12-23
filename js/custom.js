/***************************************************************************************************************
 ||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR DAILY SPANZ            |||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************
 ||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************
 ****************************************************************************************************************
 01. Revolution slider
 02. Sticky header
 03. Prealoader
 04. Language switcher
 05. prettyPhoto
 06. BrandCarousel
 07. Testimonial carousel
 08. ScrollToTop 
 09. Cart Touch Spin
 10. PriceFilter
 11. Cart touch spin
 12. Fancybox activator
 13. ContactFormValidation
 14. Scoll to target
 15. PrettyPhoto
 
 ****************************************************************************************************************
 ||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
 ****************************************************************************************************************/

"use strict";

//===RevolutionSliderActiver===
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        $("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            startwidth: 1170,
            startheight: 750,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview4",

            dottedOverlay: 'yes',

            hideTimerBar: "off",
            onHoverStop: "off",
            navigation: {
                arrows: {enable: true}
            },
            gridwidth: [1170],
            gridheight: [750]
        });
    }
    ;
}

function lazyload() {
    if ($('.lazy').length) {
        $('.lazy').Lazy({
            // your configuration goes here
            scrollDirection: 'vertical',
            effect: 'fadeIn',
            visibleOnly: true,
            afterLoad: function (element) {

            },
            onError: function (element) {

            }
        });
    }
}

//====Main menu===
function mainmenu() {
    //Submenu Dropdown Toggle
    if ($('.main-menu li.dropdown ul').length) {
        $('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });
    }

}



//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    }
    ;
}



//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}



//=== Prealoder===
function prealoader() {
    if ($('.preloader').length) {
        $('.preloader').delay(2000).fadeOut(500);
    }
}



//===Search box ===
function searchbox() {
    //Search Box Toggle
    if ($('.seach-toggle').length) {
        //Dropdown Button
        $('.seach-toggle').on('click', function () {
            $(this).toggleClass('active');
            $(this).next('.search-box').toggleClass('now-visible');
        });
    }

}



//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function (evt) {
                alert("The selected language is: " + evt.selectedItem);
            }

        });
    }
    ;
}



//===Prettyphoto Lightbox===
function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: 3000,
        autoplay_slideshow: false,
        fullscreen: true,
        social_tools: false
    });
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function () {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function () {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    }
    ;
}



//===Brand Carousel===
function brandCarousel() {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1100: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }
}

//===Brand Carousel===
function coporateCarousel() {
    if ($('.corporate-program').length) {
        $('.corporate-program').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            lazyLoad: true,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
            }
        });
    }
}

function ourExpertiseCarousel() {
    if ($('.our-expertise-carousel-wrapper').length) {
        $('.our-expertise-carousel-wrapper').owlCarousel({
            dots: false,
            loop: true,
            margin: 30,
            lazyLoad: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 4
                }
            }
        });
    }
}


function subCategoryCarousel() {
    if ($('.sub-category-service-carousel-wrapper').length) {
        $('.sub-category-service-carousel-wrapper').owlCarousel({
            dots: false,
            loop: true,
            margin: 10,
            lazyLoad: true,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                }
            }
        });
    }
}



//===Project Single Carousel===
function projectCarousel() {
    if ($('.project-single-carousel').length) {
        $('.project-single-carousel').owlCarousel({
            dots: true,
            loop: true,
            margin: 30,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1100: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}



//=== Fact counter ===
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function () {
            timer.countTo();
        })
    }

}


function initPhotoGallery() {
    if ($("#lightgallery").length) {
        $('#lightgallery').lightGallery();
    }
}

function initAppointmentForm() {
    if ($("#appointment-form").length) {
        console.log("Appointment Form Loading");
        /*
         * Load JS Libraries
         */
        $('head').append('<link href="library/formvalidation/dist/css/formValidation.min.css" rel="stylesheet" type="text/css"/>');
        $('head').append('<script src="library/formvalidation/dist/js/formValidation.min.js" type="text/javascript" async defer></script>');
        $('head').append('<script src="library/formvalidation/dist/js/framework/bootstrap.min.js" type="text/javascript" async defer></script>');


        $('[name="appointment_date"]')
                .on('changeDate', function (e) {
                    debugger;
                    // Revalidate the date field
                    $('#appointment-form').formValidation('revalidateField', 'appointment_date');
                });

        /*
         * Init Formvalidation
         */
        $("#appointment-form").formValidation({
            framework: 'bootstrap',
            icon: {
                valid: '',
                invalid: '',
                validating: ''
            },
            excluded: ':disabled',
            fields: {
                'full_name': {
                    validators: {
                        notEmpty: {
                            message: 'Full name is required!'
                        },
                        stringLength: {
                            min: 3,
                            max: 30,
                            message: 'The name must be more than 3 and less than 30 characters long!'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'The name can only consist of alphabeticals!'
                        }
                    }
                },
                'email_address': {
                    validators: {
                        notEmpty: {
                            message: 'Your email address is required!'
                        }
                        , emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                'mobile_number': {
                    validators: {
                        notEmpty: {
                            message: 'Contact number is required!'
                        },
                        numeric: {
                            message: 'Valid number is required!'
                        }
                    }
                },
                'services': {
                    validators: {
                        notEmpty: {
                            message: 'Select a Service!'
                        }
                    }
                },
                'message': {
                    validators: {
                        notEmpty: {
                            message: 'Message is required!'
                        }
                    }
                }
            }
        }).on('err.field.fv', function (e, data) {
            data.fv.disableSubmitButtons(false);
        }).on('success.field.fv', function (e, data) {
            if (data.fv.getSubmitButton()) {
                data.fv.disableSubmitButtons(false);
            }
        }).on('success.form.fv', function (e, data) {
            e.preventDefault();
            var $form = $(e.target),
                    fv = $(e.target).data('formValidation');
            var formData = {};
            $("#appointment-form").serializeArray().map(function (x) {
                formData[x.name] = x.value;
            });
            fv.disableSubmitButtons(true);
            saveAppointment(formData);
            fv.disableSubmitButtons(true);
        });
    }
}

function initStickyAppointmentEvents() {
    if ($("#floating-btn-book-an-appointment").length > 0) {
        $("#floating-btn-book-an-appointment").on("click", function (e) {
            $('html, body').animate({
                scrollTop: $("#appointmentstops").offset().top
            }, 600);
        });
    }
}


function saveAppointment(data) {
    $.ajax({
        type: "post",
        url: "api.php?do=saveAppointment",
        data: {
            record: JSON.stringify(data)
        },
        success: function (response) {
            if (response.success === true) {
                document.location = "thank-you-for-reaching-us";
            } else {

            }
        },
        error: function (response) {
        }
    }); //end ajax

}



//=== Tool tip ===
function tooltip() {
    if ($('.tool_tip').length) {
        $('.tool_tip').tooltip();
    }
}



//=== Accordion ===
function accordion() {
    if ($('.accordion-box').length) {
        $('.accordion-box .accord-btn').on('click', function () {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .accord-btn').removeClass('active');
            }

            if ($(this).next('.accord-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);
            }
        });
    }
}



//=== Cart Touch Spin ===
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}



// Select menu 
function selectDropdown() {
//    if ($(".selectmenu").length) {
//        $(".selectmenu").selectmenu();
//
//        var changeSelectMenu = function (event, item) {
//            $(this).trigger('change', item);
//        };
//        $(".selectmenu").selectmenu({change: changeSelectMenu});
//    }
//    ;
}



//  Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function (event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    }
    ;
}



// ===Date picker ===
function datepicker() {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker({
            minDate: 0, // 0 days offset = today
            format: 'yyyy-mm-dd'
        });
    }
}



//=== Time picker===
function timepicker() {
    $('input[name="time"]').ptTimeSelect();
}



//=== CountDownTimer===
function countDownTimer() {
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<h2>' + event.strftime('%D : %H : %M : %S') + '</h2>');
            });
        });
    }
    ;
    if ($('.time-countdown-two').length) {
        $('.time-countdown-two').each(function () {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef">hours</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef">minutes</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef">seconds</span> </div> </li>');
            });
        });
    }
    ;
}



//=== Contact Form Validation ===
if ($("#contact-form").length) {
    $("#contact-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow')
                    }, 6000);
                }
            });
        }
    });
}



//=== Add comment Form Validation ===
if ($("#add-comment-form").length) {
    $("#add-comment-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow')
                    }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#consultation-form").length) {
    $("#consultation-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow')
                    }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#review-form").length) {
    $("#review-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow')
                    }, 6000);
                }
            });
        }
    });
}



//=== Review Form Validation ===
if ($("#request-form").length) {
    $("#request-form").validate({
        submitHandler: function (form) {
            var form_btn = $(form).find('button[type="submit"]');
            var form_result_div = '#form-result';
            $(form_result_div).remove();
            form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
            var form_btn_old_msg = form_btn.html();
            form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
            $(form).ajaxSubmit({
                dataType: 'json',
                success: function (data) {
                    if (data.status == 'true') {
                        $(form).find('.form-control').val('');
                    }
                    form_btn.prop('disabled', false).html(form_btn_old_msg);
                    $(form_result_div).html(data.message).fadeIn('slow');
                    setTimeout(function () {
                        $(form_result_div).fadeOut('slow')
                    }, 6000);
                }
            });
        }
    });
}



// Elements Animation
if ($('.wow').length) {
    var wow = new WOW({
        mobile: false
    });
    wow.init();
}





// Dom Ready Function
jQuery(document).on('ready', function () {
    (function ($) {

        // add your functions
        revolutionSliderActiver();
        mainmenu();
        lazyload();
        scrollToTop();
        searchbox();
        languageSwitcher();
        prettyPhoto();
        projectMasonaryLayout();
        brandCarousel();
        coporateCarousel();
        ourExpertiseCarousel();
        subCategoryCarousel();
        projectCarousel();
        selectDropdown();
        CounterNumberChanger();
        accordion();
        datepicker();
        priceFilter();
        countDownTimer();
        cartTouchSpin();
        timepicker();
        tooltip();

        initPhotoGallery();
        initAppointmentForm();
        initStickyAppointmentEvents();
    })(jQuery);
});



// Scroll Function
jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader()

    })(jQuery);
});



// Instance Of Fuction While Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        prealoader();

    })(jQuery);
});
