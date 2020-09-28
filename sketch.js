function preload(){}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background(3, 10, 16); //colore sfondo
  frameRate(60);
}

let a = false;
let s = 'try to move your mouse...';
let t = 'click to stop and press the down arrow to download it ...';

function draw() {
colorMode(HSB,100);

//cambia colore in base alla posizione del mouse
stroke(100*mouseX/windowWidth, 255, 100, 1000/frameCount); //stroke(v1,v2,v3,[alpha])

//download
    if (keyIsDown(DOWN_ARROW)) {
        saveCanvas(cnv,'Rose.jpg'); // saveCanvas(selectedCanvas,[filename],[extension])
      }

//TESTO
push();
   noStroke();
   fill(120);
   textSize(12);
   textAlign(CENTER); //textAlign(horizAlign,[vertAlign])
   if(frameCount <= 360 )
    { text(s, width/2, height/16);
   } else {
      text(t, width/2, height/11);}
pop();

 //rosa
noFill();
translate(width/2, height/2);//posizione nello spazio centrale
rotate(frameCount);
translate(50, 0);
scale(frameCount/500);
ellipse(0 ,0, 50);
translate(50, 0);
ellipse(0 ,10, 100);
}

//start and stop
function mousePressed() {
  if(a === false) {
    //  noLoop();
        frameRate(0);
        a = true;
  } else {
     frameRate(60);
       a = false;
     }
 }
