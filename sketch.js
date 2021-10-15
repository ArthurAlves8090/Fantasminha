var imagempanico;
var panico;
var imagemfundin;
var fundin;
var bordadepizza;
var imagemcabo;
var stadojogo=0;
var final=1;
var comeco=0;
var imagemjanelinha;
var grupindejanelin;
var imagemmoça;
var grupodamoça;
var medo;


function preload(){
  
  imagempanico=loadImage("ghost-standing.png");
  
  imagemfundin=loadImage("tower.png");
  
  imagemjanelinha=loadImage("door.png");
  
  imagemmoça=loadImage("climber.png");
  
  medo=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
  bordadepizza=createEdgeSprites();
  
  fundin = createSprite(300,2,20,20);
  fundin.addImage("fundinmexendin", imagemfundin);
  
  panico = createSprite(300,300,20,20);
  panico.addImage("panicoparadin", imagempanico);
  panico.scale=0.4;
  
  fundin.velocityY=5; 
  
  grupindejanelin=new Group();
  grupodamoça=new Group();
  
  medo.play();
  
}

function draw(){
  background("black");
  
  if (stadojogo===0){
    
    if (fundin.y>400){
    fundin.y=0;
  }
    
    gerarJanelinha();
    
    console.log(fundin.y);
  
    if (keyWentUp("space")){
    panico.velocityY=-5;
  }
  panico.velocityY=panico.velocityY+0.5;
  
  if (keyDown("D")){
    panico.x=panico.x+3;
  }
  if (keyDown("A")){
    panico.x=panico.x-3;
  }
  
  if (panico.isTouching(bordadepizza) || panico.isTouching (grupindejanelin)){
    panico.destroy();
    fundin.destroy();
    stadojogo=1;
  }
}
  else{
    fill("white");
    stroke("gray");
    textSize(50);
    text("GAME OVER", 145,100);
    grupindejanelin.destroyEach();
    grupodamoça.destroyEach();
    medo.stop();
  }
  
  drawSprites();
}

function gerarJanelinha() {
  
  if (frameCount % 60 === 0) {
    var janelinha
    var moça;
    janelinha=createSprite(400,0,20,20);
    janelinha.x = Math.round(random(50,550));
    moça=createSprite(janelinha.x, janelinha.y+40, 20, 20);
    moça.addImage(imagemmoça);
    moça.velocityY=5;
    moça.scale=0.8;
    janelinha.addImage(imagemjanelinha);
    janelinha.scale=0.8;
    janelinha.velocityY=5;
    grupindejanelin.add(janelinha);
    grupodamoça.add(moça);
  }
  
  
}