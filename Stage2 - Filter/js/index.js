tainanJson = "../tainanapi.json"
var arr = new Array()
$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: tainanJson,
        success: function (data) {
            $.each(data, function (index, ele) {
                var inner = {
                    name: ele.name,
                    introduction: ele.introduction,
                    district: ele.district,
                    category: ele.category,
                    tel: ele.tel
                }
                arr.push(inner)
                $('#right_column').append('<div class="block"><div class="main_img"></div><div class="main_content"><div class="title"><h3>' + ele.name + '</h3></div><div class="brief"><p>' + ele.introduction + '</p></div><div class="list"><span>' + ele.category[0] + '</span><span>' + ele.category[1] + '</span><span>' + ele.category[2] + '</span></div><div class="item"><div class="place"><i class="fas fa-map-marker-alt">' + ele.district + '</i><span> </span></div><div class="tel"><i class="fas fa-phone"></i><span>' + ele.tel + ' </span></div></div></div>')
            })
            duplicatesRemove()
        }
    })
})

function tagsShow() {
    $('#ul>li').remove()
    $(':checkbox').each(function () {
        if ($(this).prop('checked')) {
            var tags = $(this).val()
            $('#ul').append('<li>' + tags + '</li>')
        }
    })
}

function duplicatesRemove() {
    //去除陣列重複物件，先將物件轉為字串比較
    const districtResult = [...new Set(arr.map(item => JSON.stringify(item.district)))].map(item => JSON.parse(item))
    const categoryResult = [...new Set(arr.map(item => JSON.stringify(item.category[0])))].map(item => JSON.parse(item))
    // console.log(categoryResult)
    for (i = 0; i < districtResult.length; i++) {
        $('#select').append(
            $('<option>', {
                text: districtResult[i]
            })
        )
    }
    for (i = 0; i < categoryResult.length; i++) {
        $('#categorie').append('<input type="checkbox"  onclick="tagsShow(this)" id="' + 'check' + i + '" value="' + categoryResult[i] + '">' + '</input>' + '<label for="' + 'check' + i + '">' + categoryResult[i] + '</label>' + '<br>')
    }
    var districtLength = districtResult.length
    $('#info').append('<h3>' + 'Showing ' + arr.length + ' results by…' + '</h3>')
}

function locationFilter(c) {
    var txt = $('#select :selected').text()
    $('#right_column').empty()
    $('#info').append('<h3>' + 'Showing ' + arr.length + ' results by…' + '</h3>')
    var locationarr = arr.filter(function (item, index, array) {
        if (txt == item.district) {
            $('#right_column').append('<div class="block"><div class="main_img"></div><div class="main_content"><div class="title"><h3>' + item.name + '</h3></div><div class="brief"><p>' + item.introduction + '</p></div><div class="list"><span>' + item.category[0] + '</span><span>' + item.category[1] + '</span><span>' + item.category[2] + '</span></div><div class="item"><div class="place"><i class="fas fa-map-marker-alt">' + item.district + '</i><span> </span></div><div class="tel"><i class="fas fa-phone"></i><span>' + item.tel + ' </span></div></div></div>')
        }
    })
}