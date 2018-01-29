
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("navbarscroll");
    } else {
        $("#menu").removeClass("navbarscroll");
    }
});


$(window).scroll(function () {
    if ($("#menuhome").offset().top > 56) {
        $("#menuhome").addClass("dropdown-scroll");
    } else {
        $("#menuhome").removeClass("dropdown-scroll");
    }
});

