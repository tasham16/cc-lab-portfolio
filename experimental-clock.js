let RINGS = [0, 5, 10, 20, 40, 80, 120];
const YEARS_PER_MIN = 120;

let INNER_R = 30;
let OUTER_R, BORDER_R;
let cx, cy;
let startMs;
let prevRefYrs = 0;

let angles = [];
let tempos = [];
let RING_RADII = [];
let TICK_LOCK = [];

const TICK_ACTIVE = () => color(186, 230, 253);
const STATUS = {
  flourishing: "#22c55e",
  strong: "#a3e635",
  vulnerable: "#facc15",
  endangered: "#fb7185",
  extinct: "#b91c1c",
};

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-canvas");
  angleMode(RADIANS);

  cx = width / 2;
  cy = height / 2;
  OUTER_R = min(width, height) * 0.38;
  BORDER_R = min(width, height) * 0.45;

  startMs = hour() * 60 + minute() + second() / 60;

  // Compute ring radii in pixels
  RING_RADII = RINGS.map(radiusForYearsElapsed);

  // Compute tribes
  // const preCalcTribes = []

  const n = tribes.length;
  for (let i = 0; i < n; i++) {
    const theta = -HALF_PI + TWO_PI * (i / n); // start at top (12 o'clock)
    angles[i] = theta;

    const f = fieldsForTribe(tribes[i]);
    tempos[i] = tempo(f);
  }

  // saveJSON(preCalcTribes, 'tribes_risk.json')

  TICK_LOCK = tribes.map(() => ({ locked: false }));
}

function draw() {
  background(15, 23, 42);
  noStroke();
  fill(219, 234, 254);
  strokeWeight(2);
  drawingContext.shadowBlur = 0;

  const refYrs = refYears_clockSession();
  drawRings(refYrs);
  drawTribeMarkers(refYrs);
  drawFlower(refYrs);

  drawLegend();
}

// Rings
function ringIndexForYears(y) {
  for (let i = 0; i < RINGS.length; i++) {
    const a = RINGS[i];
    const b = RINGS[i + 1] ?? HORIZON_YEARS + 1;
    if (y >= a && y < b) return i;
  }
  return RINGS.length - 1;
}

function drawRings(refYrs) {
  push();
  translate(cx, cy);

  const activeIdx = ringIndexForYears(refYrs);
  const extinct = countExtinct(refYrs);
  const n = angles.length;
  const remaining = n - extinct;

  // Timeline Labels
  push();
  translate(cx, cy);
  noStroke();
  fill(59, 130, 246);
  textSize(16);
  textStyle(BOLDITALIC);
  textAlign(CENTER, BOTTOM);
  text(`${round(refYrs, 2)} yrs`, -555, -80);

  fill(STATUS.extinct);
  textSize(20);
  text(`${remaining}`, -565, -50);
  fill(147, 197, 253);
  text(`/ ${n}`, -535, -50);
  textSize(12);
  text(`tribes`, -500, -50);
  pop();

  noFill();

  // rings
  for (let i = 0; i < RINGS.length; i++) {
    const t = RINGS[i];
    const r = RING_RADII[i];

    if (i == activeIdx) {
      stroke(59, 130, 246);
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = color(147, 197, 253);
      strokeWeight(2);
    } else {
      stroke(59, 130, 246, 120);
      drawingContext.shadowBlur = 0;
      strokeWeight(1);
    }

    circle(0, 0, r * 2);
  }

  drawingContext.shadowBlur = 0; // reset shadow
  pop();
}

// Tribe markers
function drawTribeMarkers(refYrs) {
  push();
  translate(cx, cy);

  for (let i = 0; i < tribes.length; i++) {
    const th = angles[i];
    const x = BORDER_R * cos(th);
    const y = BORDER_R * sin(th);

    const f = fieldsForTribe(tribes[i]);
    const p = tribes[i].population;

    const Yrem = remainingYearsDynamic(f, p, refYrs);
    const band = bandIndexForYears(Yrem);
    const col = colorsForBand(band);

    if (Yrem <= 5) TICK_LOCK[i].locked = true;

    // Highlight tribe on hover
    const mouseD = dist(mouseX - cx, mouseY - cy, x, y);
    const hovered = mouseD < 10;

    const strokeCol =
      hovered && !TICK_LOCK[i].locked ? TICK_ACTIVE() : col.stroke;

    // Ticks
    stroke(strokeCol);
    strokeWeight(hovered ? 1.5 : 1);
    line(0, 0, x, y);

    // Marker
    noStroke();
    fill(strokeCol);
    circle(x, y, 10);

    //Label
    push();
    translate(x, y);
    textAlign(CENTER, CENTER);
    fill(strokeCol);
    textSize(14);

    let orientation = th;
    if (th > HALF_PI || th < -HALF_PI) orientation += PI;
    rotate(orientation);

    const labelOffsetX = 5;
    const labelOffsetY = 16;
    translate(
      th > HALF_PI || th < -HALF_PI ? labelOffsetX : -labelOffsetX,
      th > HALF_PI || th < -HALF_PI ? -labelOffsetY : labelOffsetY
    );
    text(tribes[i].tribe, 0, 0);
    pop();
  }
  pop();
}

function drawFlower(refYrs) {
  const n = tribes.length;
  const dth = TWO_PI / n;

  for (let i = 0; i < n; i++) {
    if (TICK_LOCK[i].locked) continue;

    const f = fieldsForTribe(tribes[i]);
    const Yrem = remainingYearsDynamic(f, tribes[i].population, refYrs); // YEARS
    const band = bandIndexForYears(Yrem);
    const bandBoost = [1.25, 1.15, 1.1, 1.0, 1.0][band];
    const col = colorsForBand(band);

    const rTarget = radiusForYearsRemaining(Yrem);
    const temp = tempos[i];
    const tempClamped = constrain(temp, 0.9, 1.4);
    const amp = 4;

    //bpm
    const BPM_BASE = 15;
    const AMP_PX = 4;

    const t = millis() / 1000;
    const pulse = Math.sin(TWO_PI * (BPM_BASE / 60) * t);
    const r = max(INNER_R, rTarget + AMP_PX * pulse);

    const MIN_HALF_W = 8;
    const WIDTH_GAIN = 0.02;

    const th = angles[i];
    const { x: px, y: py } = getPeakPoint(cx, cy, r, th);
    const arcHalf = r * Math.sin(dth / 2) * 1.3;
    const desired = arcHalf + WIDTH_GAIN * r;
    const halfWidth = Math.max(MIN_HALF_W, desired);
    const tipHandle = r * lerp(0.28, 0.22, r / OUTER_R);

    drawPetalFromCenter(
      cx,
      cy,
      px,
      py,
      halfWidth,
      tipHandle,
      col.stroke,
      col.fill
    );

    stroke(col.stroke);
    strokeWeight(6);
    point(px, py);
  }
}

// Helper Functions
function getPeakPoint(cx, cy, radius, theta) {
  return {
    x: cx + radius * cos(theta),
    y: cy + radius * sin(theta),
  };
}

function drawPetalFromCenter(
  cx,
  cy,
  px,
  py,
  halfWidth,
  tipHandle,
  strokeCol,
  fillCol = null
) {
  const vx = px - cx,
    vy = py - cy;
  const hypot = Math.hypot(vx, vy);
  const ux = vx / hypot,
    uy = vy / hypot;
  const nx = -uy,
    ny = ux;

  const A1x = cx + ux * tipHandle,
    A1y = cy + uy * tipHandle;
  const A2x = px - nx * halfWidth,
    A2y = py - ny * halfWidth;

  const B1x = px + nx * halfWidth,
    B1y = py + ny * halfWidth;
  const B2x = cx + ux * tipHandle,
    B2y = cy + uy * tipHandle;

  if (!fillCol) noFill();
  else fill(fillCol);
  stroke(strokeCol);
  strokeWeight(2);

  beginShape();
  vertex(cx, cy);
  bezierVertex(A1x, A1y, A2x, A2y, px, py);
  bezierVertex(B1x, B1y, B2x, B2y, cx, cy);
  endShape();
}

function bandIndexForYears(y) {
  if (y < 5) return 0; // extinct
  if (y < 20) return 1; // endangered
  if (y < 40) return 2; // vulnerable
  if (y < 80) return 3; // strong
  return 4; // flourishing
}

function colorsForBand(bandIdx, aFill = 100, aStroke = 150) {
  const keys = ["extinct", "endangered", "vulnerable", "strong", "flourishing"];
  const base = color(STATUS[keys[bandIdx]]);
  const f = color(red(base), green(base), blue(base), aFill);
  const s = color(red(base), green(base), blue(base), aStroke);
  return { fill: f, stroke: s };
}

function fieldsForTribe(entry) {
  return {
    population: entry.population,
    vitality: entry.vitality,
    digital_support: entry.digital_support,
  };
}

function radiusForYearsElapsed(t) {
  return map(
    constrain(t, 0, HORIZON_YEARS),
    0,
    HORIZON_YEARS,
    INNER_R,
    OUTER_R
  );
}

function radiusForYearsRemaining(y) {
  const GAMMA = 0.6;
  const t = constrain(y, 0, HORIZON_YEARS) / HORIZON_YEARS;
  return lerp(INNER_R, OUTER_R, pow(t, GAMMA));
}

function countExtinct(refYrs) {
  let n = 0;
  for (let i = 0; i < tribes.length; i++) {
    const f = fieldsForTribe(tribes[i]);
    const y = remainingYearsDynamic(f, tribes[i].population, refYrs);
    if (y < 5) n++; // extinct
  }
  return n;
}

function drawLegend() {
  const labels = [
    "Extinct (<5y)",
    "Endangered (5–20)",
    "Vulnerable (20–40)",
    "Strong (40–80)",
    "Flourishing (80–120)",
  ];
  const pad = 10,
    sw = 8,
    sh = 8,
    gap = 5,
    lineH = 15;
  const x0 = 20,
    y0 = 14;

  noStroke();
  fill(0, 0, 0, 80);
  rect(x0 - pad, y0 - pad, 160, labels.length * lineH + pad * 2, 6);

  for (let i = 0; i < labels.length; i++) {
    const { fill: fc, stroke: sc } = colorsForBand(i);
    fill(fc);
    stroke(sc);
    strokeWeight(1);
    rect(x0, y0 + i * lineH, sw, sh, 3);
    noStroke();
    fill(230);
    textAlign(LEFT, CENTER);
    textSize(10);
    text(labels[i], x0 + sw + gap, y0 + i * lineH + sh / 2);
  }
}

function refYears_clockSession() {
  let nowF = hour() * 60 + minute() + second() / 60;
  // handle midnight wrap
  if (nowF < startMs) nowF += 1440;
  const elapsedMinutes = nowF - startMs;
  const ref = elapsedMinutes * YEARS_PER_MIN;
  return ref % HORIZON_YEARS;
}

/*
 * ChatGPT assisted with this model logic in this function along with the code in data.js
 */
const DOMINANCE_BOOST = 0.1; // extra growth for strong cases
const COLLAPSE_BOOST = 0.2; // extra shrink for weak cases

const DOM_THRESH = 0.75; // provisional Yrem/HORIZON to count as dominant
const COL_THRESH = 0.25;

function remainingYearsDynamic(fields, population, refYrs) {
  const Y0 = yearsLeft(fields);
  // 1) provisional evolution with base rates
  let { G, S } = growthRateBase(fields, population, refYrs);
  let Yprov = constrain(Y0 + (G - S) * refYrs, 0, HORIZON_YEARS);

  // 2) dominance boost: large pop + strong support + already high Yrem
  const d = (fields.digital_support || "").toLowerCase();
  const v = (fields.vitality || "").toLowerCase();
  const pN = normPop(population);
  const yFrac = Yprov / HORIZON_YEARS;

  const isStrongSupport =
    (d === "vital" || d === "ascending") &&
    (v === "stable" || v === "institutional");
  if (isStrongSupport && pN > 0.6 && yFrac > DOM_THRESH) {
    G +=
      (DOMINANCE_BOOST * (0.5 + 0.5 * pN) * (yFrac - DOM_THRESH)) /
      (1 - DOM_THRESH);
  }

  // 3) collapse boost: tiny pop + weak support + already low Yrem
  const isWeakSupport = d === "still" || d === "emerging" || v === "endangered";
  if (isWeakSupport && pN < 0.4 && yFrac < COL_THRESH) {
    S +=
      (COLLAPSE_BOOST * (0.7 + 0.3 * (1 - pN)) * (COL_THRESH - yFrac)) /
      COL_THRESH;
  }

  // 4) recompute with boosted rates
  return constrain(Y0 + (G - S) * refYrs, 0, HORIZON_YEARS);
}
