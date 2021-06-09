$(document).ready(function () {
    //navbar on click
    $('nav, #home, footer').find('a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset().top - 80;
        $('body').stop().animate({ scrollTop: $anchor },1000);
        return false;
    });
});   


$(document).ready(function() {
    $('html, body').hide();

    if (window.location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            $('html, body').animate({
                scrollTop: $(window.location.hash).offset().top - 80
                }, 1000)
        }, 0);
    }
    else {
        $('html, body').show();
    }
});

// burger icon click
$(document).ready(function(){
    $('#burger-container').on('click', function(){
        $(this).toggleClass("open");
        $('.nav-overlay').toggleClass("open");
        $('body').toggleClass("noscroll");
    });
});

$(document).ready(function(){
    $('.nav-overlay a').on('click', function(){
       $('#burger-container').toggleClass("open");
        $('.nav-overlay').toggleClass("open");
        $('body').toggleClass("noscroll");
    });
});
