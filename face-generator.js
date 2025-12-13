// User-defined variables for face attributes
let faceX, faceY;
let faceSize;
let petalColor;
let petalCount;
let eyeSize;
let eyeOffsetX, eyeOffsetY;
let mouthWidth, mouthHeight;
let mouthOffsetY;
let randomMode = false;
let petalHue;
let leftEyeRings;
let rightEyeRings;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  faceX = width / 2;
  faceY = height / 2;
}

function draw() {
  background(240);

  if (!randomMode) {
    // MOUSE-CONTROLLED MODE

    // face size from mouseX
    faceSize = mouseX / 2;
    faceSize = constrain(faceSize, 100, 300);

    // petal count from mouseY
    petalCount = floor(map(mouseY, 0, height, 6, 10));
    petalCount = constrain(petalCount, 6, 10);

    // hue from mouseX
    petalHue = map(mouseX, 0, width, 330, 90);
    petalHue = constrain(petalHue, 60, 330);

    // eye ring counts from x and y
    leftEyeRings = floor(map(mouseX, 0, width, 3, 7));
    rightEyeRings = floor(map(mouseY, 0, height, 3, 7));
    leftEyeRings = constrain(leftEyeRings, 3, 7);
    rightEyeRings = constrain(rightEyeRings, 3, 7);
  }

  colorMode(HSB);
  petalColor = color(petalHue, 60, 90);
  colorMode(RGB);

  eyeSize = faceSize * 0.3;
  eyeOffsetX = faceSize * 0.22;
  eyeOffsetY = faceSize * 0.12;
  mouthWidth = map(faceSize, 100, 300, 20, 31);
  mouthHeight = map(faceSize, 100, 300, 30, 20);
  mouthOffsetY = faceSize * 0.2;

  // Draw the flower face
  drawFlowerFace(
    faceX,
    faceY,
    faceSize,
    petalColor,
    petalCount,
    eyeSize,
    eyeOffsetX,
    eyeOffsetY,
    mouthWidth,
    mouthHeight,
    mouthOffsetY
  );
}

function drawFlowerFace(
  x,
  y,
  size,
  color,
  petals,
  eSize,
  eOffX,
  eOffY,
  mWidth,
  mHeight,
  mOffY
) {
  push();
  translate(x, y);

  // Draw flower petals
  fill(color);
  noStroke();

  const lineCount = floor(petals / 2);
  let angleStep = PI / lineCount;

  const halfLen = size * 0.45;
  const thickness = size * 0.35;

  strokeWeight(thickness);
  stroke(color);

  push();
  line(0, -halfLen, 0, halfLen);

  for (let i = 1; i < lineCount; i++) {
    rotate(angleStep);
    line(0, -halfLen, 0, halfLen);
  }

  pop();

  // Eyes
  // Left eye
  drawEye(-eOffX, -eOffY, eSize);

  // Right eye
  drawEye(eOffX, -eOffY, eSize);

  // Mouth
  push();
  noFill();
  strokeWeight(4);
  stroke("#E5422A");
  arc(0, mOffY, mWidth, mHeight, 0, PI, OPEN);
  pop();

  pop();
}

function drawEye(x, y, size) {
  const eyeColorRight = [
    "#F40220",
    "#FFFFFF",
    "#0019FF",
    "#FF7B30",
    "#0478F2",
    "#ECB617",
    "#0019FF",
  ];
  const eyeColorLeft = [
    "#F40220",
    "#FFFFFF",
    "#FF7B30",
    "#F40220",
    "#ECB617",
    "#0019FF",
    "#6869BA",
  ];
  const isLeftEye = x < 0;
  let ringCount = rightEyeRings;

  if (isLeftEye) {
    ringCount = leftEyeRings;
  }

  ringCount = constrain(ringCount, 1, eyeColorRight.length);

  const step = size / ringCount;

  noStroke();

  for (let i = 0; i < ringCount; i++) {
    const d = size - i * step;

    if (isLeftEye) {
      fill(eyeColorLeft[ringCount - 1 - i]);
    } else {
      fill(eyeColorRight[ringCount - 1 - i]);
    }
    ellipse(x, y, d, d);
  }
}

function mousePressed() {
  // Select random values

  if (randomMode) {
    faceSize = random(100, 300);
    petalCount = floor(random(6, 11));
    petalHue = random(60, 330);

    leftEyeRings = floor(random(3, 8));
    rightEyeRings = floor(random(3, 8));
  }
}

function keyPressed() {
  if (key == "t") {
    // Toggle between mouse-controlled and random mode
    randomMode = !randomMode;
  }
}
