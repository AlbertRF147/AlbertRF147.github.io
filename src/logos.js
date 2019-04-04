// Make vx be always more than +-0.2
function getRandomNumber() { 
  let randomNumber = 2 * Math.random() - 1; // Between 1 and -1

  while (true) {
    if (randomNumber > 0.2 || randomNumber < -0.2) {
      break;
    } else {
      randomNumber = 2 * Math.random() - 1;
    }
  }

  return randomNumber;
  
 }

export default class Logo {
  constructor(source, scale) {
    this.x = canvas.width / 2; // Start at the center of the canvas
    this.y = canvas.height / 2;
    this.vx = getRandomNumber() ; // From -2 to 2
    this.vy = getRandomNumber();
    this.img = new Image();
    this.img.src = source;
    this.height = canvas.height * 0.3;
    this.width = this.height; // 1% of the canvas width
    this.scale = scale;
    this.vscale = 0.001;
  }

  draw(ctx) {
    var self = this;
    ctx.drawImage(
      self.img,
      self.x,
      self.y,
      (self.width * self.scale),
      (self.height * self.scale)
    );
  }

  update() {
    var self = this;

    this.scale += this.vscale;

    if (this.scale > 1.2) {
      this.vscale = -0.001;
    }
    if (this.scale < 0.9) {
      this.vscale = 0.001;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.vy > canvas.height - this.height || this.y + this.vy < 0) {
      // The logo is 64x64
      this.vy = -this.vy;
    }
    if (this.x + this.vx > canvas.width - this.height || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }

  }
}