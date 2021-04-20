function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
  
  

translate(200,200)
rotate (-90)

  
  var hr = hour();
  var mn = minute();
  var sc = second();
  strokeWeight(8);
  stroke("black");
  noFill(); 
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(8);
  stroke("orange");
  noFill();
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle)

strokeWeight(8);
  stroke("pink");
  noFill();
  var hrAngle = map(hr %12,0,60,0,360);
  arc(0,0,260,260,0,hrAngle);

  
  push();
  rotate(scAngle);
  stroke("pink");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("orange");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("black");
  line(0,0,50,0);
  pop();
  
  
}