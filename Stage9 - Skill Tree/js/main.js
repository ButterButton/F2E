function skill_btn(c) {
  if (!$(c).hasClass('click')) {
    $(c).addClass('click')
  } else {
    $(c).removeClass('click')
  }
}
// 鎖右健
$(document).ready(function() {
  $('.list').bind('contextmenu', function(event) {
    return false
  })
})

/*
  1 = Left   mouse button
  2 = Centre mouse button
  3 = Right  mouse button
*/
$('.list').mousedown(function(event) {
  switch (event.which) {
    case 1:
      console.log('左鍵')
      break
    case 3:
      console.log('右鍵')
      break
  }
})
