var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
 if (score !== 3){
  clues();
 }

text("Score: "+ score,displayWidth/2-100,30)

  security.display();
  console.log(mouseX+"  "+mouseY)

if (score == 3){
background(bg2);
fill("black");
textSize(40);
text("TREASURE UNLOCKED",250,200);


}

  drawSprites()
}