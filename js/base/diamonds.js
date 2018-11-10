// 钻石
let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

export default class money {
  constructor(ctx) {
    this.ctx = ctx;
    this.score=0;   //数量
  }

  render() {
    this.ctx.font = "18px Microsoft YaHei"
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(
      '钻',
      screenWidth - 25,
      80
    )
    this.ctx.font = "24px Microsoft YaHei"
    this.ctx.fillText(
      this.score,
      screenWidth - 50,
      80
    )
    this.btnArea = {
      startX: screenWidth - 60,
      startY: 70,
      endX: screenWidth ,
      endY: 110
    }
  }
}

