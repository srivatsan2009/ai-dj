rightwristx="";
rightwristy="";
leftwristx="";
leftwristy="";
leftWrist_score="";
song="";
song1="";
song2="";
song3="";
song4="";
function preload(){
song=loadSound("alone.mp3");
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',getposes);
}

function setup() {
canvas=createCanvas(400,300);
canvas.position(500,300);
video=createCapture(VIDEO);
video.hide();
}

function draw() {
image(video,0,0,400,300);
fill("red");
stroke("yellowgreen");
if(leftWrist_score>0.2){
circle(leftwristx,leftwristy,50);
leftwristyin_number=Number(leftwristy);
round=floor(leftwristyin_number);volume=(round/600).toFixed(2);
song.setVolume(volume);
document.getElementById("vol_value").innerHTML="volume:"+volume;
}
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
}
}