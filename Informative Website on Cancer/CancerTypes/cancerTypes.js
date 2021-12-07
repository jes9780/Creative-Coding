let sunIntensitySlider;
let sunVal;
let bubbles = [];

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent = 'sketch-container';
  sunIntensitySlider=document.getElementById("sunIntensity");
}

function draw() {
  background(74, 185, 232);
  noStroke();
  fill(219, 195, 116);
  rect(0,300,400);
  // sunIntensitySlider.position(200,500);
  // screenIntensitySlider.position(200,550);
  sunVal=sunIntensitySlider.value;

sun.display;
sun.update;

  bubbles.push(new Bubble(200,350));

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].checkPosition();
    bubbles[i].display();
  }

  let surplus=bubbles.length-500;

  for (let i=0; i<surplus; i++){
    bubbles.splice(0,1);
  }

  for (let i=bubbles.length-1; i>=0;i--){
    if(bubbles[i].alive==false){
      bubbles.splice(i,1);
    }

  }
}
}

class Sun{
  constructor(startX, startY, sunVal*5){
    this.x = startX;
    this.y = startY;
    this.xSpeed=sunVal-screenVal;
    this.ySpeed=sunVal-screenVal;
  }
  update(){
    //update x position
    this.x+=this.xSpeed;
    //increase x speed little by little
    this.xSpeed*=1.025;
    //update y position
    this.y+=this.ySpeed
    //update y speed
    this.ySpeed*=1.025;
  }
  display() {
    push();
    fill("yellow");
    circle(400,0,sunVal*5);
    pop();
  }
}

class Bubble {
  constructor(200, 300) {
    this.x = 200;
    this.y = 300;
    this.diameter = 6;
    this.xSpeed=sunVal;
    this.ySpeed=sunVal;
    this.alive=true;
  }
  update() {
    //update x position
    this.x+=this.xSpeed;
    //increase x speed little by little
    this.xSpeed*=1.025;
    //update y position
    this.y+=this.ySpeed
    //update y speed
    this.ySpeed*=1.025;

  }

  display() {
    push();

    translate(this.x, this.y);
    circle(0, 0, this.diameter);

    pop();
  }
  checkPosition(){
    let distanceFromCenter=dist(this.x,this.y,width/2,height/2);
    let distanceAtWhichToBeDeleted=40;
    if(distanceFromCenter>=distanceAtWhichToBeDeleted){
      this.alive=false;
    }
  }
  Bubble.display;
  Bubble.update;
}
