$('li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function() {
    $('.dropdown').on('click', function(e) {
        e.stopPropagation();
        var $dropdownMenu = $(this).find('.dropdown-menu');
        $dropdownMenu.toggleClass('show');
    });

    $(document).on('click', function(e) {
        if (!$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) {
            $('.dropdown-menu').removeClass('show');
        }
    });
});