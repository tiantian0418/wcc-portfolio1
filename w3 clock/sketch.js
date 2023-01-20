let it=0.1
let at=0.8


function setup() {
  createCanvas(500, 500);
}


function draw(){
 background(255);


 
for(let x=0; x<width; x+=width/20){
  for(let y=0; y <height; y+=height/20){
    noStroke()
    fill(11,255,255*cos(at),100);
    ellipse(x+width/50,y+height/50, width/20,height/20);
    at=at+3
  }
}

stroke(255,255,255,255*cos(it))
fill(249,65,169,255*cos(it))
  it=it+0.05


  rect(50,50,20,20)
  rect(70,50,20,20)
  rect(110,50,20,20)
  rect(130,50,20,20)

  rect(310,330,20,20)
  rect(290,330,20,20)
  rect(370,330,20,20)
  rect(350,330,20,20)

let y1=110
for(let x1=50 ; x1 < 150 ; x1 += 20 ){
  
  rect(x1,y1,20,20)

}

let y11=350
for(let x11=270 ; x11 < 410 ; x11 += 20 ){
  
  rect(x11,y11,20,20)
}

let y3=70
for(let x3=30 ; x3 < 170 ; x3 += 20 ){
  rect(x3,y3,20,20)
}

let y22=370
for(let x22=270 ; x22 < 410 ; x22 += 20 ){
  
  rect(x22,y22,20,20)
}

  
  let y5=130
  for(let x5=70 ; x5 < 130 ; x5 += 20 ){
      rect(x5,y5,20,20)
}

let y33=390
for(let x33=290 ; x33 < 390 ; x33 += 20 ){
  
  rect(x33,y33,20,20)
}

let y4=150
for(let x4=90 ; x4 < 110 ; x4 += 20 ){
    rect(x4,y4,20,20)
}

let y44=410
for(let x44=310 ; x44 < 370 ; x44 += 20 ){
  
  rect(x44,y44,20,20)
}

  
let y2=90
for(let x2=30 ; x2 < 170 ; x2 += 20 ){
  rect(x2,y2,20,20)
}
rect(330,430,20,20)

 

}



  