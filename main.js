img = "";
rightWristX = 0;
rightWristY= 0;
scoreRightWrist=0;
game_status="";

function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  createCanvas(650, 400);
  video=createCapture(VIDEO);
  video.size(600,300);
  
  poseNet=ml5.poseNet(video,modelLoded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("Model loaded!")
}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 40,70);
  
}