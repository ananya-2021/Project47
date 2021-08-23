var canvas;
var wall1,wall2;
var boy, boyImg, boyImg2;
var guard, guardImg;

var block1 ,block2 ,block3 ,block4 ,block5 ,block6 ,block7 ,block8 ,block9 ,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40;
var block41,block42,block43,block44,block45,block46,block47,block48,block49,block50;
var block51,block52,block53,block54,block55,block56,block57,block58,block59,block60;
var block61,block62,block63,block54,block65;

var goldenBeam, goldenBeanImg;

var gameState = 0;

var start,startImg;
var level2,level2Img;
var caught,caughtImg;
var gs5,gs5Img;
var playAgain,playAgainImg;

var floor,floorImg;

var treasure,treasureImg;
var laser1,laser2,laser3,laser4,laserImg;
var wall1,wall2,wall3,wall4,wall5;

function preload(){
  
  wall1 = loadImage("wall1.png");
  wall2 = loadImage("wall2.png");

  boyImg = loadImage("boy.jpg");
  boyImg2 = loadImage("boy2.jpg");

  guardImg = loadImage("guard.jpg");

  goldenBeanImg = loadImage("goldenBeam.jpg");

  startImg = loadImage("start.png");
  level2Img = loadImage("level2.png");
  caughtImg = loadImage("caught.png");
  gs5Img = loadImage("gs5.png");
  playAgainImg = loadImage("playAgain.png");

  floorImg = loadImage("floor.jpg");

  treasureImg = loadImage("treasure.png");
  laserImg = loadImage("laserBeam.png");
  
}

function setup(){
 
  canvas = createCanvas(900,500);

    block1 = createBlock2(100,60,50,20);block2 = createBlock2(100,90,50,20); block3 = createBlock2(100,240,50,20);
    block4 = createBlock2(100,300,50,20);block5 = createBlock2(100,360,50,20);block6 = createBlock2(100,420,50,20);
   
    block7 = createBlock2(200,250,50,20);
  
    block8 = createBlock2(300,250,50,20);
  
    block9 = createBlock2(400,180,50,20);block10 = createBlock2(400,410,50,20);block11 = createBlock2(400,130,50,20);
  
    block12 = createBlock2(500,250,50,20);block13 = createBlock2(500,310,50,20);block14 = createBlock2(500,350,50,20);
  
    block15 = createBlock2(600,190,50,20);block16 = createBlock2(600,250,50,20);block17 = createBlock2(600,130,50,20);
  
    block18 = createBlock2(700,70,50,20);block19 = createBlock2(700,130,50,20);block20 = createBlock2(700,300,50,20);
    block21 = createBlock2(700,350,50,20);
    
    block22 = createBlock2(800,60,50,20);block23 = createBlock2(800,120,50,20);block24 = createBlock2(800,180,50,20);
    block25 = createBlock2(800,240,50,20);block26 = createBlock2(800,300,50,20);block27 = createBlock2(800,360,50,20);
    block28 = createBlock2(800,420,50,20);
    
    block29 = createBlock(130,30,50,20);block30 = createBlock(190,30,50,20);block31 = createBlock(250,30,50,20);
    block32 = createBlock(310,30,50,20);block33 = createBlock(370,30,50,20);block34 = createBlock(430,30,50,20);
    block35 = createBlock(490,30,50,20);block36 = createBlock(550,30,50,20);block37 = createBlock(610,30,50,20);
    block38 = createBlock(670,30,50,20);block39 = createBlock(730,30,50,20);block40 = createBlock(770,30,50,20);
  
    block41 = createBlock(570,100,50,20); block42 = createBlock(510,100,50,20);block43 = createBlock(450,100,50,20);
    block44 = createBlock(390,100,50,20);block45 = createBlock(330,100,50,20);
  
    block46 = createBlock(270,220,50,20);block47 = createBlock(230,220,50,20);
  
    block48 = createBlock(460,280,50,20);block49 = createBlock(430,280,50,20);
    
    block50 = createBlock(240,380,50,20);block51 = createBlock(300,380,50,20);block52 = createBlock(360,380,50,20);
    block53 = createBlock(540,380,50,20);block54 = createBlock(600,380,50,20);block55 = createBlock(660,380,50,20);
  
    block56 = createBlock(130,450,50,20);block57 = createBlock(190,450,50,20);block58 = createBlock(250,450,50,20);
    block59 = createBlock(310,450,50,20);block60 = createBlock(370,450,50,20);block61 = createBlock(430,450,50,20);
    block62 = createBlock(490,450,50,20);block63 = createBlock(550,450,50,20);block64 = createBlock(610,450,50,20);
    block65 = createBlock(670,450,50,20);
  
  guard = createSprite(180,90,20,20);
  guard.addImage(guardImg);
  guard.scale = 0.2;

  goldenBeam = createSprite(750,450,20,20);
  goldenBeam.addImage(goldenBeanImg);
  goldenBeam.scale = 0.11;

  start = createSprite(450,250,20,20);
  start.addImage(startImg);
  level2 = createSprite(450,250,20,20);
  level2.addImage(level2Img);
  level2.scale = 0.7;
  level2.visible = false;
  caught = createSprite(450,250,20,20);
  caught.addImage(caughtImg);
  caught.scale = 0.8;
  caught.visible = false;
  gs5 = createSprite(450,250,20,20);
  gs5.addImage(gs5Img);
  gs5.scale = 0.7;
  gs5.visible = false;
  playAgain = createSprite(450,250,20,20);
  playAgain.addImage(playAgainImg);
  playAgain.scale = 0.7;
  playAgain.visible = false;

  floor = createSprite(450,250,20,20);
  floor.addImage(floorImg);
  floor.visible = false;

  boy = createSprite(20,165,20,20);
  boy.addImage(boyImg2);
  boy.scale = 0.05;

  treasure = createSprite(800,250,20,20);
  treasure.addImage(treasureImg);
  treasure.scale = 0.15;
  treasure.visible = false;

  laser1 = createSprite(170,130,20,20);
  laser1.addImage(laserImg);
  laser1.velocityX = 3;
  laser1.scale = 0.6;
  laser1.visible = false;

  laser2 = createSprite(340,370,20,20);
  laser2.addImage(laserImg);
  laser2.velocityX = 3;
  laser2.scale = 0.6;
  laser2.visible = false;

  laser3 = createSprite(510,130,20,20);
  laser3.addImage(laserImg);
  laser3.velocityX = 3;
  laser3.scale = 0.6;
  laser3.visible = false;

  laser4 = createSprite(680,370,20,20);
  laser4.addImage(laserImg);
  laser4.velocityX = 3;
  laser4.scale = 0.6;
  laser4.visible = false;

  boy.setCollider("rectangle",0,0,boy.width,boy.height);
  guard.setCollider("rectangle",0,0,guard.width,guard.height);
  goldenBeam.setCollider("rectangle",0,0,goldenBeam.width,goldenBeam.height);
  laser1.setCollider("rectangle",0,0,laser1.width-30,laser1.height);
  laser2.setCollider("rectangle",0,0,laser2.width-30,laser2.height);
  laser3.setCollider("rectangle",0,0,laser3.width-30,laser3.height);
  laser4.setCollider("rectangle",0,0,laser4.width-30,laser4.height);

  wall1 = createSprite(0,250,5,500);
  wall2 = createSprite(190,250,5,500);
  wall3 = createSprite(390,250,5,500);
  wall4 = createSprite(600,250,5,500);
  wall5 = createSprite(810,250,5,500);
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
}

function draw(){
  
  background("black");

  console.log(mouseX,mouseY);

  laser1.bounceOff(wall1);laser1.bounceOff(wall2);
  laser2.bounceOff(wall2);laser2.bounceOff(wall3);
  laser3.bounceOff(wall3);laser3.bounceOff(wall4);
  laser4.bounceOff(wall4);laser4.bounceOff(wall5);
  
  if(keyDown("right_arrow")){
    boy.x = boy.x + 2;
    boy.addImage(boyImg2);
   }
 
   if(keyDown("left_arrow")){
     boy.x = boy.x - 2;
     boy.addImage(boyImg);
    }
 
   if(keyDown("up_arrow")){
     boy.y = boy.y - 2;
    }
 
   if(keyDown("down_arrow")){
     boy.y = boy.y + 2;
    }

  if(gameState === 0){
     
     boy.visible = false;
     guard.visible = false;

     if(keyDown("enter")){
       gameState = 1;
     }
  }

  if(gameState === 1){
    
    boy.visible = true;
    guard.visible = true;
    goldenBeam.visible = true;
    start.visible = false;
    caught.visible = false;

    guardPosition();
  
     if(boy.isTouching(guard)){
       console.log("GAME OVER")
       gameState = 2;
     }

     if(boy.isTouching(goldenBeam)){
        gameState = 3;
     }

     boy.bounceOff(block1);boy.bounceOff(block2);boy.bounceOff(block3);boy.bounceOff(block4);boy.bounceOff(block5);
     boy.bounceOff(block6);boy.bounceOff(block7);boy.bounceOff(block8);boy.bounceOff(block9);boy.bounceOff(block10);
     boy.bounceOff(block11);boy.bounceOff(block12);boy.bounceOff(block13);boy.bounceOff(block14);boy.bounceOff(block15);
     boy.bounceOff(block16);boy.bounceOff(block17);boy.bounceOff(block18);boy.bounceOff(block19);boy.bounceOff(block20);
     boy.bounceOff(block21);boy.bounceOff(block22);boy.bounceOff(block23);boy.bounceOff(block24);boy.bounceOff(block25);
     boy.bounceOff(block26);boy.bounceOff(block27);boy.bounceOff(block28);boy.bounceOff(block29);boy.bounceOff(block30);
     boy.bounceOff(block31);boy.bounceOff(block32);boy.bounceOff(block33);boy.bounceOff(block34);boy.bounceOff(block35);
     boy.bounceOff(block36);boy.bounceOff(block37);boy.bounceOff(block38);boy.bounceOff(block39);boy.bounceOff(block40);
     boy.bounceOff(block41);boy.bounceOff(block42);boy.bounceOff(block43);boy.bounceOff(block44);boy.bounceOff(block45);
     boy.bounceOff(block46);boy.bounceOff(block47);boy.bounceOff(block48);boy.bounceOff(block49);boy.bounceOff(block50);
     boy.bounceOff(block51);boy.bounceOff(block52);boy.bounceOff(block53);boy.bounceOff(block54);boy.bounceOff(block55);
     boy.bounceOff(block56);boy.bounceOff(block57);boy.bounceOff(block58);boy.bounceOff(block59);boy.bounceOff(block60);
     boy.bounceOff(block61);boy.bounceOff(block62);boy.bounceOff(block63);boy.bounceOff(block64);boy.bounceOff(block65);

  }

  if(gameState === 2){

     boy.visible = false;
     guard.visible = false;
     caught.visible = true;
 
     if(keyDown("space")){
       boy.x = 20;
       boy.y = 165;
       gameState = 1;
     }

  }

  if(gameState === 3){
    level2.visible = true;
    boy.visible = false;
    guard.visible = false;

    if(keyDown("enter")){
       gameState = 4;
       
       boy.x = 20;
       boy.y = 300;
    }
  }

  if(gameState === 4){
    level2.visible = false;
    floor.visible = true;
    treasure.visible = true;
    laser1.visible = true;
    laser2.visible = true;
    laser3.visible = true;
    laser4.visible = true;   
    boy.visible = true; 

    if(boy.isTouching(laser1) || boy.isTouching(laser2) ||
       boy.isTouching(laser3) || boy.isTouching(laser4) ){
        gameState = 5
    }       
  }

  if(gameState === 5){
    floor.visible = false;
    treasure.visible = false;
    laser1.visible = false;
    laser2.visible = false;
    laser3.visible = false;
    laser4.visible =false;   
    boy.visible = false; 
    gs5.visible = true;
       
    if(keyDown("space")){
      gameState = 4;

      boy.x = 20;
      boy.y = 300;
    }

    if(boy.isTouching(treasure)){
       gameState = 6;
    }
  }

  if(gameState === 6){
    playAgain.visible = true;
  }

  drawSprites();

}

function guardPosition(){
  if(frameCount%50 === 0){
  var rand = Math.round(random(1,5));
  switch(rand){

    case 1 : guard.x = 150;
             guard.y = 340;
             break;
   
   case 2 : guard.x = 350;
            guard.y = 160;
            break; 
  
   case 3 : guard.x = 450;
            guard.y = 400;
            break;  
            
   case 4 : guard.x = 650;
            guard.y = 120;
            break;
            
  case 5 : guard.x = 750;
           guard.y = 320;
           break;

             
  }
 }
}

function createBlock(x,y,width,height){
      
      var block = createSprite(x,y,width,height);
       block.addImage(wall1);
       block.scale = 0.3;

       return block;
}

function createBlock2(x,y,width,height){
      
  var block2 = createSprite(x,y,width,height);
   block2.addImage(wall2);
   block2.scale = 0.3;

   return block2;
}