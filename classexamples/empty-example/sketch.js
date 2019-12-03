var mediumbrown


function preload(){
  mediumbrown = loadImage("final/mediumbrown.png");
}

function setup() {
  // put setup code here
createCanvas(400,400);

}

function draw() {
  // put drawing code here

image(mediumbrown,0,0,mediumbrown.width/4,mediumbrown.height/4);

}
