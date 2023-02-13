let canvas;
let button;

let food = 0;
let feeding = false;

let hungry = 0;
let full = 1;
let tamaState = hungry;

let tamaX;
let tamaY;
let tamaDiam;

function setup() {

  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  tamaX = width/3;
  tamaY = height/2;
  tamaDiam = width/10;
  //frameRate=20;



  addGUI();
}

function draw() {
  background(200,200,250);
  
  //Drawing
  noStroke();

  //manage state of Tama
  if(tamaState == hungry){
    fill(255);

    //manage switching to full state
    if(tamaDiam > width/10){
      tamaState = full;
    }

  }else if(tamaState == full){
    //full color
    fill(0,255,0);

    //manage returning to hungry state
    if(tamaDiam > width/10){
      if(frameCount % 2 == 0) tamaDiam--; // reduce every second frame
    }else{
      tamaState = hungry;
    }
  }

  //draw Tama and closed mouth
  // circle(tamaX,tamaY,tamaDiam);
  // fill(0);
  // let mouthOffset = tamaDiam/2;
  // rect(tamaX-mouthOffset/2,tamaY,mouthOffset,3);
  //stroke(255,192,190)
  stroke(0)
  strokeWeight(3)
  fill(98,143,65)
  //ellipse(160,200,300,360);
 
  
//脸
  noStroke(0)
fill(223,170,118)
quad(200,50,100,100,50,250,180,350)
fill(110,187,215)
quad(200,50,300,140,280,250,180,350)
fill(173,129,192)
quad(120,350,250,330,250,360,125,360)


fill(236,204,103)
rect(50,80,50, 200)
rect(50,50,250,100)
rect(250,100,50, 130)

//erhuan

fill(140,92,160)
ellipse(80,240,20,20)
ellipse(280,200,20,20)
quad(280,215,270,250,280 ,300,295,280)
quad(80,255,65,279,78,355,95,320)
//zui
// fill(216,131,64)
// arc(160,280, 40,30,  PI,TWO_PI)
// arc(200,280, 45,30,  PI,TWO_PI)
// fill(250,250,250)
// arc(190,280, 70, 20, TWO_PI, PI)
// fill(250,250,250 ,100)
// arc(190,280, 80, 25,TWO_PI, PI)

fill(216,131,64)

ellipse(tamaX,tamaY,tamaDiam,tamaDiam/2) 
//let mouthOffset = tamaDiam/6;

//bizi
fill(89,75,72)
quad(180,200,170,240,190,245,195,200)

//saihong

fill(255,186,171)
ellipse(125,250,40,20)
ellipse(230,235,20,40)


//yanjing
fill(250,250,250)
quad(120,180,165,180,170,200,125,210)
quad(210,180,245,180,245,200,205,210)
fill(0)
ellipse(142,190,20,40)
ellipse(230,190,20,30)
stroke(0,0,0,50)
line(200,150, 175,345)

//jiemao
noStroke(0)
triangle(125,210,130,210,127,224)
triangle(135,209,140,209,136,224)
triangle(148,205,155,205,153,224)
triangle(160,202,165,202,165,216)
triangle(135,209,140,209,136,224)
triangle(135,209,140,209,136,224)

triangle(210,180,215,180,213,165)
triangle(220,180,225,180,223,163)
triangle(230,180,235,180,234,166)
triangle(240,180,245,180,246,162)


 


  if(food > 0 ){

    //Tama Eat
    if(frameCount % 30 < 15 && tamaState == hungry){
      eatFood();
    }

    //draw food
    fill(100,100,100,200);
    circle(tamaX,tamaY,food);

  }else if(feeding){
    //manage button state, only do this once IF the button is inactive
    feeding = false;
    button.html("FEED");
    button.removeClass("inactive");
  }
  

}

function eatFood(){

  //draw open mouth
  // fill(0);
  // circle(tamaX,tamaY,tamaDiam);

  fill(87,52,18)

  ellipse(tamaX,tamaY,tamaDiam/2,tamaDiam/4) 

  //reduce food & grow Tama
  food --;
  tamaDiam++;

}

function addGUI()
{

  //add a button
  button = createButton("FEED");

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    if(!feeding){
      //set food to random value
      food = random(40,60);
      feeding = true;

      //manage button state
      button.html("FEEDING");
      button.addClass("inactive");
    }
    
}

