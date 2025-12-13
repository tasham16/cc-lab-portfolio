// Scene2.js
//  eyes scene

class Scene2 {
  constructor(boni) {
    this.eyes = [];
    this.eyesClosed = 0;
    this.exposureMeter = 0;
    this.progress = 0;
    this.spawnTimer = 0;
    this.spawnInterval = 120;
    this.state = 'playing';
    this.boni = boni;
  }
  
  update() {
    if (this.state !== 'playing') return;
    
    // Spawn eyes (faster spawn rate as progress increases)
    let currentSpawnRate = this.spawnInterval - (this.progress * 0.8); // Gets faster
    this.spawnTimer++;
    if (this.spawnTimer >= max(30, currentSpawnRate)) {
      this.spawnEye();
      this.spawnTimer = 0;
    }
    
    // Update eyes
    for (let i = this.eyes.length - 1; i >= 0; i--) {
      let eye = this.eyes[i];
      
      // Move toward center (speed increases with progress)
      let angle = atan2(height/2 - eye.y, width/2 - eye.x);
      let speedMultiplier = 1 + (this.progress / 100); // Speed doubles at 100%
      eye.x += cos(angle) * eye.speed * speedMultiplier;
      eye.y += sin(angle) * eye.speed * speedMultiplier;
      
      // Track mouse with pupil
      eye.pupilAngle = atan2(mouseY - eye.y, mouseX - eye.x);
      
      // Check proximity exposure
      let d = dist(eye.x, eye.y, width/2, height/2);
      if (d < 150) {
        this.exposureMeter += 0.1;
      }
      
      // Remove if closed
      if (!eye.isOpen) {
        this.eyes.splice(i, 1);
      }
    }
    
    // Decrease exposure naturally
    this.exposureMeter = max(0, this.exposureMeter - 0.2);
    this.exposureMeter = min(100, this.exposureMeter);
    
    // Check if overloaded
    if (this.exposureMeter >= 100) {
      this.eyes = [];
      this.exposureMeter = 50;
    }
    
    // Update progress (faster progression - need only 50 eyes)
    this.progress = min(100, (this.eyesClosed / 50) * 100);
    
    // Check if complete
    if (this.progress >= 100) {
      this.state = 'complete';
    }
  }
  
  spawnEye() {
    let x, y;
    let edge = floor(random(4));
    
    switch(edge) {
      case 0: x = random(width); y = -50; break;
      case 1: x = width + 50; y = random(height); break;
      case 2: x = random(width); y = height + 50; break;
      case 3: x = -50; y = random(height); break;
    }
    
    this.eyes.push({
      x: x,
      y: y,
      size: random(40, 70),
      speed: random(0.5, 1.5),
      pupilAngle: 0,
      isOpen: true
    });
  }
  
  display() {
    if (this.state === 'playing') {
      this.drawPlaying();
    } else {
      this.drawComplete();
    }
  }
  
  drawPlaying() {
    // Character (gray square)
    fill(100);
    noStroke();
    rect(width/2 - 20, height/2 - 20, 40, 40);
    image(this.boni, width/2, height/2, 250, 0);
    
    // Eyes
    for (let eye of this.eyes) {
      push();
      translate(eye.x, eye.y);
      
      // Eye circle
      fill(200);
      stroke(0);
      strokeWeight(2);
      ellipse(0, 0, eye.size);
      
      // Pupil
      let pupilDist = eye.size * 0.15;
      let pupilX = cos(eye.pupilAngle) * pupilDist;
      let pupilY = sin(eye.pupilAngle) * pupilDist;
      fill(0);
      noStroke();
      ellipse(pupilX, pupilY, eye.size * 0.25);
      
      pop();
    }
    
    // UI
    this.drawUI();
  }
  
  drawUI() {
    // Exposure meter
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(15, 15, 150, 25);
    
    noStroke();
    fill(this.exposureMeter > 70 ? 100 : 150);
    rect(17, 17, (146 * this.exposureMeter / 100), 21);
    
    fill(0);
    textAlign(LEFT, CENTER);
    textSize(10);
    text(`EXPOSURE: ${floor(this.exposureMeter)}%`, 20, 27);
    
    // Progress
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(width - 165, 15, 150, 25);
    
    noStroke();
    fill(100);
    rect(width - 163, 17, (146 * this.progress / 100), 21);
    
    fill(0);
    text(`PROGRESS: ${floor(this.progress)}%`, width - 160, 27);
    
    // Stats
    textAlign(LEFT, TOP);
    textSize(10);
    text(`Eyes Closed: ${this.eyesClosed}`, 15, 50);
    text(`Active: ${this.eyes.length}`, 15, 65);
  }
  
  drawComplete() {
    fill(200);
    stroke(0);
    strokeWeight(3);
    rect(100, 140, 400, 120);
    
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(22);
    text("SANCTUARY REACHED", width/2, 170);
    
    textSize(12);
    text(`Eyes closed: ${this.eyesClosed}`, width/2, 200);
    
    // Button
    fill(100);
    rect(225, 220, 150, 30);
    fill(255);
    textSize(14);
    text("CONTINUE", width/2, 235);
  }
  
  handleClick(mx, my) {
    if (this.state === 'playing') {
      for (let i = this.eyes.length - 1; i >= 0; i--) {
        let eye = this.eyes[i];
        let d = dist(mx, my, eye.x, eye.y);
        if (d < eye.size / 2) {
          eye.isOpen = false;
          this.eyesClosed++;
          this.exposureMeter = max(0, this.exposureMeter - 3);
          break;
        }
      }
    } else if (this.state === 'complete') {
      if (mx > 225 && mx < 375 && my > 220 && my < 250) {
        return 'next';
      }
    }
    return null;
  }
  
  reset() {
    this.eyes = [];
    this.eyesClosed = 0;
    this.exposureMeter = 0;
    this.progress = 0;
    this.spawnTimer = 0;
    this.spawnInterval = 120;
    this.state = 'playing';
  }
}