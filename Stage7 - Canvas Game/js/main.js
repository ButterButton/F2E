var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d')

var ww = window.innerWidth
var wh = window.innerHeight

// var w = 1024
// var h = 768
var rectangle = '#E7465D'
var circle = '#F5AF5F'
var triangle = '#3676BB'
var main = '#001D2E'

canvas.width = ww
canvas.height = wh


$('#btn').click(function () {
  $('#mycanvas').hide()
  $('#playcanvas').show()
})

function index() {
  // 黃色圓形
  ctx.beginPath()
  ctx.arc(1200, 150, 50, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = circle
  ctx.fill()

  // 雷達大圓
  ctx.beginPath()
  ctx.arc(ww / 2, wh / 2, 300, 0, 2 * Math.PI)
  ctx.strokeStyle = '#FFF'
  ctx.stroke()

  // 雷達小圓
  ctx.beginPath()
  ctx.arc(ww / 2, wh / 2, 150, 0, 2 * Math.PI)
  ctx.strokeStyle = '#FFF'
  ctx.stroke()

  // 三角形
  ctx.beginPath()
  ctx.moveTo(1000, 625)
  ctx.lineTo(950, 675)
  ctx.lineTo(1025, 700)
  ctx.fillStyle = triangle
  ctx.fill()

  // 多邊形
  var num = 6
  var radius = 50
  ctx.beginPath()
  for (var i = 0; i <= num; i++) {
    var x = radius * Math.sin(Math.PI / 180 * 360 / num * i) + 400
    var y = radius * Math.cos(Math.PI / 180 * 360 / num * i) + 150
    ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.fillStyle = rectangle
  ctx.fill()

  // 文字主題
  ctx.font = '22px 微軟正黑體'
  ctx.fillStyle = '#FFF'
  ctx.fillText(' Radio Defense', ww / 2 - 80, wh / 2 + 50)

  // 文字介紹
  ctx.font = '22px 微軟正黑體'
  ctx.fillStyle = '#FFF'
  ctx.fillText(' 你身負著運送能量電池的任務', 50, 700)
  ctx.fillText(' 卻遭到幾何星人的埋伏', 50, 725)
  ctx.fillText(' 請協助從他們的手中奪回能量電池', 50, 750)

}


function draw() {
  ctx.fillStyle = main
  ctx.fillRect(0, 0, ww, wh)

  //格線
  let span = 50
  ctx.beginPath()
  for (var i = 0; i < ww; i += span) {
    ctx.moveTo(i, 0)
    ctx.lineTo(i, wh)
  }
  for (var i = 0; i < wh; i += span) {
    ctx.moveTo(0, i)
    ctx.lineTo(ww, i)
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'
  ctx.stroke()

  index()

}
draw()