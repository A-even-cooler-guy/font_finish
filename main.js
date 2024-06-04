leftWrist=0;
rightWrist=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(800,800);
    canvas=createCanvas(700,700);
    canvas.position(900,100);
   posenet=ml5.poseNet(video, modelLoaded);
   posenet.on("pose",gotPoses);
   
}

function draw(){
    background("blue");
    textSize("5");
    fill("aqaua");
    text("Pizza is awsome",0,350);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
leftWrist=results[0].pose.leftWrist.x;
rightWrist=results[0].pose.rightWrist.x;
difference=floor(leftWrist-rightWrist);
textSize(difference);
console.log("left="+leftWrist+"right="+rightWrist+"difference"+difference)
}
}