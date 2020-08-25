var pc
var w1,w2,w3
var r1,r1img
var a1,a2
function preload(){
r1img = loadImage("mathriddle.jpg")
}
function setup() {
  createCanvas(800,600);
  pc = createSprite(50,50,50,50);
  w1 = createSprite(90,130,10,400);
  //w2 = createSprite(135,330,100,10);
  w3 = createSprite(90,430,10,70);
  w4 = createSprite(135,465,100,10)
  w5 = createSprite(190,322,10,300)
  d1 = createSprite(88,360,10,60) 
  d1.shapeColor = "red"
  r1 = createSprite(400,300,50,50)
  a1 = createSprite(347,360,25,25)
  a2 = createSprite(460,360,25,25)
  w6 = createSprite(230,170,90,10)
  w7 = createSprite(280,310,10,300)
  w8 = createSprite(350,455,130,10)
  w9 = createSprite(420,294,10,330)
  w10 = createSprite(470,130,90,10)
  w11 = createSprite(510,330,10,390)
}
function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown(UP_ARROW)){
    pc.y = pc.y-5
  }
  if(keyDown(DOWN_ARROW)){
    pc.y = pc.y+5
  }
  if(keyDown(LEFT_ARROW)){
    pc.x = pc.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x+5
  }
  if(pc.isTouching(d1)){
    r1.scale = 0.5
    pc.bounce(d1)
r1.addImage("riddle1",r1img)
  }
  if(mousePressedOver(a1)){
    pc.x = 50
    pc.y = 50
  }
  if(mousePressedOver(a2)){
    d1.destroy();
    d1.visible = false
    
  }
  createEdgeSprites();
  //pc.collide(edges)
  drawSprites();
}