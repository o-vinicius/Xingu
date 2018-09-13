$(function() {
    
    var alturaheader = $('.header-main').outerHeight();
    $('.header-spacer').css("height", alturaheader);
    
    $(window).enllax();
    
    $('.carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })
    
    $('.navbar, .mobile-toggle, .menu-main > ul > li.sub-menu').addClass('menu-closed');
    $('.menu-main > ul > li.sub-menu > ul').slideUp();
    
    $('.btn-mobile-toggle').click(function() {
        $('.mobile-toggle').toggleClass('menu-closed');
        $('.navbar').toggleClass('menu-closed');
    });
    
    $('.menu-main > ul > li.sub-menu > i').on('touchstart', function(event){
        if ($(this).parent().hasClass('menu-closed')) {
            $('.menu-main > ul > li.sub-menu > i').parent().addClass('menu-closed');
            $('.menu-main > ul > li.sub-menu > i').parent().find('ul').slideUp();
            $(this).parent().removeClass('menu-closed');
            $(this).parent().find('ul').slideDown();
        } else if ($(this).parent().not('menu-closed')) {
            $(this).parent().addClass('menu-closed');
            $(this).parent().find('ul').slideUp();
        }
    });
});