export default function (ctx){
  let obj={
    bg: new Image(),
    width: window.innerWidth,
    height: window.innerHeight,
    move: function (top){
      ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height, 0, top, this.width, this.height);
      ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height, 0, -this.height + top, this.width, this.height);
    }
  }
  obj.bg.src = './images/bg.jpg';
  obj.bg.width = 512;
  obj.bg.height = 512;

 return obj;
}
      // ctx.clearRect(0, 0, this.width, this.height);      
