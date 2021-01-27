var garden,gardenImage;
var cat,catImage1,catImage2,catImage3;
var jerry,jerryImage1,jerryImage2,jerryImage3;

function preload() {
    //load the images here
gardenImage=loadImage("images/garden.png");
catImage1=loadAnimation("images/tomOne.png");
catImage2=loadAnimation("images/tomTwo.png","images/tomThree.png");
catImage3=loadAnimation("images/tomFour.png");

jerryImage1=loadAnimation("images/jerryOne.png");
jerryImage2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerryImage3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(840,580,10,10);
  cat.addAnimation("cat",catImage1);
  cat.scale=0.2;

  jerry=createSprite(200,580,10,10);
  jerry.addAnimation("jerry",jerryImage1);
  jerry.scale=0.2;
}

function draw() {
  background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - jerry.x < (cat.width-jerry.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catLastImage",catImage3);
      cat.x=300;
      cat.scale=0.2;
      cat.changeAnimation("catLastImage")

      jerry.addAnimation("jerryLastImage",jerryImage3);
      jerry.scale=0.2;
      jerry.changeAnimation("jerryLastImage")

    }
    
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");

      jerry.addAnimation("jerryTeasing",jerryImage2);
      jerry.changeAnimation("jerryTeasing");
  }
    
  
  }
