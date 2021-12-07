let bg;
let abd;
let lymph;

function preload()
{
  // load images
  bg = loadImage('/Informative Website on Cancer/assets/yuhhh-1.png');
  abd = loadImage('/Informative Website on Cancer/assets/aabd.png');
  lymph = loadImage('/Informative Website on Cancer/assets/lympph.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(bg);
  image(abd, 0, 0, 600, 600);
  image(lymph, 0, 0, 600, 600);

}
