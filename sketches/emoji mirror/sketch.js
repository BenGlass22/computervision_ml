let w = 640;
let h = 360;
let fr = 24;
var redE = [];
var greenE = [];
var blueE = [];
var whiteE = [];
var blackE = [];
var wheatE = [];
var brownE = [];
var purpleE = [];
var yellowE = [];
var orangeE = [];
var pinkE = [];
let s = 25;
function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("sketch-parent");
  frameRate(fr);
  pixelDensity(2);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  //colorMode(HSB, 255);
  
  capture.position(CENTER);
  for (var i = 0; i < 10; i++) {
  redE[i] = loadImage('red' + i + '.png');    
  }
  for (var i2 = 0; i2 < 10; i2++) {
  greenE[i2] = loadImage('green' + i2 + '.png');    
  }
  for (var i3 = 0; i3 < 10; i3++) {
  blueE[i3] = loadImage('blue' + i3 + '.png');    
  }
  for (var i4 = 0; i4 < 10; i4++) {
  whiteE[i4] = loadImage('white' + i4 + '.png');   
  }
  for (var i5 = 0; i5 < 10; i5++) {
  blackE[i5] = loadImage('black' + i5 + '.png');    
  }
  for (var i6 = 0; i6 < 10; i6++) {
  brownE[i6] = loadImage('brown' + i6 + '.png');  
  }
  for (var i7 = 0; i7 < 10; i7++) {
  wheatE[i7] = loadImage('wheat' + i7 + '.png');    
  }
  for (var i8 = 0; i8 < 10; i8++) {
  yellowE[i8] = loadImage('yellow' + i8 + '.png');   
  }
  for (var i9 = 0; i9 < 10; i9++) {
  orangeE[i9] = loadImage('orange' + i9 + '.png');    
  }
  for (var i10 = 0; i10 < 10; i10++) {
  purpleE[i10] = loadImage('purple' + i10 + '.png');    
  }  
  for (var i11 = 0; i11 < 5; i11++) {
  pinkE[i11] = loadImage('pink' + i11 + '.png');    
  }  
}

function draw() {
  background(255,255,255);
  let stepSize = 6;
  capture.loadPixels();
  
  push();
   translate(width, 0);
    scale(-1, 1);

  for(let y = 0; y < capture.height; y+= stepSize) {
    for(let x = 0; x < capture.width; x+= stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
       let pixelColor = color(r,g,b);
       let h = floor (hue(pixelColor));
       let s2 = saturation(pixelColor);
       let l = lightness(pixelColor);
  

      if (h < 10 && h > -1 && 
          s2 < 101 && s2 > 57 &&
          l < 51 && l > 30){
        image(random(redE),x,y,s,s);
       } //else{ image(random(yellowE),x,y,s,s)}
      
        if (h < 365 && h > 345 && 
          s2 < 101 && s2 > 57 &&
          l < 71 && l > 30){
        image(random(redE),x,y,s,s);
      }
      
      
      if (h > 87 && h < 150 &&
          s2 < 101  && s2 > 46 &&
          l < 51&& l > 14){
        image(random(greenE),x,y,s,s);
      }
      
      if (h < 254 && h > 174 &&
          s2 < 90 && s2 > 32 &&
          l < 86 && l > 20){
        image(random(blueE),x,y,s,s);
      }
       if (h > 0 && h < 360 &&
           s2 < 40 && 
           l < 20){
        image(random(blackE),x,y,s,s);
      }
      
      if (h > 0 && h < 360 &&
          s2 > 0 && s2 < 40 &&
          l < 101 && l > 60){
        image(random(whiteE),x,y,s,s);
      }
      
      if (h > 10 && h < 30 &&
          s2 > 28 && s2 < 100 &&
          l > 15 && l < 33){
        image(random(brownE),x,y,s,s);
      }
      
      if (h > 16 && h < 50 &&
          s2 < 100 && s2 > 20 &&
          l > 60 && l < 90 ){
        image(random(wheatE),x,y,s,s);
      }
      if (h < 65 && h > 45 &&
          s2 < 100 && s2 > 45 &&
          l > 36 && l < 88 ){
        image(random(yellowE),x,y,s,s);
      }
       if (h  < 39 && h > 21 &&
          s2 < 100 && s2 > 65 &&
           l > 36 && l < 71){
        image(random(orangeE),x,y,s,s);
      }
       if ( h > 276 && h < 338 &&
           s2 < 100  && s2 > 32 &&
           l < 87 && l > 21){
        image(random(purpleE),x,y,s,s);
      } 
      if (h > 348 && h < 365 &&
          s2 < 100 && s2 > 20 &&
          l > 40 && l < 90 ){
        image(random(wheatE),x,y,s,s);
      }
        if ( h > 319 && h < 360 &&
           s2 < 100  && s2 > 16 &&
           l < 93 && l > 40){
        image(random(pinkE),x,y,s,s);
      } 
     
}
    
  }
  pop();
  capture.updatePixels();
}