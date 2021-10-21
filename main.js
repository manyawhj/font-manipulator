difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.position(850,250)

  canvas = createCanvas(300, 300);
  canvas.position(500,250);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
    background('#6C91C2');
    document.getElementById("font").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#fc030b');
    text('Manya',50, 50);
    }
    