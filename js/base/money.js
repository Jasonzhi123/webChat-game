import { drawEllipse } from '../utils/index';
let screenHeight = window.innerHeight
let screenWidth = window.innerWidth

export default class money {
  constructor(ctx) {
    this.ctx = ctx;
    this.sum=0
  }

  render() {
    drawEllipse(this.ctx, 50, 80, 40, 20,'red');
    this.ctx.font = "16px Microsoft YaHei"
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = "#fff"
    this.ctx.fillText(
      `￥ ${this.sum}元`,
      20,
      80
    )
    this.btnArea = {
      startX: 0,
      startY: 80,
      endX: 150,
      endY: 100
    }
  }
}

// function drawEllipse(ctx, x, y, rx, ry, color) {
//   var r = Math.min(rx, ry),
//     scale_x = rx / r,
//     scale_y = ry / r;
//   ctx.save();
//   ctx.scale(scale_x, scale_y);
//   ctx.beginPath();
//   ctx.arc(x / scale_x, y / scale_y, r, 0, Math.PI * 2, true);
//   ctx.closePath();
//   ctx.stroke();
//   ctx.fillStyle = color;
//   ctx.fill();
//   ctx.restore();
// }