// import Databus from './base/databus.js'
import Back from './base/bgColor.js'
// import Tree from './base/tree.js'
import Npc from './base/npc.js'
import Gameinfo from './base/gameinfo.js'
import Money from './base/money.js'
import Diamonds from './base/diamonds.js'

let ctx = canvas.getContext('2d')
let turntable = canvas.getContext('2d');


let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

export default class main {
  constructor() {
    this.restart = false
    this.init()
  }

  init() {
    // databus.reset()
    canvas.removeEventListener('touchstart', this.touchHandler)
    wx.triggerGC()
    /*降低帧率*/
    //wx.setPreferredFramesPerSecond(20)
    console.log(turntable)
    this.back = new Back(ctx)
    this.npc = new Npc(turntable)
    this.gameinfo = new Gameinfo(ctx)
    this.money = new Money(ctx)
    this.diamonds = new Diamonds(ctx)

    // for (var i = 1; i < 12; i++) {
    //   let _img = this.randomTree()
    //   let _tree = databus.pool.getItemByClass('tree', Tree, ctx, _img.img, _img.p)
    //   databus.pushTree(_tree)
    // }

    this.touch()
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }

  //循环
  loop() {
    let that = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.back.render();
    this.npc.render();
    this.money.render();
    this.diamonds.render();

    // for (var k in databus.trees) {
    //   databus.trees[k].renderTree(k)
    // }
    // this.npc.renderLifebar()
    // /*检测结束*/
    // if (databus.gameOver || this.npc.blood < 0.017) {
    //   databus.gameOver = true
    //   this.gameinfo.gameOver(databus.score)
    // canvas.removeEventListener('touchstart', this.touchCuttrees)
    // this.touchHandler = that.touchEventHandler.bind(this)
    // canvas.addEventListener('touchstart', this.touchHandler)
    //   return
    // } else {
    //   this.gameinfo.render(databus.score)
    // }

    window.requestAnimationFrame(
      this.loop.bind(this),
      this.setShare(),
      canvas
    )
  }

  run() {
    /*计算当前点击位置*/
    console.log(465465)

    this.collisionDetection()
    if (databus.gameOver) {
      return
    }
    let tap = this.touchX >= screenWidth / 2
    if (!(this.npc.posi == tap)) {
      this.npc.posi = !this.npc.posi
      return
    }

    databus.score++
      this.npc.blood = (this.npc.blood + 160 >= 6000) ? 6000 : this.npc.blood + 160
    /*木头池*/
    databus.shiftTree() //弹出		
    let _img = this.randomTree()
    let _tree = databus.pool.getItemByClass('tree', Tree, ctx, _img.img, _img.p)
    databus.pushTree(_tree)
  }

  /*随机产生木头*/
  randomTree() {
    /*判断上一个木头*/
    let _a, _b, _random = true;
    let random = Math.random()
    let last = true
    if (databus.trees.length > 0) {
      last = databus.trees[databus.trees.length - 1].posiDr
    }
    if (last == "center") {
      if (random <= 0.3334) {
        _a = treeRight
        _b = true
      } else if (random > 0.3334 && random <= 0.6667) {
        _a = treeLeft
        _b = false
      } else {
        _a = treeCen
        _b = "center"
      }

    } else {
      _a = treeCen
      _b = "center"
    }
    return {
      img: _a,
      p: _b
    }
  }

  /*碰撞检测*/
  collisionDetection() {
    let isCollision = (this.npc.posi == databus.trees[0].posiDr)
    isCollision && (databus.gameOver = true) && (this.npc.update(npcDie))
  }

  //游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    console.log(x)
    console.log(y)
    let area = this.diamonds.btnArea
    console.log(area)
    // if (x >= area.startX &&
    //   x <= area.endX &&
    //   y >= area.startY &&
    //   y <= area.endY) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   this.init()
    // }
  }

  /**
   * 开始点击
   * */
  touchCuttree(e) {
    console.log('开始点击')
    e.preventDefault()
    let that = this;
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    let diamondsArea = this.diamonds.btnArea;
    let moneyArea = this.money.btnArea;
    let shareArea = this.back.btnArea;
    let pointerArea = this.npc.btnArea;

    if (x >= diamondsArea.startX &&
      x <= diamondsArea.endX &&
      y >= diamondsArea.startY &&
      y <= diamondsArea.endY) {
      console.log('点击钻石')
    }

    if (x >= moneyArea.startX &&
      x <= moneyArea.endX &&
      y >= moneyArea.startY &&
      y <= moneyArea.endY) {
      console.log('点击金额')
    }

    if (x >= shareArea.startX &&
      x <= shareArea.endX &&
      y >= shareArea.startY &&
      y <= shareArea.endY) {
      console.log('点击分享')
      this.share();
    }

    if (x >= pointerArea.startX &&
      x <= pointerArea.endX &&
      y >= pointerArea.startY &&
      y <= pointerArea.endY) {
      console.log('点击指正')
      console.log(ctx)
      this.npc.lotteryDraw();
      // var deg = 360;
      // setInterval(function () {
      //   rotate(deg * 180 / Math.PI);
      //   deg / 9;
      // }, 100)

      // var rotate = function (deg) {
      //   ctx.rotate(deg);
      //   ctx.fillRect(-50, -50, 100, 100);
      //   ctx.clearRect(-50, -50, 100, 100);
      //   ctx.beginPath();
      //   ctx.moveTo(-100, -100);
      //   ctx.lineTo(100, 100);
      //   ctx.moveTo(-100, 100);
      //   ctx.lineTo(100, -100);
      //   ctx.closePath();
      //   ctx.strokeStyle = "#00ff00";
      //   ctx.stroke();
      // }

    }
    // if (databus.gameOver) {
    //   return
    // }
    // that.npc.update(npcMove)
    // setTimeout(() => {
    //   that.npc.update(npcImg)
    // }, 100)
    // that.touchX = e.touches[0].clientX;
    // that.run()
  }

  touch() {
    let that = this;
    this.touchCuttrees = that.touchCuttree.bind(this) // 更改this指向
    canvas.addEventListener('touchstart', this.touchCuttrees)
  }

  share() {
    wx.showShareMenu({
      withShareTicket: true
    })

    wx.shareAppMessage({
      title: '转发标题',
      imageUrl: 'https://mtshop1.meitudata.com/5ad58b143a94621047.jpg',
      query: 'key1=1&key2=2',
      success: (res) => {
        console.log(res)
        // 问题页面因为没有设置loop 绘制，分享完成后会黑屏，需要重新绘制canvas
        // if (DataStore.getInstance().currentCanvas === 'questionCanvas') {
        //   DataStore.getInstance().ctx.drawImage(DataStore.getInstance().offScreenCanvas, 0, 0, screenWidth, screenHeight);
        // }
        // if (res.shareTickets) {
        //   let shareTicket = res.shareTickets[0];
        //   DataStore.getInstance().shareTicket = shareTicket;
        // }
      },
      fail: (res) => {

      }
    })
  }

  setShare() {
    wx.showShareMenu({
      withShareTicket: true,
    });
    wx.onShareAppMessage(function() {
      // 用户点击了“转发”按钮
      return {
        title: '转发标题',
        imageUrl: 'https://mtshop1.meitudata.com/5ad58b143a94621047.jpg',
        query: 'key1=1&key2=2',
        success: (res) => {
          // 问题页面因为没有设置loop 绘制，分享完成后会黑屏，需要重新绘制canvas
          // if (DataStore.getInstance().currentCanvas === 'questionCanvas') {
          //   DataStore.getInstance().ctx.drawImage(DataStore.getInstance().offScreenCanvas, 0, 0, screenWidth, screenHeight);
          // }
          // if (res.shareTickets) {
          //   let shareTicket = res.shareTickets[0];
          //   DataStore.getInstance().shareTicket = shareTicket;
          // }
        },
        fail: (res) => {

        }
      }
    })
  }
}