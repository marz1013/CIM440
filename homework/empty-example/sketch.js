var hitX = 180;
var hitY = 180;
var threshold = 20;

var hitDistance = 0;

var changeBackground = "white";


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  //background(255);
  //calculates distance between 2 points
  hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance" + hitDistance);
  //if the distance is less than or equal to 20, our range is 0-20 including 20.
  if(hitDistance <= threshold){
    fill(127);
    text("Click here", hitX, hitY+30);
  }else{
    //if the above is not true, then execute the else state
    fill(255);
  }
    ellipse(hitX,hitY,threshold*2,threshold*2);

function mousePressed(){
  // on click
  if(hitDistance <= threshold){
    console.log("Clicked");
    changeBackground = "blue";
  }else{
    //if the above is not true, then execute the else state
    console.log("Clicked Outside");
    changeBackground = "white";
  }

};

}
