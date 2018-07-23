var canvas = document.getElementById('playcanvas')
var ctx = canvas.getContext('2d')


var ww = window.innerWidth
var wh = window.innerHeight

let degToPi = Math.PI * 2 / 360

canvas.width = ww
canvas.height = wh

var main_color = '#001D2E'

//船
class Ship {
  constructor(args) {
    let def = {
      x: 0,
      y: 0,
      r: 50,
      deg: 50 * degToPi
    }
    Object.assign(def, args)
    Object.assign(this, def)
  }
  draw() {

    ctx.translate(ww / 2, wh / 2)
    ctx.rotate(ship.deg)

    ctx.fillStyle = 'white'
    ctx.fillRect(50, -25 / 2, 25, 25)

    ctx.beginPath()
    ctx.arc(0, 0, ship.r, 0, Math.PI * 2)
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 20

    ctx.shadowBlur = 20
    ctx.shadowColor = 'white'
    ctx.stroke()

    //Benz
    for (var i = 0; i < 3; i++) {
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -ship.r)
      ctx.stroke()
      ctx.rotate(Math.PI * 2 / 3)
    }
  }
}


class Bullet {
  constructor(args) {
    let def = {
      x: 0,
      y: 0,
      v: {
        x: 0,
        y: 0
      }
    }
    Object.assign(def, args)
    Object.assign(this, def)
  }
  update() {
    this.x += this.v.x
    this.y += this.v.y
  }
  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 10, 10)
    ctx.restore()
  }
}

var ship

function init() {
  ship = new Ship({
    deg: 0 * degToPi
  })
}


var time = 0
var bullets = []

function update() {
  ship.deg = mousePos.x / 50
  time++
  if (time % 30 == 0) {
    var b = new Bullet({
      x: ww / 2 + Math.cos(ship.deg) * ship.r,
      y: wh / 2 + Math.sin(ship.deg) * ship.r,
      v: {
        x: Math.cos(ship.deg) * 10,
        y: Math.sin(ship.deg) * 10
      }
    })
    bullets.push(b)
  }
  bullets.forEach(b => b.update())
}

function draw() {
  //背景
  ctx.fillStyle = main_color
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

  ctx.save()
  ship.draw()
  ctx.restore()

  bullets.forEach(b => b.draw())
  //方塊
  // ctx.fillStyle='white'
  // ctx.fillRect(ship.x,ship.y,50,50)

  requestAnimationFrame(draw)
}

init()
let fps = 60
setInterval(update, 1000 / fps)
requestAnimationFrame(draw)


var mousePos = {
  x: 0,
  y: 0
}

canvas.addEventListener('mousemove', function (evt) {

  mousePos.x = evt.x
  mousePos.y = evt.y
})