var num = 0

// function ChangeCss() {
//   $('button').click(function () {
//     if (!$(this).hasClass('click')) {
//       num++
//       $(this).addClass('click')
//       $('span:eq(2)').text(num + '/4')
//     } else {
//       $(this).removeClass('click')
//       num--
//       $('span:eq(2)').text(num + '/4')
//     }
//   })
// }

function ChangeCss(c) {
  if (!$(c).hasClass('click')) {
    num++
    $(c).addClass('click')
    $('span:eq(2)').text(num + '/4')
  } else {
    $(c).removeClass('click')
    num--
    $('span:eq(2)').text(num + '/4')
  }
}

// function CatchId() {
//   $("div[id^='list_']").each(function () {
//     var test = $(this).prop('id')
//     console.log(test)
//   })
// }
// CatchId()

function SwitchDiv() {
  $('.list').click(function () {
    if ($(this).hasClass('list1')) {
      $('#b1').removeClass('none')
      $('#b2').addClass('none')
      console.log('1')
    } else if ($(this).hasClass('list2')) {
      $('#b2').removeClass('none')
      $('#b1').addClass('none')
      console.log('2')
    }
  })
}
SwitchDiv()
