var sc
var mn
var hr
var scAngle
var mnAngle
var hrAngle





function setup() {
  createCanvas(1300,600);
  angleMode(DEGREES); 
    
}

function draw() {
    background(0,0,0);  
    angleMode(DEGREES); 

    translate(200,200)
    hr = hour(); 
    mn = minute();
    sc = second();
    
    scAngle = map(sc,0,60,0,360);
    mnAngle = map(mn,0,60,0,360);
    hrAngle = map(hr % 12,0,12,0,360);

   
 
 
    push();
    rotate(-90);
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(1); 
    line(0,0,100,0);
    pop();
    
    push();
    rotate(-90);
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(4); 
    line(0,0,85,0);
    pop();

    push();
    rotate(-90);
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(6); 
    line(0,0,50,0);
    pop();
    
 
 
    push();
    noFill();
    stroke("red")
    strokeWeight(2)
    rotate(-90);
    arc(10,0,300,300,0,scAngle)
    pop();


    push();
    noFill();
    stroke("green")
    strokeWeight(5)
    rotate(-90);
    arc(10,0,280,280,0,mnAngle)
    pop();


    push();
    noFill();
    stroke("blue")
    strokeWeight(7)
    rotate(-90);
    arc(10,0,260,260,0,hrAngle)
    pop();
    textSize(15)
    fill("white")
    stroke("white")
    text("12",-3,-120)
    text("3",110,5)
    text("6",-3,110)
    text("9",-110,5)
    textFont("Times New Roman");
    textSize(55);
    noStroke();
    fill("white");
    text("TICK-TOCK CLOCK", 300,-10);
    fill("pink")
    ellipse(0,0,7,7)
  
  
 
}