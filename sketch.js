let xPos = 0;
let color = 1;
let size = 1;

function setup() { 
  createCanvas(windowWidth, windowHeight);

} 

function draw() { 
  background(30);
  fill(color%256);

  // TODO: Draw an ellipse with xPos variable for the x position
  ellipse(xPos%width, height/2, size%width,size%width);
  fill(256-color%256,40)
  ellipse(xPos%width, height/2, size%width,(size*4)%width)
  // TODO: increment the color variable by 1
  color +=1;
  // TODO: increment the size variable by 0.5
  size += 0.5;
  // TODO: decrement the xPos variable by 2
  xPos +=2;
}