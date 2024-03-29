let side = 90;
let triHeight;
let yOffset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  side = width/22;
  triHeight = cos(30)*side;
  
  yOffset = int(height - int(height/triHeight)*triHeight)/2;
  //noiseDetail(4, 0.5);
}


function windowResized() {
  noLoop();
  
  setTimeout(function(){
    loop();
    resizeCanvas(windowWidth, windowHeight);
  }, 500);
}


function draw() {
 
  background("#000088");
  noFill();
  strokeWeight(3);
  stroke(255);
  
  
  
  let evenRow = false;
  for(let y=yOffset; y<height+triHeight; y+=triHeight) {
    evenRow = !evenRow;
    for(let x=evenRow?side/-2:0; x<width; x+=side) {
      tri(x,y);
    }
  }

}

let noiseScale = .1;
let noiseSpeed = .02;
let noiseThreshold = .3;
let lineAlpha = 255;

function tri(x, y) {
    let x1 = x;
    let y1 = y;
    let x2 = x+side;
    let y2 = y;
    let x3 = x+side/2;
    let y3 = y-cos(30)*side;
  
    xc = (x1+x2+x3)/3;
    yc = (y1+y2+y3)/3;
  
    //let c = color(colors[0]);
    //c.setAlpha(noise(xc+x1*noiseScale, yc+y1*noiseScale, frameCount*noiseSpeed)*lineAlpha-64);
    //stroke(c);
  
    strokeWeight(1);
    stroke(255, noise(xc+x1*noiseScale, yc+y1*noiseScale, frameCount*noiseSpeed)*lineAlpha-128);
    line(x1,y1,x2,y2);
    stroke(255, noise(xc+x2*noiseScale, yc+y2*noiseScale, frameCount*noiseSpeed)*lineAlpha-128);
    line(x3,y3,x2,y2);
    //stroke(255, noise(xc+x3*noiseScale, yc+y3*noiseScale, frameCount*noiseSpeed) < noiseThreshold ? lineAlpha : 0);
    stroke(255, noise(xc+x3*noiseScale, yc+y3*noiseScale, frameCount*noiseSpeed)*lineAlpha-128);
    line(x1,y1,x3,y3);
  
    strokeWeight(2);
    //stroke(255);
    stroke(255, noise(xc+x1*noiseScale, yc+y1*noiseScale, frameCount*noiseSpeed)*256);
    point(x1, y1);
}

