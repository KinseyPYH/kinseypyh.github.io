$(document).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('#toTop:hidden').stop(true, true).fadeIn();
        $('#toTop').on("click", function() {
            $(document).scrollTop(0);
        });
        $('#toTop').show();
    } else {
        $('#toTop').stop(true, true).fadeOut();
        $('#toTop').hide();
    }
});