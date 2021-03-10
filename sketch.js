var canvas;
var music2;
var blueob;
var orangeob;
var pinkob;
var greenob;
var ball;
var edges;

function preload(){
    music2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueob=createSprite(0,580,360,30);
    blueob.shapeColor="blue";
    orangeob=createSprite(295,580,200,30);
    orangeob.shapeColor="orange"
    pinkob=createSprite(515,580,200,30);
    pinkob.shapeColor="pink";
    greenob=createSprite(740,580,220,30);
    greenob.shapeColor="green";

    //create box sprite and give velocity
    ball = createSprite(Math.round(random(20,750)),100,20,20);
    ball.velocityX = 5;
    ball.velocityY=5
    ball.shapeColor="white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(blueob.isTouching(ball) && ball.bounceOff(blueob)){
        //change color here
        music2.play();
        ball.shapeColor = "blue";
    }
    if(orangeob.isTouching(ball)){
        //change color here
        ball.bounceOff(orangeob);
        ball.setVelocity(0,0);
        
        ball.shapeColor = "orange";
    }
    if(pinkob.isTouching(ball)){
        //change color here
        ball.bounceOff(pinkob)
        ball.shapeColor = "pink";
    }
    if(greenob.isTouching(ball)){
        //change color here
        music2.stop();
        ball.bounceOff(greenob)
        ball.shapeColor = "green";
    }

    drawSprites();
}

