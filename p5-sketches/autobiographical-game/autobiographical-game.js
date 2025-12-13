// Natasha Mboya
// sketch.js
// Main game loop and scene management

let character;
let scene1, scene2, scene3;
let currentScene = 1;

let form, form_header, hands;

let boni_gogs_welcome, boni_gogs;

let font;

function preload() {
  form = loadImage("assets/form.png");
  form_header = loadImage("assets/form_header.png");
  hands = loadImage("assets/hands.svg");
  bodyFont = loadFont("assets/Nohemi-Light.ttf");
  headerFont = loadFont("assets/Nohemi-Bold.ttf");
  boni_gogs_welcome = loadImage("assets/boni_gogs_hello.png");
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("p5-canvas");
  frameRate(60);
  textFont(bodyFont);

  // Create character
  character = new Character();

  // Create scenes
  scene1 = new Scene1(form, form_header);
  scene2 = new Scene2(boni_gogs_welcome);
  scene3 = new Scene3();
}

function draw() {
  background(COLORS.bg);

  // Update and display current scene
  if (currentScene === 1) {
    scene1.update();
    scene1.display();
    character.drawHands(scene1.paperX, scene1.paperY, LAYOUT.paperWidth, hands);

    // Update thoughts based on scene 1 progress
    if (scene1.scrollSpeed < 1.5) {
      character.updateThought("Okay, not so bad...");
    } else if (scene1.scrollSpeed < 2.0) {
      character.updateThought("Wait, slow down!");
    } else {
      character.updateThought("I CAN'T KEEP UP!");
    }
    character.displayThoughts(width / 2, height - 25);
  } else if (currentScene === 2) {
    scene2.update();
    scene2.display();

    // Update thoughts based on scene 2 exposure
    if (scene2.exposureMeter < 30) {
      character.updateThought("Just ignore them...");
    } else if (scene2.exposureMeter < 70) {
      character.updateThought("This is exhausting...");
    } else {
      character.updateThought("I CAN'T BREATHE...");
    }
    character.displayThoughts(width / 2, height - 25);
  } else if (currentScene === 3) {
    scene3.update();
    scene3.display();

    // Update thoughts based on scene 3 energy
    if (scene3.energy > 50) {
      character.updateThought("I can handle this...");
    } else if (scene3.energy > 20) {
      character.updateThought("I'M SO TIRED");
    } else {
      character.updateThought("JUST LET ME EXIST");
    }
    character.displayThoughts(width / 2, height - 25);
  }

  // Scene indicator
  fill(0);
  noStroke();
  textAlign(RIGHT, TOP);
  textSize(10);
  text(`Scene ${currentScene}/3`, width - 10, 10);
}

function mousePressed() {
  let result = null;

  if (currentScene === 1) {
    result = scene1.handleClick(mouseX, mouseY);
    if (result === "next") {
      currentScene = 2;
      scene2.reset();
    }
  } else if (currentScene === 2) {
    result = scene2.handleClick(mouseX, mouseY);
    if (result === "next") {
      currentScene = 3;
      scene3.reset();
    }
  } else if (currentScene === 3) {
    result = scene3.handleClick(mouseX, mouseY);
    if (result === "restart") {
      currentScene = 1;
      scene1.reset();
      scene2.reset();
      scene3.reset();
    }
  }
}

// Debugging

function keyPressed() {
  // Jump to scenes - testif
  if (key === "1") {
    currentScene = 1;
    scene1.reset();
  } else if (key === "2") {
    currentScene = 2;
    scene2.reset();
  } else if (key === "3") {
    currentScene = 3;
    scene3.reset();
  }

  // Scene-specific shortcuts
  if (currentScene === 1) {
    if (key === "f" || key === "F") {
      for (let field of scene1.fields) field.filled = true;
    }

    if (keyCode === ENTER) {
      scene1.navigateNext();
    }
  } else if (currentScene === 2) {
    if (key === "c" || key === "C") {
      scene2.eyes = [];
      scene2.eyesClosed += 20;
    }
  } else if (currentScene === 3) {
    if (key === "w" || key === "W") {
      scene3.questions = [];
      scene3.questionsSwatted += 10;
    }
  }
}
