$('li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$('i.navbar-toggler').on('click', function() {
    $("i.navbar-toggler").fadeToggle(200);
    $("i.navbar-toggler").toggleClass('fa fa-bars').toggleClass('fa fa-times-thin fa-3x');
    open = false;
});