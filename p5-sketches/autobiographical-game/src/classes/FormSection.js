// FormSection.js
// Section headers that organize the form into logical groups

class FormSection {
  constructor(y, title) {
    this.y = y;           // Absolute Y position in form
    this.title = title;
    this.height = 60;
  }
  
  display(formY) {
    let screenY = this.y + formY;
    
    // Only draw if visible on screen
    if (screenY < -100 || screenY > height + 100) return;

  
  }
}

function drawSectionHeader() {
    push();
    
    // Title text
    fill(COLORS.text);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    textStyle(BOLD);
    text(this.title, width/2, screenY + 20);
    
    // Underline
    stroke(COLORS.text);
    strokeWeight(2);
    let lineWidth = 350;
    let centerX = width/2;
    line(centerX - lineWidth/2, screenY + 30, 
         centerX + lineWidth/2, screenY + 30);
    
    textStyle(NORMAL);
    pop();
  }

function formHeader(title, y, subtitle = null) {
  push();
  const paperX = ( width - LAYOUT.paperWidth) / 2;
  fill(COLORS.paper);
    stroke(COLORS.paperBorder);
    strokeWeight(2);
    rect(paperX, 5, LAYOUT.paperWidth, LAYOUT.headerHeight, 10, 10, 0);

  let yOffset = 15;

  // Title text
  fill(COLORS.text);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  textWidth()
  text(title, width / 2, y + 5);

  if (subtitle) {
    textSize(14);
    textStyle(ITALIC);
    text(subtitle, width / 2, y + yOffset + 10);
    yOffset += 30;
  }

  // Underline
  stroke(COLORS.text);
  strokeWeight(2);
  let lineWidth = 400;
  let centerX = width / 2;
  line(
    centerX - lineWidth / 2,
    y + yOffset,
    centerX + lineWidth / 2,
    y + yOffset
  );

  textStyle(NORMAL);
  pop();
}


