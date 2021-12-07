let sunIntensitySlider;
let screenIntensitySlider;
let sunVal;
let screenVal;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent = 'sketch-container';
  sunIntensitySlider=document.getElementById("sunIntensity");
  screenIntensitySlider=document.getElementById("screenIntensity");
}

function draw() {
  background(74, 185, 232);
  noStroke();
  fill(219, 195, 116);
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
