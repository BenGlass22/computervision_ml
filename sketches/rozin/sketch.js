//B3n Gl422

let w = 640;
let h = 360;
//let w = 1280;
//let h = 720;

let fr= 24;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");
   frameRate(fr);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  capture.position(CENTER);
  
    
  
}

  function draw() {
  background(0,0,0,30);
  let stepSize = 6;
  capture.loadPixels();

  
  for(let y = 0; y < capture.height; y+= stepSize) {
    for(let x = 0; x < capture.width; x+= stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      
      
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/1.5;
      
      var threshold = 127.5;
      
      if(brightness > threshold ) {
 
         //fill(255);
        fill(57, 255, 20)
        text('1', x, y);
      } else{ 
        text('0', x, y)
        //fill(255);
        fill(50);
        
      }
        
      
  
     map(brightness, 0, 255, stepSize/4, stepSize*2);
      
        
          

      
   
    }
  }
  capture.updatePixels();
  

}