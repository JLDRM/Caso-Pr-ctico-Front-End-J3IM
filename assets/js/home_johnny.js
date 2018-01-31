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

$("#bttn-emp").click(function (event) {
    event.preventDefault();
    $.post("http://www.mocky.io/v2/5a71af282f00003512776376", {
            mailemp: document.getElementById("mail-emp").value,
            passemp: document.getElementById("pass-emp").value
        },
        function (data, status) {
            window.location.href = './pagina_construccion.html';
        }).fail(err => {
        console.log(err);
    });
});

$("#bttn").click(function (event) {
    event.preventDefault();
    $.post("http://www.mocky.io/v2/5a71af982f0000a91377637c", {
            mail: document.getElementById("mail").value,
            pass: document.getElementById("pass").value
        },
        function (data, status) {
            window.location.href = '/perfil_usuario.html';
        }).fail(err => {
        console.log(err);
    });
});