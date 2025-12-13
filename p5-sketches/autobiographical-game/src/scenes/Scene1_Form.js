// Scene1.js
// visa form scene

class Scene1 {
  constructor(form, header) {
    this.fields = [];
    this.missedFields = [];
    this.formY = height;
    this.paperX = (width - LAYOUT.paperWidth) / 2;
    this.paperY = 20;
    this.state = "starting"; // 'starting','playing', 'processing', 'result'
    this.playflow = "welcome";
    this.outcome = null; // 'approved' or 'denied'
    this.processingProgress = 0;

    // TIER PROGRESSION STATE
    this.tierOrder = ["normal", "loaded", "absurd", "surreal"];
    this.tierIndex = 0;
    this.nextY = LAYOUT.headerHeight + 60; // running Y for new fields
    this.tierUnlocked = new Set();

    this.scrollSpeed = 0.8; // current speed
    this.scrollTarget = 0.8;
    this.scrollMin = 0.55;
    this.scrollMax = 2.4;

    this.combo = 0; // consecutive successful fills
    this.missStreak = 0; // consecutive misses
    this.lastMissCount = 0; // to detect new misses per frame
    this.form = form;
    this.header = header;

    this.buildForm();
  }

  drawWelcomeScreen() {
    drawCard(100, 70, 400, 250, 24);
    drawCardTitle("Welcome to Level 1", width / 2, 110, 32);
    drawCardBody("The Visa Process", width / 2, 145, 19);
    drawCardBody(
      "Navigate a surreal visa application form.",
      width / 2,
      185,
      15
    );
    drawCardBody(
      "Goal: Click each field before it scrolls away.",
      width / 2,
      215,
      15
    );
    drawSmallHint("Press Enter to continue.", width / 2, 270, 14);
  }

  drawInstructionsScreen() {
    drawCard(120, 60, 360, 280, 18);
    drawCardTitle("How to Play", width / 2, 90, 22);
    drawCardBody(
      "• The form scrolls up the screen.\n• Click fields quickly to fill them — no typing.\n• Missing required fields can deny your visa.\n• Keep your cool: streaks speed up, misses slow down.",
      width / 2,
      130,
      15
    );
    drawSmallHint("Press Enter to begin.", width / 2, 290, 14);
  }

  buildForm() {
    // background(this.bg)
    const firstTier = this.tierOrder[this.tierIndex];
    this.spawnTier(firstTier);
  }

  spawnTier(tierName) {
    if (this.tierUnlocked.has(tierName)) return; // don't double-spawn

    const pad = 12;
    const centerX = width / 2;

    const fields = visaFieldTiers[tierName] || [];
    for (let i = 0; i < fields.length; i++) {
      const f = fields[i];
      const { w } = this.getFieldSize(f);
      // Keep inside paper bounds
      const minX = this.paperX + pad;
      const maxX = this.paperX + LAYOUT.paperWidth - w - pad;
      const randomX = random(minX, maxX);

      this.fields.push({
        ...f,
        x: randomX,
        y: this.nextY,
      });

      // Add chaos as level progresses
      const baseStep = f.type === "checkbox" ? 45 : 60;
      const chaos = Math.min(this.tierIndex * 4, 20); // 0 → up to ~20px
      this.nextY += baseStep + random(-chaos, chaos);
    }

    this.tierUnlocked.add(tierName);

    // increase speed per tier
    // this.scrollSpeed = Math.min(this.scrollSpeed + 0.15, 3.0);

    // Increase speed based on how many filled in a row vs missed
    this.bumpSpeedTarget(+0.08);
  }

  update() {
    if (this.state !== "playing") return;

    // Auto-scroll
    this.formY -= this.scrollSpeed;

    const ease = 0.05; // smoothing factor
    this.scrollSpeed += (this.scrollTarget - this.scrollSpeed) * ease;

    // Speed up over time
    if (frameCount % 120 === 0 && this.scrollSpeed < 2.5) {
      this.scrollSpeed += 0.1;
    }

    // Check for missed fields
    for (let field of this.fields) {
      if (field.required && !field.filled) {
        let screenY = field.y + this.formY;
        if (
          screenY < LAYOUT.activeZoneTop - 100 &&
          !this.missedFields.includes(field)
        ) {
          this.missedFields.push(field);
        }
      }
    }

    if (this.missedFields.length > this.lastMissCount) {
      this.onMiss(); // defined below
    }
    this.lastMissCount = this.missedFields.length;

    this.checkTierProgression();

    // Check if done
    let lastFieldY = this.fields[this.fields.length - 1].y + this.formY;
    if (lastFieldY < LAYOUT.activeZoneTop - 150) {
      this.submit();
    }
  }

  checkTierProgression() {
    // Count how many required fields are filled (cumulative across tiers)
    const filledRequired = this.fields.filter((f) => f.required && f.filled)
      .length;

    // See if there's another tier to unlock
    const nextIndex = this.tierIndex + 1;
    if (nextIndex >= this.tierOrder.length) return;

    const nextTier = this.tierOrder[nextIndex];
    // const needed = this.tierThresholds[nextTier] ?? Infinity;

    if (this.tierIndex < this.tierOrder.length) {
      this.tierIndex = nextIndex;
      this.spawnTier(nextTier);
    }
  }

  display() {
    if (this.playflow === "welcome") {
      this.drawWelcomeScreen();
      return;
    } else if (this.playflow === "instructions") {
      this.drawInstructionsScreen();
      return;
    }

    if (this.state === "playing") {
      this.drawForm();
    } else if (this.state === "processing") {
      this.drawProcessing();
    } else if (this.state === "result") {
      this.drawResult();
    }
  }

  drawForm() {
    // Paper
    fill(COLORS.paper);
    // stroke(COLORS.paperBorder);
    // strokeWeight(3);
    // rect(this.paperX, this.paperY, LAYOUT.paperWidth, LAYOUT.paperHeight);
    this.form.resize(LAYOUT.paperWidth, 0);
    image(this.form, this.paperX, this.paperY);

    // Active zone
    // noStroke();
    strokeWeight(2);
    stroke(COLORS.paperBorder);
    fill(COLORS.paper);
    rect(
      this.paperX,
      LAYOUT.activeZoneTop,
      LAYOUT.paperWidth,
      LAYOUT.activeZoneHeight
    );

    // Active zone borders
    push();
    stroke(COLORS.activeZoneBorder);
    strokeWeight(2);
    // drawingContext.setLineDash([10, 5]);
    line(
      this.paperX,
      LAYOUT.activeZoneTop,
      this.paperX + LAYOUT.paperWidth,
      LAYOUT.activeZoneTop
    );
    line(
      this.paperX,
      LAYOUT.activeZoneTop + LAYOUT.activeZoneHeight,
      this.paperX + LAYOUT.paperWidth,
      LAYOUT.activeZoneTop + LAYOUT.activeZoneHeight
    );
    pop();

    // Clip to paper
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.rect(
      this.paperX,
      this.paperY,
      LAYOUT.paperWidth,
      LAYOUT.paperHeight
    );
    drawingContext.clip();

    // Draw fields (scrolling)
    for (let field of this.fields) {
      this.drawField(field);
    }

    drawingContext.restore();

    // Fixed header
    formHeader(
      "VISA APPLICATION FORM",
      this.paperY + 10,
      "Republic of Bureaucracy"
    );

    // UI
    this.drawUI();
  }
// drawField(field) {
//   // Ensure X is inside paper (doesn't change your intended position)
//   const { w, h } = this.getFieldSize(field);
//   const pad = 12;
//   const minX = this.paperX + pad;
//   const maxX = this.paperX + LAYOUT.paperWidth - w - pad;
//   field.x = Math.max(minX, Math.min(field.x, maxX));

//   const screenY = field.y + this.formY;
//   if (screenY < -50 || screenY > height + 50) return;

//   const inActiveZone =
//     screenY >= LAYOUT.activeZoneTop &&
//     screenY <= LAYOUT.activeZoneTop + LAYOUT.activeZoneHeight;

//   // === Draft-style field box ===
//   stroke(COLORS.fieldBorder);
//   strokeWeight(1.2);
//   fill(field.filled ? COLORS.fieldFilled : COLORS.fieldBg);
//   rect(field.x, screenY, w, h, 6);

//   // === Label above box (trim/wrap to keep inside paper) ===
//   noStroke();
//   fill(COLORS.text);
//   textAlign(LEFT, CENTER);
//   textSize(11);
//   const maxLabelWidth = Math.max(140, w); // prevents spill
//   text(field.label, field.x, screenY - 12, maxLabelWidth, 40);

//   // === Content ===
//   fill(field.filled ? COLORS.text : COLORS.textLight);
//   textAlign(CENTER, CENTER);

//   if (field.type === "checkbox") {
//     // small inner checkbox (draft vibe)
//     const box = 16;
//     const boxX = field.x + 6;
//     const boxY = screenY + h/2 - box/2;
//     stroke(COLORS.fieldBorder);
//     strokeWeight(1.2);
//     noFill();
//     rect(boxX, boxY, box, box, 4);
//     if (field.filled) {
//       // tiny check
//       stroke(COLORS.text);
//       line(boxX+4, boxY+8, boxX+8, boxY+13);
//       line(boxX+8, boxY+13, boxX+13, boxY+3);
//     }
//     noStroke();
//     textSize(10);
//     text(inActiveZone && !field.filled ? "click" : (field.filled ? "✓" : ""), field.x + w/2 + 4, screenY + h/2 + 1);
//   } else {
//     // text / upload / textarea render
//     textSize(field.type === "textarea" ? 10 : 12);
//     const val = field.filled
//       ? (field.value || field.answer || "✓")
//       : (inActiveZone ? "[click]" : "");
//     text(val, field.x + w/2, screenY + h/2);
//   }
// }
  drawField(field) {
    let screenY = field.y + this.formY;
    if (screenY < -50 || screenY > height + 50) return;

    let inActiveZone =
      screenY >= LAYOUT.activeZoneTop &&
      screenY <= LAYOUT.activeZoneTop + LAYOUT.activeZoneHeight;

    // Field box
    stroke(
      field.filled
        ? COLORS.fieldFilledBorder
        : inActiveZone
        ? COLORS.fieldActive
        : COLORS.fieldBorder
    );
    strokeWeight(field.filled ? 1 : 2);
    fill(field.filled ? COLORS.fieldFilled : COLORS.fieldBg);

    let w = field.type === "checkbox" ? LAYOUT.checkboxSize : 200;
    let h =
      field.type === "checkbox" ? LAYOUT.checkboxSize : LAYOUT.fieldHeight;

    rect(field.x, screenY, w, h, 5);

    // Label
    fill(COLORS.text);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(11);
    text(field.label, field.x, screenY - 10);

    // Content
    if (field.filled) {
      fill(COLORS.text);
      textAlign(CENTER, CENTER);
      textSize(12);
      if (field.type === "checkbox") {
        text("✓", field.x + w / 2, screenY + h / 2);
      } else {
        text(
          field.value || field.answer || "✓",
          field.x + w / 2,
          screenY + h / 2
        );
      }
    }
    // else if (inActiveZone) {
    //   fill(150);
    //   textAlign(CENTER, CENTER);
    //   textSize(9);
    //   text("[click]", field.x + w / 2, screenY + h / 2);
    // }
  }

  drawUI() {
    fill(COLORS.text);
    noStroke();

    textAlign(LEFT, TOP);
    textSize(9);
    fill(COLORS.textLight);
    // text(
    //   `Filled: ${this.fields.filter((f) => f.filled).length}/${
    //     this.fields.length
    //   }`,
    //   10,
    //   15
    // );
    text(
      `Questions: ${
        this.fields.filter((f) => f.filled).length + this.missedFields.length
      }/${this.fields.length}`,
      5,
      15
    );
    // text(`Missed: ${this.missedFields.length}`, 10, 28);
    // text(`Speed: ${this.scrollSpeed.toFixed(1)}x`, 10, 41);
  }

  drawProcessing() {
    fill(200);
    stroke(0);
    strokeWeight(3);
    rect(100, 150, 400, 100);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text("PROCESSING...", width / 2, 180);

    // Progress bar
    this.processingProgress += 2;
    let progress = min(this.processingProgress, 100);

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(150, 210, 300, 20);

    noStroke();
    fill(100);
    rect(152, 212, (progress / 100) * 296, 16);
  }

  drawResult() {
    fill(this.outcome === "approved" ? COLORS.successFill : COLORS.dangerFill);
    stroke(0);
    strokeWeight(
      this.outcome === "approved" ? COLORS.successBorder : COLORS.dangerBorder
    );
    rect(100, 100, 400, 200, 10, 10);

    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(24);
    text(this.outcome === "approved" ? "APPROVED" : "DENIED", width / 2, 150);

    textSize(12);
    if (this.outcome === "denied") {
      text(
        `You missed ${this.missedFields.length} required field(s)`,
        width / 2,
        190
      );
    } else {
      text("Visa valid for 30 days", width / 2, 190);
    }

    // Button
    fill(100);
    rect(225, 240, 150, 40, 10, 10);
    fill(255);
    textSize(14);
    text(
      this.outcome === "approved" ? "CONTINUE" : "TRY AGAIN",
      width / 2,
      260
    );
    
    
  }

  submit() {
    this.state = "processing";
    this.processingProgress = 0;

    // Determine outcome
    if (this.missedFields.length === 0) {
      this.outcome = "approved";
    } else {
      this.outcome = "denied";
    }

    setTimeout(() => {
      this.state = "result";
    }, 2000);
  }

  handleClick(mx, my) {
    if (this.state === "playing") {
      for (let field of this.fields) {
        let screenY = field.y + this.formY;
        let inActiveZone =
          screenY >= LAYOUT.activeZoneTop &&
          screenY <= LAYOUT.activeZoneTop + LAYOUT.activeZoneHeight;

        if (inActiveZone) {
          let w = field.type === "checkbox" ? LAYOUT.checkboxSize : 200;
          let h =
            field.type === "checkbox"
              ? LAYOUT.checkboxSize
              : LAYOUT.fieldHeight;

          if (
            mx > field.x &&
            mx < field.x + w &&
            my > screenY &&
            my < screenY + h
          ) {
            if (!field.filled) {
              field.filled = true;

              if (field.type !== "checkbox") {
                field.value = field.answer || "";
              }
              this.onSuccessFill();
            }
            break;
          }
        }
      }
    } else if (this.state === "result") {
      // Check button click
      if (mx > 225 && mx < 375 && my > 240 && my < 280) {
        if (this.outcome === "approved") {
          return "next"; // Signal to go to next scene
        } else {
          this.reset();
        }
      }
    }
    return null;
  }

  reset() {
    // clear fields
    this.fields = [];
    this.missedFields = [];
    this.formY = height;
    this.scrollSpeed = 0.8;
    this.state = "playing";
    this.outcome = null;
    this.processingProgress = 0;

    this.tierIndex = 0;
    this.tierUnlocked.clear();
    this.nextY = LAYOUT.headerHeight + 60;

    this.buildForm();
  }

  getFieldSize(field) {
    const w =
      field.type === "checkbox"
        ? LAYOUT.checkboxSize
        : field.type === "upload"
        ? 220
        : field.type === "textarea"
        ? 260
        : 200; // text default
    const h =
      field.type === "checkbox"
        ? LAYOUT.checkboxSize
        : field.type === "textarea"
        ? LAYOUT.fieldHeight * 2
        : LAYOUT.fieldHeight;
    return { w, h };
  }

  clampFieldX(field) {
    const { w } = this.getFieldSize(field);
    const pad = 12; // inner left/right padding from paper edge
    const minX = this.paperX + pad;
    const maxX = this.paperX + LAYOUT.paperWidth - w - pad;
    field.x = Math.max(minX, Math.min(field.x, maxX));
  }

  bumpSpeedTarget(delta) {
    this.scrollTarget = constrain(
      this.scrollTarget + delta,
      this.scrollMin,
      this.scrollMax
    );
  }

  onSuccessFill() {
    this.combo += 1;
    this.missStreak = 0;

    // Tiny nudge every fill, extra bump on streak milestones
    this.bumpSpeedTarget(+0.01);
    if (this.combo % 3 === 0) this.bumpSpeedTarget(+0.1);
  }

  onMiss() {
    this.missStreak += 1;
    this.combo = 0;

    // Slow down more if they’re struggling (cap effect)
    const penalty = 0.12 * Math.min(this.missStreak, 3);
    this.bumpSpeedTarget(-penalty);
  }

  drawWelcomeScreen() {
    fill(250);
    rect(100, 70, 400, 250, 24);
    fill(30);
    textSize(32);
    textAlign(CENTER, TOP);
    text("Let's take a trip...", width / 2, 110);
    textSize(19);
    text("The Visa Process", width / 2, 145);
    textSize(15);
    2;
    text("Navigate a surreal visa application form.", width / 2, 185);
    text("Goal: Click each field before it scrolls away.", width / 2, 215);
    textSize(14);
    text("Press ENTER to see instructions.", width / 2, 270);
  }

  navigateNext() {
    console.log("next");
    if (this.playflow === "welcome") {
      this.playflow = "instructions";
    } else if (this.playflow === "instructions") {
      this.playflow = "started";
      this.state = 'playing';
      // reset scroll pos for start
      this.formY = height;
    }
    return null;
  }
}
