$(document).ready(function(){
    // 下拉式選單
    $('.drop').click(function(){
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.dropdown').slideToggle();

        $(this).parent().siblings().find('.dropdown').slideUp();
        $(this).parent().siblings().find('.drop').removeClass('active');
      });

    // swiper
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed:1000,
        autoplay: {
            delay: 2000,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });

    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel':false,
        'wrapAround':false,
        'disableScrolling':true,
      })

    // 回到頂端
    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
        scrollTop:0
        },500);
    }); 

}); 