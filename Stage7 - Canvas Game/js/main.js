var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext('2d')

var rectangle = '#E7465D'
var circle = '#F5AF5F'
var triangle = '#3676BB'
canvas.width = 600
canvas.height = 600

function draw() {
  ctx.clearRect(0, 0, 600, 600)

  // 繪製格線方便定位
  ctx.beginPath()
  ctx.fillStyle = 'black'
  for (var i = 0; i < 12; i++) {
    let pos = i * 50
    ctx.moveTo(pos, 0)
    ctx.lineTo(pos, 600)
    ctx.fillText(pos, pos, 12)

    ctx.moveTo(0, pos)
    ctx.lineTo(600, pos)
    ctx.fillText(pos, 12, pos)
  }
  ctx.strokeStyle = 'rgba(0,0,0,0.1)'
  ctx.stroke()

  // 圓形
  ctx.beginPath()
  ctx.arc(500, 150, 50, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = circle
  ctx.fill()

  // 三角形
  ctx.beginPath()
  ctx.moveTo(400, 400)
  ctx.lineTo(350, 500)
  ctx.lineTo(450, 500)
  ctx.fillStyle = triangle
  ctx.fill()
}
draw()