//  Carousel

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: false
    });
});


// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function() {
    header.classList.toggle("menu-open");
}

// Couner

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

