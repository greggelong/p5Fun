let greg;
let sz;

function preload() {
  greg = loadImage("gregL7.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pixelDensity(1);
  background(0);
  greg.loadPixels();
  if (width > height) {  //size of square depends on window size
    sz = height / 20;
  } else {

    sz = width / 20;
  }
  noStroke();
}

function draw() {

  let imagex = map(mouseX, 0, width, 0, greg.width); // map window to image
  let imagey = map(mouseY, 0, height, 0, greg.height); // map window to image
  let col = greg.get(imagex, imagey);
  fill(col[0], col[1], col[2], col[3]);
  rect(mouseX, mouseY, sz, sz);
}