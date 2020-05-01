var obstacle1;
var t1;
var tem;
var gameState=0;
//const World=Matter.world;
var obstacle1Group;
var obstacle2Group;
var score=0;

function preload(){
  obstacle1img=loadImage("Capture.PNG");
  t1img=loadImage("1.PNG");
  resetimg=loadImage("w.PNG");
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
   t1=createSprite(window.innerWidth/2, window.innerHeight/2, 50, 50);
   t1.addImage("t1",t1img);

   obstacle1Group=new Group();
   obstacle2Group=new Group();
   obstacle3Group=new Group();
   obstacle4Group=new Group();
   reset=createSprite(window.innerWidth/2,window.innerHeight/2+120,20,20);
   reset.addImage("reset",resetimg);
  reset.scale=0.2;
  reset.visible=0;
  }

function draw() {
  background(220);
  console.log(gameState);
  if(gameState===0){
  text("Score= "+score,50,50);
  }
   if(gameState===1){
     textSize(15);
     text("Final Score= "+score,window.innerWidth/2-10,window.innerHeight/2-60);
      reset.visible=255;
    } 
    if(mousePressedOver(reset)){
      gameState=0;
      reset.visible=0;
      score=0;
    }
  sobstacle1();
  for(var i=0;i<obstacle1Group.length;i++){
    var temp=obstacle1Group.get(i);
    if(t1.isTouching(temp)){
      gameState=1;

    }  
    if(mousePressedOver(temp)){
      score=score+2;
      temp.destroy();
    }
    if(gameState===1){
      temp.destroy();
    }
  }
  sobstacle2();
  for(var j=0;j<obstacle2Group.length;j++){
    var tem=obstacle2Group.get(j);
    if(t1.isTouching(tem)){
     gameState=1;
    }  
    if(mousePressedOver(tem)){
      score=score+2;
      tem.destroy();
    }
    if(gameState===1){
      tem.destroy();
    }
  }
  
  obstacle3();
  for(var k=0;k<obstacle3Group.length;k++){
    var te=obstacle3Group.get(k);
    if(t1.isTouching(te)){
      gameState=1;
    }  
    if(mousePressedOver(te)){
      score=score+2;
      te.destroy();
    }
    if(gameState===1){
      te.destroy();
    }
  }
  
  //
  obstacle4();
  for(var l=0;l<obstacle4Group.length;l++){
    var temk=obstacle4Group.get(l);
    if(t1.isTouching(temk)){
     gameState=1;
    }
    if(mousePressedOver(temk)){
      score=score+2;
      temk.destroy();
    }  
    if(gameState===1){
      temk.destroy();
    }
  }

  drawSprites();
}

function sobstacle1(){
if(frameCount % 70===0){
//background(0);
 obstacle1=createSprite(-5,window.innerHeight/2,30,30);
if(score<10){
obstacle1.velocityX=2;

}
if(score>10 && score<30){
  obstacle1.velocityX=5;
}
if(score>30 && score<70){
  obstacle1.velocityX=7;
}
if(score>70){
  obstacle1.velocityX=9;
}

obstacle1Group.add(obstacle1);

obstacle1.addImage("obstacle1",obstacle1img);
obstacle1.scale=0.2;

}
}

function sobstacle2(){
  if(frameCount % 60===0){
  //background(0);
  var obstacle2=createSprite(window.innerWidth+10,window.innerHeight/2,30,30);
  if(score<10){
  obstacle2.velocityX=-2;
  }
  if(score>10 && score<30){
    obstacle2.velocityX=-4;
  }
  if(score>30 && score<70){
    obstacle2.velocityX=-6;
  }
  if(score>70){
    obstacle2.velocityX=-7.5;
  }
  obstacle2Group.add(obstacle2);

  obstacle2.addImage("obstacle2",obstacle1img);
  obstacle2.scale=0.2;  
}
  }
  
  function obstacle3(){
    if(frameCount % 40===0){
    //background(0);
    var obstacle3=createSprite(window.innerWidth/2,-10,30,30);
    if(score<10){
    obstacle3.velocityY=3;
    }
    if(score>10 && score<30){
      obstacle3.velocityY=4;
    }
    if(score>30 && score<70){
      obstacle3.velocityY=6;
    }
    if(score>70){
      obstacle3.velocityY=7.5;
    }
    obstacle3Group.add(obstacle3);
  
obstacle3.addImage("obstacle3",obstacle1img);
obstacle3.scale=0.2; 
  }
  }

  function obstacle4(){
    if(frameCount % 80===0){
    //background(0);
    var obstacle4=createSprite(window.innerWidth/2,window.innerHeight+10,30,30);
    if(score<10){
    obstacle4.velocityY=-1;
    }
    if(score>10 && score<30){
      obstacle4.velocityY=-4;
    }
    if(score>30 && score<70){
      obstacle4.velocityY=-6;
    }
    if(score>70){
      obstacle4.velocityY=-7.5;
    }
   obstacle4Group.add(obstacle4); 
   
obstacle4.addImage("obstacle4",obstacle1img);
obstacle4.scale=0.2;
    }
  }