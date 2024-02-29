$(document).ready(function(){

    // hero_slider
    var heroSlider = new Swiper(".hero_slider", {
        spaceBetween: 80,
    });

    $('.hero_slider_nav .nav_item').on('click', function(e){
        e.preventDefault();
        let slideIndex = $(this).data('index');
        heroSlider.slideTo(slideIndex, 300, true);
        
        $('.hero_slider_nav .nav_item').removeClass('active', );
        $(this).addClass('active');
    })

    // society_slider
    var societySlider = new Swiper(".society_slider", {
        spaceBetween: -180,
        slidesPerView: 3,
        // loop: true,
        centeredSlides: true,
        initialSlide: 1,
        slideToClickedSlide: true,
        autoplay:{
            autoplay: true,
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints:{
            0:{
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: false,
                loop: true,
            },
            768:{
                slidesPerView: 1.2,
                spaceBetween: -10,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: -10,
            },
            1200:{
                slidesPerView: 3,
                spaceBetween: -120,
            },
            1400:{
                spaceBetween: -180,
            }
        },
    });

    // Open modal when click
    $(".hero .button").on("click", function(e){
        e.preventDefault();
        const orderModal = new bootstrap.Modal('#order_modal', {})
        orderModal.show();
    })

    // mobile hamburger click
    $('.mobile_hamburger').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass("active")
        $('.header_nav').toggleClass("show")
    })

    $(".menu_close").on("click", function(e){
        e.preventDefault();
        $(".mobile_hamburger").removeClass("active")
        $('.header_nav').removeClass("show")
    })


    $('#order_modal form').on('submit', function(e){
        e.preventDefault();
        let form = $(this);
        let formData = form.serializeArray();

        let message = '<b> New Order <b>\n'
        for(let i = 0; i < formData.length; i++){
            message += formData[i].name + " : " + formData[i].value + "\n";
        }

        $.ajax({
            url: "https://api.telegram.org/bot6247507526:AAEzFtexTdCucb8Qu-QRSzoh2nUgb8tjbV4/sendMessage",
            method: 'get',
            data : {
                text: message,
                chat_id: 1412411922
            }
        })



    })

    

})