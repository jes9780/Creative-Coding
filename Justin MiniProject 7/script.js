let dancer;
let jellyPositionSlider=document.getElementById("jellyPositionSlider");
let jellyStrobeSlider=document.getElementById("jellyStrobeSlider");
let sliderVal;
let sliderStrobeVal;
let img;
let c;

function preload(){
  img = loadImage('stars-2129014_1280.jpg');
}

function setup() {
  createCanvas(windowWidth, 500);
  dancer = new JustinDancer(width/2-100, height/2-100);
  img.loadPixels();
  c = img.get(img.windwWidth, img.windowHeight);
}

function draw() {
  background(c);
  image(img, 25, 25, 50, 50);
  dancer.update();
  dancer.display();

  let jellyPositionSlider=document.getElementById("jellyPositionSlider");
  let jellyStrobeSlider=document.getElementById("jellyStrobeSlider");

  sliderVal=jellyPositionSlider.value;
  sliderStrobeVal=jellyStrobeSlider.value;
  sliderVal=map(sliderVal,0,100,-width/2,width/2);
}

class JustinDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.extend = 0;
    this.random = random(20, 100);
  }
  update() {
    this.extend = sin(frameCount / 10) * this.random;
  }
  display() {
    let ranColor = random(sliderStrobeVal)*2.55;
    push();
    translate(sliderVal,0);
    this.drawBody(ranColor);
    this.drawLeg1(ranColor);
    this.drawLeg2(ranColor);
    this.drawLeg3(ranColor);
    this.drawLeg4(ranColor);
    this.drawLeg5(ranColor);
    this.drawLeg6(ranColor);
    this.drawLeg7(ranColor);
    this.drawLeg8(ranColor);
    this.drawLeg9(ranColor);
    this.drawLeg10(ranColor);
    pop();
  }

  drawBody(ranColor) {
    fill(ranColor);
    circle(this.x + 100, this.y + 50, 70);
    push();
    fill(0);
    rect(this.x + 65, this.y + 50, 70, 35);
    pop();
  }

  drawLeg1(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 68,
      this.y + 50,
      this.x + 68,
      this.y + 80 + this.extend * 0.35
    );
    pop();
  }

  drawLeg2(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 75,
      this.y + 50,
      this.x + 75,
      this.y + 100 + this.extend * 0.5
    );
    pop();
  }

  drawLeg3(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 82,
      this.y + 50,
      this.x + 82,
      this.y + 110 + this.extend * 0.4
    );
    pop();
  }

  drawLeg4(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 89,
      this.y + 50,
      this.x + 89,
      this.y + 130 + this.extend * 0.3
    );
    pop();
  }

  drawLeg5(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 96,
      this.y + 50,
      this.x + 96,
      this.y + 140 + this.extend * 0.2
    );
    pop();
  }

  drawLeg6(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 103,
      this.y + 50,
      this.x + 103,
      this.y + 140 + this.extend * 0.2
    );
    pop();
  }

  drawLeg7(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 110,
      this.y + 50,
      this.x + 110,
      this.y + 130 + this.extend * 0.3
    );
    pop();
  }

  drawLeg8(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 117,
      this.y + 50,
      this.x + 117,
      this.y + 110 + this.extend * 0.4
    );
    pop();
  }

  drawLeg9(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 124,
      this.y + 50,
      this.x + 124,
      this.y + 100 + this.extend * 0.5
    );
    pop();
  }

  drawLeg10(ranColor) {
    push();
    stroke(ranColor);
    strokeWeight(4);
    line(
      this.x + 131,
      this.y + 50,
      this.x + 131,
      this.y + 80 + this.extend * 0.35
    );
    pop();
  }
}
