var eyeSize = 50
var face = 250
var highlight = 15
var blush = 50

var faceColor = "gold"
function setup() {
  // put setup code here

//  var pointX = 0
//  var pointY = 0

  createCanvas(500,500);
  background("pink");
background("lightcoral");

}

function draw() {
  // put drawing code here

  //fill("gold");
  fill(faceColor);
  stroke("black");
  ellipse(250,250,face); //face

  fill("black")
  ellipse(200,200,eyeSize);
  ellipse(300,200,eyeSize);
// ellipse(200,200,50,50);
// ellipse(300,200,50,50); //eyes

  fill("white")
  ellipse(210,190,highlight);
  ellipse(310,190,highlight);
// ellipse(210,190,15,15);
// ellipse(310,190,15,15); //highlights

  fill("pink");
  noStroke();
  ellipse(175,265,blush);
  ellipse(325,265,blush);
// ellipse(175,265,50,50);
// ellipse(325,265,50,50); //blush

  fill("black");
  arc(250,300,75,75,0,PI); //mouth


}


function mousePressed(){
faceColor = "red";
}

function mouseReleased(){
faceColor = "gold";
}
