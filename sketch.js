var iss,spacecraft;
var hasDocked=false;
var bg_img,iss_img,sc_img,sc_imgR,sc_imgL,sc_imgD;

function preload(){
  bg_img=loadImage("spacebg.jpg");
  iss_img=loadImage("iss.png");
  sc_img=loadImage("spacecraft2.png");
  sc_imgD=loadImage("spacecraft1.png");
  sc_imgL=loadImage("spacecraft3.png");
  sc_imgR=loadImage("spacecraft4.png");
  
}

function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240);
  spacecraft.addImage(sc_img);
  spacecraft.scale=0.15; 

  iss=createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale=0.5;
}

function draw() {
  background(bg_img);  

  if(!hasDocked){
    spacecraft.x=spacecraft.x + random(-1,1);
    
    if(keyWentDown("up")){
      spacecraft.y=spacecraft.y - 2;
     spacecraft.addImage(sc_img);
    }
    
    if(keyWentDown("down")){
      spacecraft.y=spacecraft.y + 2;
      spacecraft.addImage(sc_imgD);
    }
    
    if(keyWentDown("right")){
      spacecraft.x=spacecraft.x + 1;
      spacecraft.addImage(sc_imgR);
    }
    
    if(keyWentDown("left")){
      spacecraft.x=spacecraft.x - 2;
      spacecraft.addImage(sc_imgL);
    }
  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ 
    hasDocked = true; 
    textSize(25); 
    fill("white"); 
    text("Docking Successful!", 200, 300); 
  }

  drawSprites();
}