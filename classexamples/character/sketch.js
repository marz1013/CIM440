var eyeSize = 20;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);

}

function draw() {
  // put drawing code here

  fill("white");
  stroke(0);
  strokeWeight(1);
  fill("blue");//css color
  ellipse(100,100,20,20);//left eye

  ellipse(140,100,20,20);//right eye
  fill(255,0,0);//rgb color
  rect(80,200,100,30);//mouth


  strokeWeight(1);
  line(80,215,180,215);//mouth split

  //width and height
  //console.log("width" + width);
  //console.log("height" + height);
  stroke("orange");
  triangle(width/2,height/2,width/2 + 10, height/2 + 10, width/2 - 10, height/2 + 10);

  arc(300,300,50,50,0,PI);

  arc(400,400,50,50,PI+HALF_PI,0);

  arc(300,150,50,50,0,TWO_PI);


  triangle(100,400,120,420,80,420);





}
