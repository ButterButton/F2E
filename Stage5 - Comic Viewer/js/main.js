$('img.lazy').lazyload();

function btn_navbar() {
    $('#prev').click(function () {
        $('.footer').scrollLeft($('.footer').scrollLeft() - 50);
    });

    $('#next').click(function () {
        $('.footer').scrollLeft($('.footer').scrollLeft() + 50);
    });
    $('li img').click(function () {
        var N = $(this).attr('src');
        $('.comics').attr('src', N);
    });
}

function btn_switch() {
    var result = [];
    var oldsrc = $(this).attr('src');
    $.each($('.ulnav').find('img'), function (index, img) {
        var oldsrc = $(this).attr('src');

        $('button.right').click(function () {
            $('.comics').attr('src', oldsrc);
            console.log(oldsrc);
        });
    });


    // $('button.left').click(function () {

    // });
}

btn_navbar();
btn_switch();