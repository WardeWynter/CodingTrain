function setup() {
  createCanvas(600, 400);
  background(250,250,100)
}

function draw() {
  //background(250,250,100);
  noStroke();
  fill(250,200,200, 50);
  ellipse(mouseX,mouseY, 25, 25);
  
  //fill(200,250,200);
  //rect(mouseX+50,mouseY, 100, 100);
}

function mousePressed() {
  background(250,250,100);
}
  
