let bird;
let pipes;
let score;
let goFont;

// function preload() {
//   goFont = loadFont("assets/AvenirNextLTPro-Demi.otf");
// }

function setup() {
  createCanvas(400, 600);
  resetSketch();
}

function draw() {
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 80 === 0 && bird.y !== height) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird) || bird.y === height) {
      bird.death();
    }

    if (pipes[i].isOffScreen()) {
      pipes.splice(i, 1);
      score += 9;
    }
  }

  fill("#5e0eff");
  rect(310, 13, 85, 24);

  fill(0);
  //   textFont(goFont);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Score: " + score, 350, 25);
}

function keyPressed() {
  if (keyCode === 32) {
    bird.fly();
  } else if (keyCode === 13) {
    resetSketch();
  }
}

function mouseFly() {
  bird.fly();
}

function resetSketch() {
  score = 0;
  bird = new Bird();
  pipes = [];
  frameCount = 0;
  pipes.push(new Pipe());
}
