var eyeSize = 50
var face = 250
var highlight = 15
var blush = 50

var faceColor = "gold";
var backgroundC = "lightcoral";

var prevMillis = 0;
var interval = 2000;
var blinking = false;

var phrases = ["", "Hello", "Goodbye", "Have Fun"];
var currentPhrase = 0;

function setup() {
  // put setup code here

  //  var pointX = 0
  //  var pointY = 0

    createCanvas(500,500);
  background("lightcoral");
//  background("mistyrose");

}

function draw() {
  // put drawing code here
  background(backgroundC);
  //fill("gold");
  fill(faceColor);
  stroke("black");
    strokeWeight(1);
  ellipse(250,250,face); //face

fill("white");
noStroke();
rect(400, 200, 75, 55, 20)//speech bubble
triangle(450, 250, 410, 240, 390, 275);

//  fill("black")
//  ellipse(200,200,eyeSize);
//  ellipse(300,200,eyeSize);
// ellipse(200,200,50,50);
// ellipse(300,200,50,50); //eyes

//  fill("white")
//  ellipse(210,190,highlight);
//  ellipse(310,190,highlight);
// ellipse(210,190,15,15);
// ellipse(310,190,15,15); //highlights

//  fill("pink");
//  noStroke();
//  ellipse(175,265,blush);
//  ellipse(325,265,blush);
// ellipse(175,265,50,50);
// ellipse(325,265,50,50); //blush

  fill("black");
  arc(250,300,75,75,0,PI); //mouth

//  noFill();
//  stroke("black");
//  strokeWeight(3);
//  arc(200,210,50,50,PI,0);
//  noFill();
//  stroke("black");
//  strokeWeight(3);
//  arc(300,210,50,50,PI,0); //closed eyes


  if(millis() - prevMillis > interval){
    if(blinking == true){
      blinking = false;
    }else{
      blinking = true;
    }
    prevMillis = millis();
  }

  if(blinking == true){
    fill("black")
    ellipse(200,200,eyeSize);
    ellipse(300,200,eyeSize);
    fill("white")
    ellipse(210,190,highlight);
    ellipse(310,190,highlight);
  }else{
    noFill();
    stroke("black");
    strokeWeight(3);
    arc(200,210,50,50,PI,0);
    noFill();
    stroke("black");
    strokeWeight(3);
    arc(300,210,50,50,PI,0);

    fill("pink");
    noStroke();
    ellipse(175,255,blush);
    ellipse(325,255,blush);
   ellipse(175,255,50,50);
   ellipse(325,255,50,50);
  }
fill("black");
  text(phrases[currentPhrase], 420,230);
  text("Click the Background!", 10,20);
}




//  if(millis() - prevMillis > interval){
//    if(blinking == true){
//      blinking = false;
//    }else{
//      blinking = true;
//    }
//    prevMillis = millis();
//  }

//  if(blinking == true){
//    ellipse(10,10,10,10);
//  }else{
//    rect(10,10,10,10)
//  }
//}


function mousePressed(){
backgroundC = "PaleVioletRed";
//random Phrase
currentPhrase = Math.floor(random(1,phrases.length));
console.log(phrases[currentPhrase]);
}

function mouseReleased(){
backgroundC = "lightcoral";
}

//function mousePressed(){
//faceColor = "red";
//}

//function mouseReleased(){
//faceColor = "gold";
//}
