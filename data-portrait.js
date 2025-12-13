const events = [
  {
    date: "2025-10-08",
    activity: "Get Ready",
    start: "08:10",
    end: "09:20",
    genreCounts: { Pop: 8, "Show Tunes": 6, Afrobeats: 5, "R&B": 3 },
  },
  {
    date: "2025-10-08",
    activity: "Work / Study",
    start: "10:00",
    end: "13:00",
    genreCounts: { "Afro House": 28, "R&B": 10, "Neo-soul": 12 },
  },
  {
    date: "2025-10-08",
    activity: "Commute",
    start: "15:30",
    end: "16:00",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 1, Afrobeats: 1 },
  },
  {
    date: "2025-10-08",
    activity: "Relax",
    start: "19:20",
    end: "21:00",
    genreCounts: { Folk: 14, Pop: 7, "R&B": 10 },
  },
  {
    date: "2025-10-08",
    activity: "Commute",
    start: "21:00",
    end: "21:30",
    genreCounts: { "Hip-hop": 3, Pop: 3, Folk: 2, Afrobeats: 1 },
  },
  {
    date: "2025-10-08",
    activity: "Get Ready",
    start: "21:35",
    end: "22:30",
    genreCounts: { Pop: 7, "Show Tunes": 4, Afrobeats: 4, Folk: 2 },
  },
  {
    date: "2025-10-09",
    activity: "Get Ready",
    start: "08:15",
    end: "09:20",
    genreCounts: { Pop: 7, "Show Tunes": 6, Afrobeats: 4, "R&B": 3 },
  },
  {
    date: "2025-10-09",
    activity: "Work / Study",
    start: "10:10",
    end: "13:10",
    genreCounts: { "Afro House": 18, "R&B": 24, "Neo-soul": 8, Pop: 6 },
  },
  {
    date: "2025-10-09",
    activity: "Commute",
    start: "15:30",
    end: "16:05",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 2, Afrobeats: 2 },
  },
  {
    date: "2025-10-09",
    activity: "Exercise",
    start: "19:10",
    end: "20:00",
    genreCounts: { "Hip-hop": 7, Pop: 5, Afrobeats: 4 },
  },
  {
    date: "2025-10-09",
    activity: "Relax",
    start: "20:30",
    end: "22:00",
    genreCounts: { Folk: 7, Pop: 6, "R&B": 11, "Neo-soul": 4 },
  },

  {
    date: "2025-10-09",
    activity: "Get Ready",
    start: "22:05",
    end: "23:00",
    genreCounts: { Pop: 6, "Show Tunes": 5, Afrobeats: 4, "R&B": 2 },
  },
  {
    date: "2025-10-10",
    activity: "Get Ready",
    start: "08:05",
    end: "09:15",
    genreCounts: { Pop: 8, "Show Tunes": 6, Afrobeats: 5, Folk: 3 },
  },
  {
    date: "2025-10-10",
    activity: "Work / Study",
    start: "10:20",
    end: "13:00",
    genreCounts: { "Afro House": 16, "R&B": 13, "Neo-soul": 15, Pop: 6 },
  },
  {
    date: "2025-10-10",
    activity: "Commute",
    start: "13:00",
    end: "13:40",
    genreCounts: { "Hip-hop": 5, Pop: 4, Folk: 2, Afrobeats: 1 },
  },
  {
    date: "2025-10-10",
    activity: "Commute",
    start: "15:30",
    end: "16:05",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 2, Afrobeats: 2 },
  },
  {
    date: "2025-10-10",
    activity: "Relax",
    start: "19:15",
    end: "21:30",
    genreCounts: { Folk: 10, Pop: 17, "R&B": 11, "Neo-soul": 4 },
  },
  {
    date: "2025-10-10",
    activity: "Get Ready",
    start: "21:35",
    end: "22:30",
    genreCounts: { Pop: 7, "Show Tunes": 4, Afrobeats: 4, "R&B": 2 },
  },
  {
    date: "2025-10-11",
    activity: "Get Ready",
    start: "08:10",
    end: "09:10",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, Folk: 3 },
  },
  {
    date: "2025-10-11",
    activity: "Exercise",
    start: "09:20",
    end: "10:20",
    genreCounts: { "Hip-hop": 8, Pop: 6, Afrobeats: 5 },
  },
  {
    date: "2025-10-11",
    activity: "Chores",
    start: "12:00",
    end: "14:30",
    genreCounts: {
      Pop: 16,
      "Show Tunes": 11,
      Afrobeats: 9,
      Folk: 7,
      "Neo-soul": 4,
    },
  },
  {
    date: "2025-10-11",
    activity: "Commute",
    start: "19:30",
    end: "20:00",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 1, Afrobeats: 1 },
  },
  {
    date: "2025-10-11",
    activity: "Relax",
    start: "20:00",
    end: "22:30",
    genreCounts: {
      Folk: 14,
      Pop: 13,
      "R&B": 14,
      "Neo-soul": 4,
      "Afro House": 2,
    },
  },
  {
    date: "2025-10-11",
    activity: "Get Ready",
    start: "22:40",
    end: "23:40",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, "R&B": 3 },
  },
  {
    date: "2025-10-12",
    activity: "Commute",
    start: "01:00",
    end: "01:30",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 1, Afrobeats: 1 },
  },
  {
    date: "2025-10-12",
    activity: "Get Ready",
    start: "08:20",
    end: "09:20",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, "R&B": 3 },
  },
  {
    date: "2025-10-12",
    activity: "Chores",
    start: "10:15",
    end: "13:15",
    genreCounts: {
      Pop: 19,
      "Show Tunes": 13,
      Afrobeats: 11,
      Folk: 8,
      "Neo-soul": 5,
    },
  },
  {
    date: "2025-10-12",
    activity: "Relax",
    start: "19:10",
    end: "21:30",
    genreCounts: {
      Folk: 15,
      Pop: 9,
      "R&B": 10,
      "Neo-soul": 8,
      "Afro House": 2,
    },
  },
  {
    date: "2025-10-12",
    activity: "Get Ready",
    start: "21:30",
    end: "22:20",
    genreCounts: { Pop: 6, "Show Tunes": 4, Afrobeats: 4, Folk: 2 },
  },
  {
    date: "2025-10-13",
    activity: "Get Ready",
    start: "08:05",
    end: "09:10",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, Folk: 4 },
  },
  {
    date: "2025-10-13",
    activity: "Work / Study",
    start: "10:00",
    end: "12:30",
    genreCounts: { "Afro House": 21, "R&B": 16, "Neo-soul": 10 },
  },
  {
    date: "2025-10-13",
    activity: "Commute",
    start: "15:30",
    end: "16:05",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 2, Afrobeats: 2 },
  },
  {
    date: "2025-10-13",
    activity: "Relax",
    start: "19:15",
    end: "21:30",
    genreCounts: { Folk: 10, Pop: 9, "R&B": 17, "Neo-soul": 6 },
  },
  {
    date: "2025-10-13",
    activity: "Commute",
    start: "21:30",
    end: "22:00",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 1, Afrobeats: 1 },
  },
  {
    date: "2025-10-13",
    activity: "Get Ready",
    start: "22:00",
    end: "23:00",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, "R&B": 3 },
  },
  {
    date: "2025-10-14",
    activity: "Get Ready",
    start: "08:15",
    end: "09:20",
    genreCounts: { Pop: 7, "Show Tunes": 6, Afrobeats: 4, "R&B": 3 },
  },
  {
    date: "2025-10-14",
    activity: "Work / Study",
    start: "10:05",
    end: "13:00",
    genreCounts: { "Afro House": 24, "R&B": 4, "Neo-soul": 8, Pop: 19 },
  },
  {
    date: "2025-10-14",
    activity: "Commute",
    start: "15:30",
    end: "16:00",
    genreCounts: { "Hip-hop": 4, Pop: 3, Folk: 1, Afrobeats: 1 },
  },
  {
    date: "2025-10-14",
    activity: "Relax",
    start: "19:00",
    end: "21:30",
    genreCounts: { Folk: 13, Pop: 11, "R&B": 13, "Neo-soul": 10 },
  },
  {
    date: "2025-10-14",
    activity: "Commute",
    start: "21:30",
    end: "22:00",
    genreCounts: { "Hip-hop": 3, Pop: 3, Folk: 2, Afrobeats: 1 },
  },
  {
    date: "2025-10-14",
    activity: "Get Ready",
    start: "22:00",
    end: "23:00",
    genreCounts: { Pop: 7, "Show Tunes": 5, Afrobeats: 4, Folk: 3 },
  },
];

// Constants
const CANVAS_SIZE = 600;
const LEFT_MARGIN = 120;
const TOP_MARGIN = 50;
const BOTTOM_MARGIN = 30;
const FRETBOARD_WIDTH = 450;
const FRETBOARD_START_X = LEFT_MARGIN;
const FRETBOARD_END_X = LEFT_MARGIN + FRETBOARD_WIDTH;
const STRING_START_Y = 110;
const STRING_SPACING = 70;
const NUM_STRINGS = 6;
const PLAYHEAD_SPEED = 0.4;

// Time range shown on fretboard
const DAY_START_HOUR = 7;
const DAY_END_HOUR = 24;

const activityMap = {
  work: 0,
  study: 0,
  "Work / Study": 0,
  Commute: 1,
  "Get Ready": 2,
  Relax: 3,
  Chores: 4,
  Exercise: 5,
};

const activityLabels = [
  "Work / Study",
  "Commute",
  "Get Ready",
  "Relax",
  "Chores",
  "Exercise",
];

const genreColors = {
  "Neo-soul": "#B794F6",
  Afrobeats: "#FF9F66",
  "R&B": "#FF6B9D",
  Pop: "#FF2E97",
  "Hip-hop": "#FFE66D",
  "Show Tunes": "#4DA8FF",
  "Afro House": "#00FFC8",
  Folk: "#FFB94E",
};

// Global state
let dayData = {};
let allDays = [];
let currentDayIndex = 0;
let playheadX = FRETBOARD_START_X;
let stringOscillations = Array(NUM_STRINGS).fill(null);
let isPlaying = true;
let hoveredNote = null;
let triggeredNotes = new Set();
let autoProgression = true;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("p5-canvas");
  processEvents();
  textAlign(CENTER, CENTER);
}

function processEvents() {
  events.forEach((event) => {
    const date = event.date;
    const [sh, sm] = event.start.split(":").map(Number);
    const [eh, em] = event.end.split(":").map(Number);
    const startHour = sh + sm / 60;
    const endHour = eh + em / 60;
    const centerHour = (startHour + endHour) / 2;

    if (!dayData[date]) dayData[date] = [];

    const stringIndex = activityMap[event.activity] ?? 2;

    dayData[date].push({
      startHour,
      endHour,
      centerHour,
      string: stringIndex,
      genreCounts: event.genreCounts,
      start: event.start,
      end: event.end,
      activity: event.activity,
    });
  });

  allDays = Object.keys(dayData).sort();
}

/* -------- Time helpers -------- */

function clampHour(h) {
  return constrain(h, DAY_START_HOUR, DAY_END_HOUR);
}

function hourToX(hour) {
  const h = clampHour(hour);
  const t = (h - DAY_START_HOUR) / (DAY_END_HOUR - DAY_START_HOUR);
  return FRETBOARD_START_X + t * FRETBOARD_WIDTH;
}

/* -------- Main draw -------- */

function draw() {
  setGradient(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  drawMiniTimeline();
  drawFretboard();
  drawTuningPegs();
  drawStrings();
  drawSessionGenres();
  drawPlayhead();

  if (isPlaying) {
    playheadX += PLAYHEAD_SPEED;
    updateActiveSessionsAndVibrations();

    if (playheadX >= FRETBOARD_END_X) {
      if (autoProgression) {
        selectDay((currentDayIndex + 1) % allDays.length, false);
      } else {
        playheadX = FRETBOARD_START_X;
      }
    }
  }

  updateOscillations();
  drawHourLabels();

  if (hoveredNote) drawTooltip(hoveredNote);
}

/* -------- Helpers -------- */

function selectDay(newIndex, disableAuto = true) {
  currentDayIndex = newIndex;
  playheadX = FRETBOARD_START_X;
  triggeredNotes.clear();
  if (disableAuto) autoProgression = false;
}

/* -------- Drawing functions -------- */

function setGradient(x, y, w, h) {
  noFill();
  for (let i = 0; i <= h; i++) {
    const inter = map(i, 0, h, 0, 1);
    const c = lerpColor(color(25, 25, 45), color(15, 15, 30), inter);
    stroke(c);
    line(x, y + i, x + w, y + i);
  }
}

function drawMiniTimeline() {
  const spacing = 60;
  const startX = CANVAS_SIZE / 2 - ((allDays.length - 1) * spacing) / 2;
  const y = 25;

  push();
  textSize(10);
  textAlign(CENTER, CENTER);

  allDays.forEach((day, index) => {
    const x = startX + index * spacing;
    const isActive = index === currentDayIndex;
    const eventCount = dayData[day].length;

    if (index < allDays.length - 1) {
      stroke(80, 80, 120);
      strokeWeight(1.5);
      line(x + 6, y, x + spacing - 6, y);
    }

    noStroke();
    if (isActive) {
      fill(255, 220, 120, 80);
      circle(x, y, 32);
      fill(255, 230, 150);
      circle(x, y, 20);
      fill(40, 40, 60);
      text(day.split("-")[2], x, y);
    } else {
      const brightness = map(eventCount, 0, 10, 120, 220);
      fill(brightness, brightness, brightness + 20);
      circle(x, y, 12);

      if (dist(mouseX, mouseY, x, y) < 15) {
        fill(255, 240, 180);
        circle(x, y, 16);
        fill(40, 40, 60);
        textSize(8);
        text(day.split("-")[2], x, y);
      }
    }
  });
  pop();
}

function drawFretboard() {
  push();
  noStroke();
  const h = CANVAS_SIZE - TOP_MARGIN - BOTTOM_MARGIN;

  for (let i = 0; i < h; i++) {
    const inter = map(i, 0, h, 0, 1);
    const c = lerpColor(color(40, 40, 60, 150), color(30, 30, 50, 150), inter);
    fill(c);
    rect(FRETBOARD_START_X, TOP_MARGIN + i, FRETBOARD_WIDTH, 1);
  }

  for (let hour = DAY_START_HOUR; hour <= DAY_END_HOUR; hour++) {
    const x = hourToX(hour);
    if (hour === 12 || hour === 18 || hour === 24) {
      strokeWeight(2);
      stroke(90, 90, 120, 180);
    } else {
      strokeWeight(1);
      stroke(60, 60, 90, 120);
    }
    line(x, TOP_MARGIN, x, CANVAS_SIZE - BOTTOM_MARGIN);
  }
  pop();
}

function drawTuningPegs() {
  push();
  for (let i = 0; i < NUM_STRINGS; i++) {
    const y = STRING_START_Y + i * STRING_SPACING;
    const pegX = 40;

    fill(100, 100, 130);
    stroke(150, 150, 180);
    strokeWeight(2);
    circle(pegX, y, 30);

    fill(70, 70, 100);
    noStroke();
    circle(pegX, y, 12);

    stroke(120, 120, 160);
    strokeWeight(1);
    line(pegX + 15, y, FRETBOARD_START_X - 10, y);

    noStroke();
    fill(220, 220, 240);
    textAlign(RIGHT, CENTER);
    textSize(11);
    text(activityLabels[i], pegX + 72, y);
  }
  pop();
}

function drawStrings() {
  push();
  for (let i = 0; i < NUM_STRINGS; i++) {
    const y = STRING_START_Y + i * STRING_SPACING;
    const osc = stringOscillations[i];

    if (osc && osc.decay > 0) {
      osc.colors.forEach((genre, colorIndex) => {
        const baseColor = color(genreColors[genre] || "#888");
        const colorOpacity = map(osc.decay, 0, 1, 0, 180);

        for (let layer = 3; layer >= 0; layer--) {
          const layerSize = (4 - layer) * 3;
          const layerAlpha = colorOpacity * (0.15 / (layer + 1));
          const glowColor = color(
            red(baseColor),
            green(baseColor),
            blue(baseColor),
            layerAlpha
          );

          stroke(glowColor);
          strokeWeight(layerSize);
          noFill();

          beginShape();
          for (let x = FRETBOARD_START_X; x <= FRETBOARD_END_X; x += 3) {
            const phaseOffset = (colorIndex * PI) / 4;
            const offset =
              sin(
                (x - FRETBOARD_START_X) * osc.frequency +
                  osc.phase +
                  phaseOffset
              ) *
              osc.amplitude *
              osc.decay;
            vertex(x, y + offset);
          }
          endShape();
        }
      });

      stroke(200, 200, 220);
      strokeWeight(2.5);
      noFill();
      beginShape();
      for (let x = FRETBOARD_START_X; x <= FRETBOARD_END_X; x += 5) {
        const offset =
          sin((x - FRETBOARD_START_X) * osc.frequency + osc.phase) *
          osc.amplitude *
          osc.decay;
        vertex(x, y + offset);
      }
      endShape();
    } else {
      stroke(140, 140, 160, 100);
      strokeWeight(1);
      line(FRETBOARD_START_X, y, FRETBOARD_END_X, y);

      stroke(180, 180, 200, 150);
      strokeWeight(2);
      line(FRETBOARD_START_X, y, FRETBOARD_END_X, y);
    }
  }
  pop();
}

function drawSessionGenres() {
  const currentDay = allDays[currentDayIndex];
  const sessions = dayData[currentDay];
  if (!sessions) return;

  const BASE_SIZE = 8;
  const SIZE_SCALE = 3;
  const V_SPREAD = 12;
  const H_PADDING = 8;
  const NOTE_HIT_THRESHOLD = 4;

  hoveredNote = null;

  push();
  sessions.forEach((session, sIndex) => {
    const xStart = hourToX(session.startHour);
    const xEnd = hourToX(session.endHour);
    const y = STRING_START_Y + session.string * STRING_SPACING;

    const sessionKey = `${currentDay}-${sIndex}`;
    const sessionActive = triggeredNotes.has(sessionKey);

    if (sessionActive) {
      noStroke();
      fill(200, 200, 220, 70);
      const pad = 10;
      rect(xStart - pad, y - 11, xEnd - xStart + pad * 2, 22, 8);
    }

    // Base session duration bar
    noStroke();
    fill(255, 255, 255, 30);
    rect(xStart, y - 6, xEnd - xStart, 12, 6);

    const genres = Object.keys(session.genreCounts);

    genres.forEach((genre, gIndex) => {
      const count = session.genreCounts[genre];
      const radius = BASE_SIZE + SIZE_SCALE * sqrt(count);

      // Horizontal spread within session
      const t = genres.length === 1 ? 0.5 : gIndex / (genres.length - 1);
      const cx = lerp(xStart + H_PADDING, xEnd - H_PADDING, t);

      // Small vertical stagger (only if >1 genre)
      const offsetY = gIndex % 2 === 0 ? -V_SPREAD / 2 : V_SPREAD / 2;
      const cy = y + (genres.length > 1 ? offsetY : 0);

      const baseCol = color(genreColors[genre] || "#ccc");

      // Hover detection for tooltip
      if (dist(mouseX, mouseY, cx, cy) < radius + 3) {
        hoveredNote = {
          x: cx,
          y: cy,
          session,
          genre,
          count,
        };
      }

      // Note glow when playhead passes over this note
      const noteActive = Math.abs(playheadX - cx) <= NOTE_HIT_THRESHOLD;

      if (noteActive) {
        for (let g = 4; g > 0; g--) {
          const glowRadius = radius * 2 + g * 6;
          const alpha = 60 / g;
          noFill();
          stroke(red(baseCol), green(baseCol), blue(baseCol), alpha);
          strokeWeight(2);
          circle(cx, cy, glowRadius);
        }
      }

      // Main circle
      fill(baseCol);
      stroke(255, 200);
      strokeWeight(2);
      circle(cx, cy, radius * 2);

      // Small highlight
      noStroke();
      fill(255, 120);
      circle(cx - radius * 0.3, cy - radius * 0.3, radius * 0.3);
    });
  });
  pop();
}

function drawPlayhead() {
  push();
  stroke(120, 220, 255, 100);
  strokeWeight(8);
  line(playheadX, TOP_MARGIN, playheadX, CANVAS_SIZE - BOTTOM_MARGIN);

  stroke(150, 240, 255, 200);
  strokeWeight(3);
  line(playheadX, TOP_MARGIN, playheadX, CANVAS_SIZE - BOTTOM_MARGIN);

  stroke(200, 250, 255, 255);
  strokeWeight(1);
  line(playheadX, TOP_MARGIN, playheadX, CANVAS_SIZE - BOTTOM_MARGIN);

  fill(120, 220, 255, 150);
  noStroke();
  triangle(
    playheadX,
    TOP_MARGIN - 10,
    playheadX - 8,
    TOP_MARGIN + 5,
    playheadX + 8,
    TOP_MARGIN + 5
  );

  fill(200, 250, 255);
  triangle(
    playheadX,
    TOP_MARGIN - 8,
    playheadX - 6,
    TOP_MARGIN + 5,
    playheadX + 6,
    TOP_MARGIN + 5
  );
  pop();
}

/* -------- Interactions -------- */

function updateActiveSessionsAndVibrations() {
  triggeredNotes.clear(); // now means "sessions active this frame" only

  const currentDay = allDays[currentDayIndex];
  const sessions = dayData[currentDay];
  if (!sessions) return;

  // Aggregate active info per string
  const perString = Array(NUM_STRINGS)
    .fill(null)
    .map(() => ({
      active: false,
      totalSongs: 0,
      genres: new Set(),
    }));

  sessions.forEach((session, index) => {
    const xStart = hourToX(session.startHour);
    const xEnd = hourToX(session.endHour);

    if (playheadX >= xStart && playheadX <= xEnd) {
      const sessionKey = `${currentDay}-${index}`;
      triggeredNotes.add(sessionKey); // used by drawSessionGenres for grey highlight

      const info = perString[session.string];
      info.active = true;

      Object.values(session.genreCounts).forEach((count) => {
        info.totalSongs += count;
      });

      Object.keys(session.genreCounts).forEach((g) => {
        info.genres.add(g);
      });
    }
  });

  // Vibrate strings for active sessions
  perString.forEach((info, stringIndex) => {
    if (info.active) {
      const genresArr = Array.from(info.genres);
      triggerStringPluck(stringIndex, info.totalSongs, genresArr);
    }
  });
}

function triggerStringPluck(stringIndex, totalSongs, genres) {
  const minAmp = 10;
  const maxAmp = 40;
  const maxSongs = 20;
  const amplitude = map(totalSongs, 1, maxSongs, minAmp, maxAmp, true);

  if (stringOscillations[stringIndex]) {
    genres.forEach((g) => {
      if (!stringOscillations[stringIndex].colors.includes(g)) {
        stringOscillations[stringIndex].colors.push(g);
      }
    });

    stringOscillations[stringIndex].amplitude = max(
      stringOscillations[stringIndex].amplitude,
      amplitude
    );
    stringOscillations[stringIndex].decay = 1.0;
  } else {
    stringOscillations[stringIndex] = {
      amplitude,
      phase: 0,
      decay: 1.0,
      frequency: 0.08,
      colors: genres.slice(),
    };
  }
}

function updateOscillations() {
  stringOscillations.forEach((osc, index) => {
    if (osc) {
      osc.phase += 0.3;
      osc.decay *= 0.95;
      if (osc.decay < 0.01) stringOscillations[index] = null;
    }
  });
}

function drawHourLabels() {
  push();
  fill(150);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(10);

  const labels = [
    { hour: 7, label: "7a" },
    { hour: 12, label: "12p" },
    { hour: 18, label: "6p" },
    { hour: 24, label: "12a" },
  ];

  labels.forEach(({ hour, label }) => {
    const x = hourToX(hour);
    text(label, x, CANVAS_SIZE - 15);
  });
  pop();
}

function drawTooltip(data) {
  push();
  fill(255, 255, 200);
  stroke(100);
  strokeWeight(1);

  const session = data.session;
  const tooltipText =
    `${session.activity}\n` +
    `${session.start}–${session.end}\n` +
    `${data.genre}: ${data.count} songs`;

  const w = 150;
  const h = 60;
  let x = data.x + 20;
  let y = data.y - 40;

  if (x + w > CANVAS_SIZE) x = data.x - w - 20;
  if (y < 0) y = data.y + 20;

  rect(x, y, w, h, 5);

  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(10);
  text(tooltipText, x + w / 2, y + h / 2);
  pop();
}

/* -------- Input handlers -------- */

function mousePressed() {
  const spacing = 60;
  const startX = CANVAS_SIZE / 2 - ((allDays.length - 1) * spacing) / 2;
  const y = 25;

  allDays.forEach((day, index) => {
    const x = startX + index * spacing;
    if (dist(mouseX, mouseY, x, y) < 15) {
      selectDay(index);
    }
  });
}

function mouseMoved() {
  hoveredNote = null;
}

function keyPressed() {
  if (key === " ") {
    isPlaying = !isPlaying;
  } else if (key === "ArrowLeft") {
    console.log("pressed");
    const newIndex = (currentDayIndex - 1 + allDays.length) % allDays.length;
    selectDay(newIndex);
  } else if (key === "ArrowRight") {
    const newIndex = (currentDayIndex + 1) % allDays.length;
    selectDay(newIndex);
  } else if (key === "r" || key === "R") {
    autoProgression = true;
  }
}
