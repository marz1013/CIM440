// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22


var sloth, puppy, dinosaur, cat, fox;

var sButton, pButton, dButton, cButton, fButton;

var currentImage = 0;

var curImage;

function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  cat = loadImage("images/cat.jpg");
  fox = loadImage("images/fox.jpg");
}




function setup() {
  // put setup code here
  createCanvas(400,400);
  sButton = createButton("Sloth");
  sButton.mousePressed(function(){

    currentImage = 0;

  });

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){

    currentImage = 1;

  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){

    currentImage = 2;

  });

  cButton = createButton("Cat");
  cButton.mousePressed(function(){

    currentImage = 3;

  });

  fButton = createButton("Fox");
  fButton.mousePressed(function(){

    currentImage = 4;

  });

}


function draw() {

  background(255);

  console.log("currentImage " + currentImage);
  // put drawing code here

  if(currentImage == 0){
    image(sloth,0,0,sloth.width/4,sloth.height/4);
  }else if(currentImage == 1){
    image(puppy,0,0,puppy.width/4,puppy.height/4);
  }else if(currentImage == 2){
    image(dinosaur,0,0,dinosaur.width/4,dinosaur.height/4);
  }else if(currentImage == 3){
    image(cat,0,0,cat.width/4,cat.height/4);
  }else if(currentImage == 4){
    image(fox,0,0,fox.width/4,fox.height/4);
  }


  image(sloth,0,0,sloth.width/4,sloth.height/4);
  image(puppy,0,0,puppy.width/4,puppy.height/4);
  image(dinosaur,0,0,dinosaur.width/4,dinosaur.height/4);
  image(cat,0,0,cat.width/4,cat.height/4);
  image(fox,0,0,fox.width/4,fox.height/4);
}
