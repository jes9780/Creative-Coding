let sunIntensitySlider;
let sunVal;
let bubbles = [];
let sun;

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

  sun=new Sun(400,0);

  sun.display();
  sun.update();

  bubbles.push(new Bubble(width/2,height/7*6));

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].checkPosition();
    bubbles[i].display();
  }

  let surplus=bubbles.length-500;

  for (let i=0; i<surplus; i++){
    bubbles.splice(0,1);
  }
  console.log(bubbles.length);
  for (let i=bubbles.length-1; i>=0;i--){
    if(bubbles[i].alive==false){
      bubbles.splice(i,1);
    }
  }
}

class Sun{
  constructor(startX, startY, sunVal){
    this.x = startX;
    this.y = startY;
    this.xSpeed=sunVal;
    this.ySpeed=sunVal;
  }
  update(){
    //update x position
    this.x+=this.xSpeed;
    //increase x speed little by little
    this.xSpeed*=1.025;
    //update y position
    this.y+=this.ySpeed;
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
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.diameter = map(sunVal, 0, 20, 0.1, 5);
    this.speed=map(sunVal, 0, 150, 0.1, 5);
    this.angle = random()*2*PI;
    this.alive=true;
  }
  update() {
    //update x position
    this.x+=cos(this.angle)*this.speed;
    //increase x speed
    //update y position
    this.y+=sin(this.angle)*this.speed;
    //update y speed
    this.speed*=1.025;

  }

  display() {
    fill(255);
    push();
    translate(this.x, this.y);
    circle(0, 0, this.diameter);
    pop();
  }
  checkPosition(){
    let distanceFromCenter=dist(this.x,this.y,width/2,height/7*6);
    let distanceAtWhichToBeDeleted=40;
    if(distanceFromCenter>=distanceAtWhichToBeDeleted){
      this.alive=false;
    }
  }
}
