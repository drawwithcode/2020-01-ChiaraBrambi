function preload(){}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background(10, 34, 56); //colore sfondo
  frameRate(60);
}

let a = false;
let s = 'try to move your mouse...';
let t = 'click to stop and download it ...';

function draw() {
colorMode(HSB,100);

//cambia colore in base alla posizione del mouse
stroke(100*mouseX/windowWidth, 255, 100, 1000/frameCount); //stroke(v1,v2,v3,[alpha])

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


function mousePressed() {
  if(a === false) {
    //  noLoop();
        frameRate(0);
        a = true;
          save('rosa','png'); //download
  } else {
     frameRate(60);
       a = false;
     }
 }

/* //per download
   if (keyIsDown(DOWN_ARROW)) {
       save('rosa','png'); //saveFrames(filename,extension,duration,framerate,[callback]) save(filename,extension)
     }*/

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
