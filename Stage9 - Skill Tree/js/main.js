function skill_btn() {
  var num = 0
  $('button').click(function() {
    num++
    if (num % 2 != 0) {
      $(this).addClass('click')
      console.log(num)
    } else if (num % 2 == 0) {
      $(this).removeClass('click')
    }
  })
}
skill_btn()

