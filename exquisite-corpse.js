const THEME = {
  bg: "#fff7ed",
  black: "#0a0a0a",
  blue: "#295cff",
  red: "#dc0022",
  yellow: "#ffd700",
  mint: "#00dd9d",
  white: "#ffffff",
  green: "#7cff78",
};

const PADDING = 5;
let SELECTION = "mixed";

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(THEME.bg);

  //draw head
  drawBody(THEME, SELECTION);
  drawLabel(`${SELECTION.toUpperCase()}`);

  showGuides(height / 3);
}

function keyPressed() {
  if (key === "t") SELECTION = SELECTION === "mixed" ? "whole" : "mixed";
  redraw();
}

function drawLabel(txt) {
  push();
  noStroke();
  fill(0, 20);
  rect(10, 10, 105, 28, 6);
  rect(10, 45, textWidth(txt) + 30, 28, 6);
  fill("#111");
  textSize(12);
  textAlign(LEFT, CENTER);
  text("Corpse Type ", 20, 24);
  text(txt, 20, 60);
  text("*press 't' to toggle", 10, 85);
  pop();
}

function showGuides(H3) {
  push();
  stroke(THEME.mint);
  strokeWeight(2);
  line(0, 0, 400, 0);
  line(0, H3, 400, H3);
  line(0, H3 * 2, 400, H3 * 2);
  line(0, height, 400, height * 2);
  pop();
}

// Inputs:
// cx, cy - section center
// h - section height
// c - color theme
// version - mixed / whole
function drawBody(c, version = "mixed") {
  const cx = width / 2;
  const cy = height / 2;

  const H3 = height / 3;
  const headY = PADDING;
  const torsoY = H3 + PADDING;
  const legsY = H3 * 2 + PADDING;

  let HEAD, TORSO, LEGS;

  switch (version) {
    case "mixed":
      HEAD = claraHead;
      TORSO = tashaTorso;
      LEGS = theaLegs;
      break;

    case "whole":
      HEAD = tashaHead;
      TORSO = tashaTorso;
      LEGS = tashaLegs;
      break;

    default:
      HEAD = tashaHead;
      TORSO = tashaTorso;
      LEGS = tashaLegs;
      break;
  }

  HEAD(cx, headY, H3, c);
  TORSO(cx, torsoY, H3, c);
  LEGS(cx, legsY, H3, c);
}

function claraHead(cx, topY, h, c) {
  //define the head
  push();
  translate(cx, topY + h / 2);
  scale(0.4);
  noStroke();
  fill(c.green);
  circle(0, 15, 400);
  rect(-200, 25, 400, 200);
  fill("white");
  circle(0, 0, 150);
  fill("black");
  circle(20, -30, 50);
  pop();
}

// Inputs:
// h - section height
// cx, cy - section center
// c - color theme
function tashaHead(cx, topY, h, c) {
  // translate to top segement
  push();
  translate(cx, topY);

  noStroke();
  // Bun - 20px padding from top
  fill(c.black);
  arc(0, 0, 150, 150, 0, 180, CHORD);

  // Hair tie
  fill(c.yellow);
  rect(-20, 75, 40, 15, 5);

  // Face
  fill(c.black);
  circle(0, 140, 100);

  // Glasses
  fill(c.blue);
  stroke(c.yellow);
  strokeWeight(4);
  circle(-26, 140, 45);
  circle(26, 140, 45);

  // Mouth
  noStroke();
  fill(c.red);
  circle(0, 170, 15);

  fill(c.white);
  ellipse(0, 170, 9, 6);
  pop();
}

// Inputs:
// h - section height
// cx, cy - section center
// c - color theme
function tashaTorso(cx, topY, h, c) {
  // Chest - triangle
  push();
  translate(cx, topY);
  fill(c.blue);
  stroke(c.blue);
  strokeWeight(4);
  strokeJoin(ROUND);
  triangle(-50, 0, 50, 0, 0, 75);

  // Belly - circle
  noStroke();
  fill(c.red);
  circle(0, 102, 45);

  // Skirt - Semi circle
  fill(c.blue);
  arc(0, h - 10, 300, 125, 180, 0);

  // Arms
  fill(c.black);
  stroke(c.black);
  triangle(-55, 2, -37, 30, -80, 85);
  triangle(55, 2, 37, 30, 80, 85);

  // Bangles
  strokeWeight(7);
  stroke(c.yellow);
  line(-95, 90, -75, 100);
  line(95, 90, 75, 100);

  // Hands
  noStroke();
  fill(c.black);
  circle(-95, 115, 25);
  circle(95, 115, 25);

  pop();
}

function tashaLegs(cx, topY, h, c) {
  push();
  translate(cx, topY);
  fill(0);
  stroke(0);
  strokeWeight(3);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  translate(-10, 0);
  triangle(0, 0, 50, 0, 0, 140);

  //anklet
  noStroke();
  fill(c.yellow);
  rect(-12, 145, 20, 8, 5);

  //Feet
  fill(c.black);
  circle(-4, 170, 22);

  push();
  // Reflect
  translate(20, 0);

  scale(-1, 1);

  stroke(255);
  strokeWeight(5);
  triangle(0, 0, 50, 0, 0, 140);
  stroke(0);
  strokeWeight(3);
  triangle(0, 0, 50, 0, 0, 140);
  noStroke();
  fill(THEME.yellow);
  rect(-12, 145, 20, 8, 5);

  fill(0);
  circle(-4, 170, 22);

  pop();
  pop();
}

function theaLegs(cx, topY, h, c) {
  push();
  translate(cx, topY);
  // Legs
  fill(THEME.red);
  noStroke();
  rect(-70, 0, 40, 160, 10);
  rect(30, 0, 40, 160, 10);

  // Feet (triangles)
  triangle(-90, 170, -10, 170, -50, 120);
  triangle(10, 170, 90, 170, 50, 120);
  pop();
}
