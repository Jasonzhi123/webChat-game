import './js/libs/weapp-adapter.js';
import Background from './js/components/background.js';
import audio from './js/components/audio.js';
import Plane from './js/components/plane.js';

let ctx = canvas.getContext('2d');
let background = Background(ctx);
let plane = Plane(ctx);
let width = window.innerWidth
let height = window.innerHeight
audio();

let top = 0
render();

function render() {
  top++;
  if (top > height) {
    top = 0
  }
  requestAnimationFrame(function () {
    ctx.clearRect(0, 0, width, height);
    background.move(top);
    plane.drawPlane();
    render();
  })
}

