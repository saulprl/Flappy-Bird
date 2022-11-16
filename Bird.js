class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 70;
    this.r = 16;
    this.gravity = 0.8;
    this.velocity = 0;

    this.show = function () {
      fill("#262fff");
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };

    this.update = function () {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;

      this.y = constrain(this.y, 0, height);
    };

    this.fly = function () {
      this.velocity -= 20;
    };

    this.death = function () {
    //   textFont(goFont);
      fill("red");
      textSize(30);
      textAlign(CENTER, CENTER);
      text("Game Over", width / 2, height / 2);
      textSize(15);
      text("Press 'Enter' to try again.", width / 2, height / 2 + 35);
      this.velocity = 200;

      for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].speed = 0;
      }
    };
  }
}
