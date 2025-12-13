// ui.js
// Shared share ui components

function drawCard(x, y, w, h, r = 18, fillCol = COLORS.paper, strokeCol = COLORS.paperBorder) {
  fill(fillCol);
  stroke(strokeCol);
  strokeWeight(2.5);
  rect(x, y, w, h, r);
}

function drawCardTitle(txt, xCenter, y, size = 22, col = COLORS.text) {
  fill(col);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(size);
  text(txt, xCenter, y);
}

function drawCardBody(txt, xCenter, y, size = 15, col = COLORS.text) {
  fill(col);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(size);
  text(txt, xCenter, y);
}

function drawSmallHint(txt, xCenter, y, size = 14, col = COLORS.textLight) {
  fill(col);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(size);
  text(txt, xCenter, y);
}