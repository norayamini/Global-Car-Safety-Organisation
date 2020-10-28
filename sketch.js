var wall,car;
var speed,weight;
var deformation;



function setup() {
  createCanvas(1500,800);

  //create wall,car
  wall=createSprite(1400, 300, 40, 200);
  wall.shapeColor=("grey");

  car=createSprite(50,300,50,50);
  car.shapeColor=("white");

  /*car.debug=true;
  wall.debug=true;*/
}

function draw() { 
  background("black"); 
  
  speed=random(50,90);
  weight=random(400,1500);
 /* car.x=World.mouseX;
  car.y=World.mouseY;*/

  car.velocityX=speed;

  deformation=(0.5* weight * speed* speed/22500);


  if(car.x-wall.x<=wall.width/2+car.width/2 && wall.x-car.x<=wall.width/2+car.width/2 && car.y-wall.y<=wall.height/2+car.height/2 && wall.y-car.y<=wall.height/2+car.height/2){
    
    car.velocityX=0;
    if(deformation>180){
      car.shapeColor=("red")
    }

    if(deformation>100 && deformation<180 ){
      car.shapeColor=("yellow")
    }

    if(deformation<100){
      car.shapeColor=("green")
    }
   
  }
  

  drawSprites();
}