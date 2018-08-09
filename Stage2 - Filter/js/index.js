tainanJson = "../tainanapi.json"
var arr = new Array()
var test = new Array()

function removeDuplicates() {
    const districtResult = [...new Set(arr.map(item => JSON.stringify(item.district)))].map(item => JSON.parse(item))
    for (i = 0; i < districtResult.length; i++) {
        $('#select').append(
            $('<option>', {
                text: districtResult[i]
            })
        )
    }
    var districtLength = districtResult.length
    $('#info').append('<h3>' + 'Showing  ' + arr.length + '  results by…' + '</h3>')

}

$.ajax({
    type: "GET",
    dataType: "json",
    url: tainanJson,
    success: function (data) {
        $.each(data, function (index, ele) {
            var inner = {
                name: ele.name,
                district: ele.district,
                category: ele.category
            }
            arr.push(inner)
            test.push(inner.category)
            $('#right_column').append('<div class="block"><div class="main_img"></div><div class="main_content"><div class="title"><h3>' + ele.name + '</h3></div><div class="brief"><p>' + ele.introduction + '</p></div><div class="list"><span>' + ele.category[0] + '</span><span>' + ele.category[1] + '</span><span>' + ele.category[2] + '</span></div><div class="item"><div class="place"><i class="fas fa-map-marker-alt">' + ele.district + '</i><span> </span></div><div class="tel"><i class="fas fa-phone"></i><span>' + ele.tel + ' </span></div></div></div>')
        })
        console.log(test)
        removeDuplicates()

    }
})