let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

export default class npc {
  constructor(turntable) {
    this.turntable = turntable;
    this.img = new Image()
    this.img.src = 'images/lucky-bg.png';
    this.pointer = new Image();
    this.pointer.src = 'images/lucky-center.png';
  }

  update(src) {
    this.img.src = src
  }

  render() {
    this.treePosition();
    this.turntable.drawImage(this.img, this.x, this.y, 300, 300);
    this.turntable.drawImage(this.pointer, this.x, this.y, 300, 300);
    this.btnArea = {
      startX: screenWidth / 2 - 150,
      startY: screenHeight / 2 - 200,
      endX: screenWidth / 2 + 150,
      endY: this.y = screenHeight / 2 + 200
    }
  }

  treePosition() {
    this.x = screenWidth / 2 - 150
    this.y = screenHeight / 2 - 200
  }

  // renderLifebar() {
  //   this.blood = this.blood - 16
  //   this.ctx.fillStyle = "#222"
  //   this.ctx.fillRect(screenWidth / 2 - 95, 30, 190, 30)
  //   this.ctx.fillStyle = "red"
  //   this.ctx.fillRect(screenWidth / 2 - 90, 35, 180 * (this.blood / 6000), 20)
  // }

  lotteryDraw() {
    console.log(56)

    this.turntable.translate(300, 0);

    this.turntable.rotate(20 * Math.PI / 180);
    this.turntable.translate(-300, 0);
    this.turntable.clearRect(0, 0, 1200, 1200);
    go()
  }
}

function go() {
  var time = 3000;
  var a0 = (Math.random() + 5) / 100;
  var clock = 20;
  var interval = setInterval(function() {
    var a = time >= 1500 ? a0 : -a0;
    var v = time >= 1500 ? a * (3000 - time) : a0 * 1500 + a * (1500 - time);
    // sector.translate(600, 600);
    // sector.rotate(Math.PI / 180 * v);
    // sector.translate(-600, -600);
    // sector.clearRect(0, 0, 1200, 1200);
    // paintName(data);
    time -= clock;
    if (time == 0) {
      window.clearInterval(interval);
    }
  }, clock)
}