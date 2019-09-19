
var puppy;

function preload(){

  puppy = loadImage("puppy.jpg");
}

function setup() {
  // put setup code here

createCanvas(400,400);


}
function draw() {
  // put drawing code here


image(puppy,0,0); //full scale
//when you divide by a number the image will scale proportianaly

image(puppy,100,100, puppy.width/4, puppy.height/4);
//set exact dimensions

image(puppy,200,200,125,200); //setting exact dimensions scales to that pixel size
}
