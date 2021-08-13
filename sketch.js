const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world, backgroundImg;
var bg = "day.png";
var snow=[];

function preload(){
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);

  if(frameCount%5==0){
    snow.push(new Snow(random(0,800),-20,30));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "day.png";
  }
  else{
      bg = "day.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
