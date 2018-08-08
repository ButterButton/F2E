tainanJson = "../tainanapi.json"

function Tags() {

}

$.ajax({
    type: "GET",
    dataType: "json",
    url: tainanJson,
    success: function (data) {
        $.each(data, function (index, ele) {
            $('#select').append(
                $('<option>', {
                    text: ele.district
                })
            )
            if (ele.id == "466") {
                $('.title > h3').append(ele.name)
                $('.brief > p').append(ele.introduction)
                $('.list').append(
                    $('<span>', {
                        text: ele.category[0]
                    }),
                    $('<span>', {
                        text: ele.category[1]
                    }),
                    $('<span>', {
                        text: ele.category[2]
                    })
                )
                $('.item > .place > span').append(ele.district)
                $('.item > .tel > span').append(ele.tel)
            }
        })
    }
})