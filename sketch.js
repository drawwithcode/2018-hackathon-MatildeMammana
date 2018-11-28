var mySong;
var img = [];

function preload() {
  mySong = loadSound("./assets/How I Met Your Mother Opening Credits True HD.mp3")
  img[0] = loadImage("./assets/volume0.png");
  img[1] = loadImage("./assets/volume1.png");
  img[2] = loadImage("./assets/volume2.png");
  img[3] = loadImage("./assets/volume.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  mySong.loop();

}

function draw() {

  var myText = 'Muoviti lungo asse x per aumentare e abbassare il volume'
  textSize(25);
  textAlign(CENTER);
  textFont('Bitter');
  fill('black');
  text(myText, width / 2, 100);


  if (mouseX < width / 4) {
    image(img[0], width / 2, height / 2, img[0].width / 2, img[0].height / 2);
  } else {
    if (mouseX > width / 4 && mouseX < width / 2) {
      image(img[1], width / 2, height / 2, img[0].width / 2, img[0].height / 2);
    } else {
      if (mouseX > width / 2 && mouseX < width / 2 + width / 4) {
        image(img[2], width / 2, height / 2, img[0].width / 2, img[0].height / 2);
      } else {
        if (mouseX > width / 2 + width / 4) {
          image(img[3], width / 2, height / 2, img[0].width / 2, img[0].height / 2);
        }
      }
    }
  }
  mySong.amp(mouseX / width);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
