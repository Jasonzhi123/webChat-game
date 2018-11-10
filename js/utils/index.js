function drawEllipse(ctx, x, y, rx, ry, color) {
  var r = Math.min(rx, ry),
    scale_x = rx / r,
    scale_y = ry / r;

  ctx.save();
  ctx.scale(scale_x, scale_y);

  ctx.beginPath();
  ctx.arc(x / scale_x, y / scale_y, r, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
  
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

module.exports = {
  drawEllipse,  //画椭圆
}