$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navigation");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('navigation').addClass("scrollNavigation");
        } else {
            header.removeClass("scrollNavigation").addClass('navigation');
        }
    });
});