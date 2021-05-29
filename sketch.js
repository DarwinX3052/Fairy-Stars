var starImg,bgImg;
var star, starBody;
var fImg, fsnd, f;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fsnd = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);


	f = createSprite(100, 500, 50, 50);
	f.addAnimation("fairy", fImg);
	f.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fsnd.play();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (star.y > 470 && starBody.position.y >470 ){
	Matter.Body.setStatic(starBody,true); 
  }

  drawSprites();

  f.x = mouseX;

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}
