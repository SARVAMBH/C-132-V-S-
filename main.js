img = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img,0,0,640,420);
    fill("#ffd700");
    text("DOG" , 45 , 75); 
    noFill();
    stroke("#ffd700");
    rect(30 , 60 , 450 , 350);
    fill("#ffd700");
    text("CAT", 320 , 120);
    noFill();
    stroke("#ffd700");
    rect(300,90,270,320);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results) {
     if (error) {
        console.log(error);
     }
     else{
        console.log(results);
     }
}