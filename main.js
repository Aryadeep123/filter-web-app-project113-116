noseX=0;
noseY=0;

function preload() {
    moustache =loadImage('https://i.postimg.cc/7LX3v89p/moustache.png');
}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();

    tint_color =" ";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

function take_snapshot() {
    save(" Filter.png");
}


function modelLoaded() {
console.log('PoseNet is initialized');
}

function draw() {
image(video,0,0,640,480);
image(moustache, noseX, noseY, 120, 100);
}

function take_snapshot() {
save('MyFilterImage.png')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x-51;
        noseY= results[0].pose.nose.y-51;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
