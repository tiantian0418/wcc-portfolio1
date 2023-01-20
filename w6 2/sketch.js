function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  rotateX(60);
  noFill();
  stroke(255)
  orbitControl(10,10);

  for(var i = 0;i<50;i++){
var r=map(sin(frameCount/2),-1,1,200,134)
var g=map(cos(frameCount/2),-1,1,234,200)
var b=map(tan(frameCount/8),-1,1,180,50)

stroke(r,g,b);

rotate(5);
beginShape();
for(var j=0;j<360;j+=120){

  var rad=i*20
  var x = rad*cos(j)
  var y =rad *sin(j)
  var z =sin(frameCount * 10+i*5) * 100

  vertex (x,y,z);
}

endShape(CLOSE)

  }
}
