// Scene3.js
// questions scene

class Scene3 {
  constructor() {
    this.questions = [];
    this.questionsSwatted = 0;
    this.energy = 100;
    this.progress = 0;
    this.spawnTimer = 0;
    this.spawnInterval = 120;
    this.state = 'playing';
    
    // Character position (can move up/down)
    this.characterY = height / 2;
    this.characterSpeed = 5;
    
    // Question bank
    this.questionTexts = [
      "Where are you from?",
      "I'm got so tan, I'm almost as dark as you",
      "I'm  very interested in your braids because I work with rope",
      "Did you have lions as pets?",
      "You're so articulate!",
      "Can I touch your hair?",
      "Do you speak African?",
      "Can I take a picture of you?",
      "How did you learn English?",
      "Kenyan? Do you know Tunde from Nigeria?"
    ];
  }
  
  update() {
    if (this.state !== 'playing') return;
    
    // Handle character movement (Arrow keys or WASD)
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // W
      this.characterY -= this.characterSpeed;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // S
      this.characterY += this.characterSpeed;
    }
    
    // Keep character in bounds
    this.characterY = constrain(this.characterY, 40, height - 40);
    
    // Spawn questions (faster spawn rate as progress increases)
    let currentSpawnRate = this.spawnInterval - (this.progress * 0.7); // Gets faster
    this.spawnTimer++;
    if (this.spawnTimer >= max(40, currentSpawnRate)) {
      this.spawnQuestion();
      this.spawnTimer = 0;
    }
    
    // Update questions
    for (let i = this.questions.length - 1; i >= 0; i--) {
      let q = this.questions[i];
      
      // Speed increases with progress
      let speedMultiplier = 1 + (this.progress / 150); // Speed increases
      q.x -= q.speed * speedMultiplier;
      
      // Hit character if reaches left side AND collides with character
      if (q.x + q.width > 80 && q.x < 120 && !q.missed) {
        // Check vertical collision with character
        if (q.y < this.characterY + 30 && q.y + q.height > this.characterY - 30) {
          q.missed = true;
          this.energy -= 5;
        }
      }
      
      // Remove if off screen
      if (q.x < -q.width - 50) {
        this.questions.splice(i, 1);
      }
    }
    
    // Natural energy recovery
    this.energy = min(100, this.energy + 0.05);
    
    // Check exhaustion
    if (this.energy <= 0) {
      this.questions = [];
      this.energy = 40;
    }
    
    // Update progress
    this.progress = min(100, (this.questionsSwatted / 40) * 100);
    
    // Check if complete
    if (this.progress >= 100) {
      this.state = 'complete';
    }
  }
  
  spawnQuestion() {
    let text = random(this.questionTexts);
    let w = text.length * 7 + 40;
    
    this.questions.push({
      text: text,
      x: width + 50,
      y: random(80, height - 80),
      width: w,
      height: 40,
      speed: random(1.8, 3.2), 
      missed: false
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
    // Character (rectangles - moves with characterY)
    fill(100);
    noStroke();
    rect(80, this.characterY - 30, 30, 60); // Body
    rect(85, this.characterY - 50, 20, 20); // Head
    
    // Questions
    for (let q of this.questions) {
      fill(150);
      stroke(0);
      strokeWeight(2);
      rect(q.x, q.y, q.width, q.height, 5);
      
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(10);
      text(q.text, q.x + q.width/2, q.y + q.height/2);
    }
    
    // Door (goal)
    fill(150);
    stroke(0);
    strokeWeight(2);
    rect(width - 60, height/2 - 50, 40, 100);
    fill(0);
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);
    text("DOOR", width - 40, height/2);
    
    // UI
    this.drawUI();
  }
  
  drawUI() {
    // Energy meter
    fill(255);
    stroke(0);
    strokeWeight(2);
    rect(15, 15, 150, 25);
    
    noStroke();
    fill(this.energy > 40 ? 100 : 150);
    rect(17, 17, (146 * this.energy / 100), 21);
    
    fill(0);
    textAlign(LEFT, CENTER);
    textSize(10);
    text(`ENERGY: ${floor(this.energy)}%`, 20, 27);
    
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
    text(`Swatted: ${this.questionsSwatted}`, 15, 50);
    text(`Active: ${this.questions.length}`, 15, 65);
    
    // Controls hint
    textAlign(CENTER, TOP);
    textSize(9);
    fill(100);
    text("↑↓ or W/S to dodge", width/2, height - 15);
  }
  
  drawComplete() {
    fill(200);
    stroke(0);
    strokeWeight(3);
    rect(60, 80, 480, 240);
    
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(22);
    text("HOTEL ROOM", width/2, 110);
    
    textSize(12);
    text("You survived.", width/2, 150);
    text(`Questions swatted: ${this.questionsSwatted}`, width/2, 175);
    text("This is the reality of traveling while Black", width/2, 210);
    text("with an African passport.", width/2, 230);
    
    // Button
    fill(100);
    rect(225, 260, 150, 40);
    fill(255);
    textSize(14);
    text("PLAY AGAIN", width/2, 280);
  }
  
  handleClick(mx, my) {
    if (this.state === 'playing') {
      // Click to swat questions
      for (let i = this.questions.length - 1; i >= 0; i--) {
        let q = this.questions[i];
        if (mx > q.x && mx < q.x + q.width && my > q.y && my < q.y + q.height) {
          this.questions.splice(i, 1);
          this.questionsSwatted++;
          this.energy -= 3;
          break;
        }
      }
    } else if (this.state === 'complete') {
      if (mx > 225 && mx < 375 && my > 260 && my < 300) {
        return 'restart';
      }
    }
    return null;
  }
  
  reset() {
    this.questions = [];
    this.questionsSwatted = 0;
    this.energy = 100;
    this.progress = 0;
    this.spawnTimer = 0;
    this.spawnInterval = 120;
    this.state = 'playing';
    this.characterY = height / 2;
  }
}