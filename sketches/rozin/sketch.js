let w = 320;
let h = 180;



function setup() {
  createCanvas(w, h);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  //ellipseMode(CORNER);
}

function draw() {
  
  let stepSize = 10;
  capture.loadPixels();

  
  for(let y = 0; y < capture.height; y+= stepSize) {
    for(let x = 0; x < capture.width; x+= stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      
      let c = color(r, g, b);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/2;
      
      var threshold = 200;
      
      if(brightness > threshold ) {
        fill(255);
      } else{ fill(0);
        
      }
      
      //let size = map(brightness, 0, 255, stepSize/4, stepSize*2);
      
      //fill(255, 200, 225);
      //noStroke();
      //noFill();
      //fill(c);
      
      
      // ellipse!
      // push();
      //   translate(width, 0);
      //   scale(-1,1);
      //     push();
      //       translate(-stepSize/2, stepSize/2);
      //   ellipse(x, y, size, size);
      //   pop();
      // pop();
      
        push();
       translate(capture.width, 0);
      
        scale(-1,1);
          push();
            translate(-stepSize/2, stepSize/2);
        rect(x, y, 5, 5);
        pop();
      pop();
      
   
    }
  }
  capture.updatePixels();
  
  //image(capture, 0, 0);
}