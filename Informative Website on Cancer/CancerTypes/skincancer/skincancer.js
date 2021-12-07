let sunIntensitySlider;
let screenIntensitySlider;
let sunVal;
let screenVal;
var cnv;
let g;
let b;

function centerCanvas(){
  var x=(windowWidth-width-650)/2;
  var y=(windowHeight-height)/2;
  cnv.position(x,y);
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent = 'sketch-container';
  sunIntensitySlider=document.getElementById("sunIntensity");
  screenIntensitySlider=document.getElementById("screenIntensity");
}

function draw() {
  background(74, 185, 232);
  noStroke();
  g=195
  b=116
  fill(219, g, b);
  rect(0,300,400);
  // sunIntensitySlider.position(200,500);
  // screenIntensitySlider.position(200,550);
  sunVal=sunIntensitySlider.value;
  screenVal=screenIntensitySlider.value;
  push();
  fill("yellow");
  circle(400,0,sunVal*5);
  pop();
}
