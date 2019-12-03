var smallblack, smallyellow, smallbrown, smallgrey, smallwhite, mediumblack, mediumyellow, mediumbrown, mediumgrey, mediumwhite, largeblack, largeyellow, largebrown, largegrey, largewhite;

//var sButton, pButton, dButton, cButton, fButton; (fix buttons)

//var currentImage = 0;

//var curImage;

//function preload(){
//  smallblack = loadImage("smallblack.png");
//  smallyellow = loadImage("smallyellow.png");
//  smallbrown = loadImage("smallbrown.png");
//  smallgrey = loadImage("smallgrey.png");
//  smallwhite = loadImage("smallwhite.jpg");

//  mediumblack = loadImage("mediumblack.png");
//  mediumyellow = loadImage("mediumyellow.png");
//  mediumbrown = loadImage("mediumbrown.png");
//  mediumgrey = loadImage("mediumgrey.png");
//  mediumwhite = loadImage("mediumwhite.png");

//  largeblack = loadImage("largeblack.png");
//  largeyellow = loadImage("largeyellow.png");
//  largebrown = loadImage("largebrown.png");
//  largegrey = loadImage("largegrey.png");
//  largewhite = loadImage("largewhite.png");

//var button1;

var click1, click2, click3;

var currentSize = "";
var currentColor = "";


function preload(){
  mediumbrown = loadImage("mediumbrown.png");
}

function preload(){
  largebrown = loadImage("largebrown.png");
}


function setup() {
  // put setup code here
  createCanvas(500,500);

  //button1 = ;

  click1 = new Clickable();
  click1.locate(20, 20);
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function(){
  // this.color = "#AAAAFF";
  // this.textColor = "#FFFFFF";
  // this.text = "Yay!";
  }

  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function(){
  // this.color = "#EEEEEE";
   this.text = "Medium Dog";
  // this.textColor = "#000000";
} // prof wrote this



click2 = new Clickable();
click2.locate(20, 20);
//This function is ran when the clickable is hovered but not pressed.
click2.onHover = function(){
// this.color = "#AAAAFF";
// this.textColor = "#FFFFFF";
// this.text = "Yay!";
}

//This function is ran when the clickable is NOT hovered.
click2.onOutside = function(){
// this.color = "#EEEEEE";
 this.text = "Large Dog";
// this.textColor = "#000000";
} // prof wrote this

//

//  click2.onOutside = function(){
  // this.color = "#EEEEEE";
//   this.text = "Large Dog";
  // this.textColor = "#000000";
//} //i wrote this

  //This function is ran when the clickable is pressed.
//  click1.onPress = function(){
    // this.stroke = "#FF0000";
//    currentSize = "medium";
//    this.color = "#EEEEEE";
//    click2.color = "#FFFFFF"; //prof wrote this

//  click2.onPress = function(){
    // this.stroke = "#FF0000";
//    currentSize = "medium";
//    this.color = "#EEEEEE";
//    click3.color = "#FFFFFF"; //i wrote this


  }

  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function(){
    // this.x += 50;
  }

  click2 = new Clickable();
  click2.locate(100, 20);
  click2.onPress = function(){
    // this.stroke = "#FF0000";
    currentColor = "brown";
    this.color = "#EEEEEE";
    click1.color = "#FFFFFF";

  }


}

function draw() {
  // put drawing code here
  background(255);
  click1.draw();
  click2.draw();

  

  // fill("black");
  // rect(400, 50, 20, 20);
  // fill("gold");
  // rect(400, 80, 20, 20);
  // fill("saddlebrown");
  // rect(400, 110, 20, 20);
  // fill("silver");
  // rect(400, 140, 20, 20);
  // fill("white");
  // rect(400, 170, 20, 20);
  //
  // rect(370,250,80,30);
  // rect(370,300,80,30);
  // rect(370,350,80,30);

  if(currentSize == "medium" && currentColor == "brown"){
    image(mediumbrown,width/2,height/2,200,200);
  }

  if(currentSize == "large" && currentColor == "brown"){
    image(largebrown,width/2,height/2,200,200);
  }



}
