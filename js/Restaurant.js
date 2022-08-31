$(document).ready(function(){
    $('body').on('click', 'a', function(event) {
        event.preventDefault();
      });  

    // banner
    $("a[href$='.svg']").addClass('fa-solid fa-utensils');
    $("a[href$='.google']").addClass('fa-brands fa-square-google-plus');
    $("a[href$='.twt']").addClass('fa-brands fa-square-twitter');
    $("a[href$='.fb']").addClass('fa-brands fa-square-facebook');

    // menu
    $("a[href$='.menu']").addClass('fa-solid fa-bars');

    $('.showbar').on('click',  function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show',500);
    });

    $('.showbar').on('click',  function(e){
        e.preventDefault();
        $('body').toggleClass('open');
    });

    // cart
    $("a[href$='.leaf']").addClass('fa-solid fa-leaf');
    $("a[href$='.cart']").addClass('fa-solid fa-cart-shopping');
    $("a[href$='.love']").addClass('fa-solid fa-heart');
    $("a[href$='.large']").addClass('fa-solid fa-magnifying-glass');
    $("a[href$='.dollar']").addClass('fa-solid fa-dollar-sign');
});