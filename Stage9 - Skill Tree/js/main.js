function skill_btn(c) {
  if (!$(c).hasClass('click')) {
    $(c).addClass('click')
  } else {
    $(c).removeClass('click')
  }
}