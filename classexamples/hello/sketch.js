function setup() {
  // put setup code here
  createCanvas(400,400);
}

  hello();
  goodbye("zeven" );

function draw() {
  // put drawing code here
  //frameRate(1);

  background(255);
  //the order of your parameters is important

  circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));

  for(var i = 0; i < 500; i++){
    circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));
  }

  circleHitzone(200,200);
}

function hello(){
  console.log("hello");
}

function goodbye(message){
  console.log("goodbye" + message);
}

function circleColor(xpos, ypos, csize, r,g,b){
  fill(r,g,b);
  ellipse(xpos,ypos, csize,csize);
}

function circleHitzone(distx, disty){
  var curDist = dist(mouseX,mouseY, distx, disty);
  //console.log("curDist" + curDist);
  ellipse(distx,disty,10,10);

  return curDist;

  if(curDist < 10){
    return true;
  }else{
    return false;
  }
}
