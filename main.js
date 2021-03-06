rightwristx="";
rightwristy="";
leftwristx="";
leftwristy="";
leftWrist_score="";
rightWrist_score="";
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
leftWrist_score=results[0].pose.keypoints[9].score;
console.log(leftWrist_score);
rightWrist_score=results[0].pose.keypoints[10].score;
console.log(rightWrist_score);
}
}

function draw() {
image(video,0,0,400,300);
fill("red");
stroke("yellowgreen");
if(leftWrist_score>0.2){
circle(leftwristx,leftwristy,50);
leftwristyin_number=Number(leftwristy);
round=floor(leftwristyin_number);
volume=(round/600).toFixed(2);
song.setVolume(volume);
document.getElementById("vol_value").innerHTML="volume:"+volume;
}

if(rightWrist_score>0.2) {
circle(rightwristx,rightwristy,50);
if(rightwristy>0&&rightwristy<=60) {
song.rate(0.5);
document.getElementById("speed_value").innerHTML="speed:0.5x";
}

else if(rightwristy>60&&rightwristy<=120) 
{song.rate(1);
document.getElementById("speed_value").innerHTML="speed:1x";
}
else if(rightwristy>120&&rightwristy<=180) 
{song.rate(1.5);
document.getElementById("speed_value").innerHTML="speed:1.5x";
}

else if(rightwristy>180&&rightwristy<=240) 
{song.rate(2);
document.getElementById("speed_value").innerHTML="speed:2x";
}

else if(rightwristy>240&&rightwristy<=300) 
{song.rate(2.5);
document.getElementById("speed_value").innerHTML="speed:2.5x";
}
}
}
  