export default function(ctx){
  let obj={
    planeImg:new Image(),
    drawPlane:function(){
      ctx.drawImage(this.planeImg, 0, 0, this.planeImg.width, this.planeImg.height, 0, 0, 80, 80);
    }
  }
  obj.planeImg.src='./images/hero.png'
  obj.planeImg.width=186;
  obj.planeImg.height=130;

  return obj;
}