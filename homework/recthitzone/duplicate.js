var hitX = 180;
var hitY = 180;
var threshold = 20;


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  //calculates distance between 2 points
  var hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance" + hitDistance);
  //if the distance is less than or equal to 20, our range is 0-20 including 20.
  if(hitDistance <= threshold){
    fill(127);
  }
  ellipse(hitX,hitY,threshold*2,threshold*2);

}
