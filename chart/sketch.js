


function setup() {
	

  var data = [123, 200, 100, 40, 80, 50,99,47,26],
      maxData = max(data);
  var names = ["Gardener","Jitanjali", "Crescent Moon", "Fruit gethering","Stray Bird", "Lover’s Gift and Crosing","Sanshva Sangit","Sishn","Probhat Sangit"]

  createCanvas(windowWidth, windowHeight);
	background(255,228,225);
  noStroke();
  
  
  var barWidth =  (width / data.length) * .7, 
      barMargin = (width / data.length) * .3;
      
  
  
  for(var i = 0; i < data.length; i++) {
    
    push(); 
    translate(i * (barWidth + barMargin), 2); 
  
    fill(135,206,250,200); noStroke();
    var barHeight = map(data[i], 0, maxData,  0, -height)
    rect(0, height,barWidth, barHeight); 
    fill(240,255,255);
  
    text(data[i], barWidth/2.5, height * (1-.1) );
    fill(0);

    text(names[i],barWidth/7.5, height * (1-.3))

    
    pop();
  }
}
