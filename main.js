noseX = 0;
noseY = 0;
rightwX =0;
leftwX =0;
difference = 0; 
function preload(){

} 
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,70);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPosses);
}
function modelLoaded(){
console.log("Model is Loaded");
}
function gotPosses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
rightwX = results[0].pose.rightWrist.x;
leftwX= results[0].pose.leftWrist.x;
difference = floor(leftwX - rightwX);
console.log(" The difference is  : " + difference);
}
}
function draw(){
background('#808080');
fill('#fffdd0');
stroke('#964B00');
textSize(difference);
text("Krishna Likhith" , noseX,noseY);
}
