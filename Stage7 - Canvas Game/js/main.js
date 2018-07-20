var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d')

// var w = $(window).width()
// var h = $(window).height()
var w = 1024
var h = 768
var rectangle = '#E7465D'
var circle = '#F5AF5F'
var triangle = '#3676BB'

canvas.width = w
canvas.height = h

function draw() {
  ctx.clearRect(0, 0, w, h)

  // 繪製格線方便定位
  ctx.beginPath()
  ctx.fillStyle = 'white'
  for (var i = 0; i < 21; i++) {
    let pos = i * 50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, h)
    ctx.fillText(pos, pos, 21)

    ctx.moveTo(0, pos)
    ctx.lineTo(w, pos)
    ctx.fillText(pos, 21, pos)
  }
  ctx.strokeStyle = 'white'
  ctx.stroke()

  // 黃色圓形
  ctx.beginPath()
  ctx.arc(850, 150, 50, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = circle
  ctx.fill()

  // 雷達大圓
  ctx.beginPath()
  ctx.arc(500, 400, 300, 0, 2 * Math.PI)
  ctx.strokeStyle = '#FFF'
  ctx.stroke()

  // 雷達小圓
  ctx.beginPath()
  ctx.arc(500, 400, 150, 0, 2 * Math.PI)
  ctx.strokeStyle = '#FFF'
  ctx.stroke()


  // 三角形
  ctx.beginPath()
  ctx.moveTo(700, 625)
  ctx.lineTo(650, 675)
  ctx.lineTo(725, 700)
  ctx.fillStyle = triangle
  ctx.fill()

  // 多邊形
  var num = 6
  var radius = 50
  ctx.beginPath()
  for (var i = 0; i <= num; i++) {
    var x = radius * Math.sin(Math.PI / 180 * 360 / num * i) + 150
    var y = radius * Math.cos(Math.PI / 180 * 360 / num * i) + 150
    ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.fillStyle = rectangle
  ctx.fill()

  // 文字主題
  ctx.font = '22px 微軟正黑體'
  ctx.fillStyle = '#FFF'
  ctx.fillText(' Radio Defense', 425, 450)

  // 文字介紹
  ctx.font = '22px 微軟正黑體'
  ctx.fillStyle = '#FFF'
  ctx.fillText(' 你身負著運送能量電池的任務', 50, 600)
  ctx.fillText(' 卻遭到幾何星人的埋伏', 50, 625)
  ctx.fillText(' 請協助從他們的手中奪回能量電池', 50, 650)


}
draw()