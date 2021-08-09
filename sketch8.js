// mosaic Image


let greg;
let sz, gh, gw;
let mySlider;
let imgoff =20;

function preload() {
  greg = loadImage("gregL7.jpg");
}

function setup() {
  if (windowWidth> windowHeight){
  createCanvas(windowHeight, windowHeight);
  } else{
    createCanvas(windowWidth, windowWidth);
  }
  //greg.filter(THRESHOLD);
  //greg.filter(GRAY);
  gh = height/imgoff;
  gw = width/imgoff;
  greg.resize(gw,gh)
  pixelDensity(1);
  background(255);
  rectMode(CENTER);
  greg.loadPixels();
  
  noStroke();
  sz = 5;
  drawImage();
  
  
}

function mouseClicked(){
   //imgoff = map(mouseY, 0, height,15, 40);
   sz = map(mouseX,0,width,5, imgoff,0.5);
   
   drawImage();
}

function drawImage(){
  //let bg = random([0,160,255])
  background('linen');
  for (let i =0; i<gw-1; i++){
    for(let j =0; j <gh-1; j++){
     
      let col = greg.get(i, j);
      fill(col[0], col[1], col[2], col[3]); // for color
      //fill(col[0]);  //for gray scale
      let sh = random([1,2]);
      if (sh === 1){
       rect(i*imgoff,j*imgoff, sz, sz);
      } else{
        ellipse(i*imgoff,j*imgoff,sz,sz);
      }
      
      
    }
    
  }
  
}