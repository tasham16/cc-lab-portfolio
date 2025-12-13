// Character.js
// Character used across all scenes

class Character {
  constructor() {
    this.thoughts = "Okay, not so bad...";
  }
  
  updateThought(thought) {
    this.thoughts = thought;
  }
  
  // Draw hands at BOTTOM of canvas (POV style)
  drawHands(paperX, paperY, paperWidth, hands) {
    image(hands, paperX - 5 - LAYOUT.handWidth, height)
//     fill(COLORS.handColor);
//     noStroke();
    
//     // Left hand (bottom-left, extends off canvas)
//     rect(paperX - 5 - LAYOUT.handWidth, 
//          height - LAYOUT.handHeight + 20, 
//          LAYOUT.handWidth, 
//          LAYOUT.handHeight);
    
//     // Right hand (bottom-right, extends off canvas)
//     rect(paperX + paperWidth + 5, 
//          height - LAYOUT.handHeight + 20, 
//          LAYOUT.handWidth, 
//          LAYOUT.handHeight);
  }
  
  // Display thoughts at bottom of screen
  displayThoughts(x, y) {
    fill(COLORS.textLight);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    text(`"${this.thoughts}"`, x, y);
  }
}