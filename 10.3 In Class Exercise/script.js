console.log("script works!");
let circlePositionSlider=document.getElementById("circlePositionSlider");
let circleSizeSlider=document.getElementById("circleSizeSlider");


function setup(){
  let canvas=createCanvas(200,200);
  canvas.parent("canvasContainer");

  background(0);
}

function draw(){
  background(0);
  fill("lightyellow");

  let sliderVal=circlePositionSlider.value;
  console.log(circlePositionSlider.value);

  let x=map(sliderVal,0,100,0,width);

  let sizeSliderVal=circleSizeSlider.value;
  let size=map(sliderVal,0,100,0,width);

  circle(x,height/2,circleSizeSlider.value);
}
