let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

export default class back {
  constructor(ctx) {
    this.ctx = ctx
  }

  render() {
    this.ctx.fillStyle = "#d34338"
    this.ctx.fillRect(0, 0, screenWidth, screenHeight)
    this.ctx.font = "18px Microsoft YaHei"
    this.ctx.fillStyle = "#ffd97a"
    this.ctx.fillText(
      '红包奖励永久加倍',
      screenWidth / 2 - 70,
      screenHeight / 2 +140
    )
    // console.log(screenHeight)
    this.ctx.fillStyle = "#ffd97a"
    this.ctx.fillRect(screenWidth / 2 - 100, screenHeight / 2+180, 200, 50)

    this.ctx.font = "20px Arial"
    this.ctx.fillStyle = "#d34338"
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(
      '邀请好友加倍奖励',
      screenWidth / 2 - 80 ,
      screenHeight / 2 + 180 + 25
    )

    this.btnArea = {
      startX: screenWidth / 2 - 100,
      startY: screenHeight / 2 + 180,
      endX: screenWidth / 2 + 100,
      endY: screenHeight / 2 + 180+50
    }
  }
  shareBtn(){
    // this.ctx.fillStyle = "#d34338"
    // this.ctx.fillRect(0, 0, screenWidth, screenHeight)
    // this.ctx.font = "24px Microsoft YaHei"
    // this.ctx.fillStyle = "#ffd97a"
    // this.ctx.fillText(
    //   '邀请好友加倍奖励',
    //   screenWidth / 2 - 100,
    //   screenHeight / 2 + 140
    // )
  }

  gameOver(score) {
    this.ctx.fillStyle = "#883a3a"
    this.ctx.fillRect(screenWidth / 2 - 150, screenHeight / 2 - 100, 300, 160)
    this.ctx.font = "24px Microsoft YaHei"
    this.ctx.fillStyle = "#fefefe"
    this.ctx.fillText(
      '游戏结束',
      screenWidth / 2 - 50,
      screenHeight / 2 - 100 + 40
    )

    this.ctx.fillText(
      '得分: ' + score,
      screenWidth / 2 - 50,
      screenHeight / 2 - 100 + 80
    )

    this.ctx.fillRect(screenWidth / 2 - 100, screenHeight / 2, 200, 50)

    this.ctx.fillStyle = "#883a3a"
    this.ctx.fillText(
      '重新开始',
      screenWidth / 2 - 50,
      screenHeight / 2 - 100 + 130
    )

    this.btnArea = {
      startX: screenWidth / 2 - 150,
      startY: screenHeight / 2 - 100,
      endX: screenWidth / 2 + 150,
      endY: screenHeight / 2 - 100 + 160
    }
  }
}