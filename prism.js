//var img;
var prism;
var pg0;
var pg1;
var pg2;
var pg3;

function preload(){
  prism = loadModel('assets/prism.obj');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  setAttributes('antialias', true);
   fill(255);
  pg0 = createGraphics(1024,1024);
  pg1 = createGraphics(1024,1024);
  pg2 = createGraphics(1024,1024);
  pg3 = createGraphics(1024,1024);

}

function draw() {

  background(255);


  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;
  //orbitControl();


  var fc = frameCount*2;
    var fcm = fc % 510;
    if (fcm > 255){
      fcm = 510-fcm;
    }

    pointLight(fcm, 0, 0, locX+600, locY+600, 250);
    pointLight(fcm,fcm,0, locX+300, locY+300, 250);
    pointLight(0, fcm, 0, locX, locY, 250);
    pointLight(0, fcm, fcm, locX-300, locY-300, 250);
    pointLight(0, 0, fcm, locX-600, locY-600, 250);

      pointLight(255-fcm, 255-fcm, 255-fcm, locX, locY, 250);

  specularMaterial(255,150);
    sphere(350,350);

  ambientLight(190);

  noStroke();

  push();


  rotateZ(frameCount * PI/510);
  rotateX(frameCount * PI/510);
  rotateY(frameCount * PI/510);

  console.log(fcm);


  specularMaterial(235,200);
  model(prism);
  ambientMaterial(255);
  //model(prism2);


  push();
  translate(0,0,49);
  texture(pg0);
  plane(100);
  //pg1.remove();
  pop();


  push();
  //rotateX(PI/2);
  translate(0,0,50);

  pg1.textSize(120);
  pg1.text('Building Science', 2, 90);
  //pass graphics as texture
  texture(pg1);
  plane(100);
  //pg1.remove();
  pop();

  push();
  rotateZ(2.0944);
  //rotateX(PI/2);
  translate(0,0,51);
  //rotateZ(frameCount * -0.004);
  pg2.textSize(120);
  pg2.text('CNC Fabrication', 2, 90);
  //pass graphics as texture
  texture(pg2);
  plane(100);
  //pg2.remove();
  pop();

  push();
  rotateZ(-2.0944);
  //rotateX(PI/2);
  translate(0,0,52);
  //rotateZ(frameCount * -0.004);
  pg3.textSize(120);
  pg3.text('3D Visualization', 2, 90);
  //pass graphics as texture
  texture(pg3);
  plane(100);
  //pg3.remove();
  pop();


  pop();

 }
