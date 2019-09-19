
var puppy;

var showOrHide = false

function preload(){

  puppy = loadImage("puppy.jpg");
}


show = createButton("Show Puppy");
show.mousePressed(function(){


showOrHide = true;

});


hide = createButton("Hide Puppy");

hide.mousePressed(function(){


  showOrHide = false;
})

function setup() {
  // put setup code here

createCanvas(400,400);


}
function draw() {
  // put drawing code here

  background(255);
  if (showOrHide == true){

  image(puppy,100,100, puppy.width/4, puppy.height/4);
}

//message in quotes, x pos, y pos
text("Click on the Buttons to see a cute puppy", 10,10);


}
