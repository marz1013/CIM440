// global variables are avaible throughout the entire program

var faceColor = "blue";
var pointx = 0;

function setup() {
  // put setup code here
  // if you declare a variable inside of a block of code ie {}, that variable will only be availble inside of that block

  var message = "Hello";

  console.log(message);

  // console.log(drawMessage); Error: not defined because drawMessage's variable scope is inside of the draw loop

}

function draw() {
  // put drawing code here

  // console.log(message); Error: not defined, because message variable scope is only declared inside the setup

  var drawMessage = "this message is in the draw loop"; // this creates a new variable everytime the draw loop happens

  console.log(drawMessage);

}
