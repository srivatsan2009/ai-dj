rightwristx="";
rightwristy="";
leftwristx="";
leftwristy="";
song="";
function preload(){
song=loadSound("music.mp3");
}

function setup() {
canvas=createCanvas(400,300);
canvas.position(500,300);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',getposes);
}

function draw() {
image(video,0,0,400,300);
}

function play() {
song.play();
song.setVolume(1);
song.rate(1)
}

function stop() {
song.stop();
}

function modeloaded(){
console.log("posenet model is loaded");
}

function getposes(results){
if(results.length>0){
console.log(results);
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
console.log(rightwristx,rightwristy);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
console.log(leftwristx,leftwristy);
}
}