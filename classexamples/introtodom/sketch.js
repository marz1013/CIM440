
function setup() {
  // put setup code here
  var cmv = createCanvas(400,400);
  cmv.id("My Canvas");

  var container0 = createDiv();
  container0.id("container0");

  //to search for an id, you use the # token in front of the name
  //.html function allows you to inject html or text into another html tag

  select("#container0").html("<h1>Your sketch title here!<h1>");

  //.style("css property", "value")

  select("#container0").style("width", "400px");
  select("#container0").style("margin", "0 auto");

  //center your container, margin: 0 auto, 0 refers to the top and bottom spacing, the auto refers to left and right spacing, it will only work if you set a width

  cmv.parent("#container0");

  select("body").style("background-color", "orange");
}

function draw() {
  // put drawing code here
  background(0);

}
