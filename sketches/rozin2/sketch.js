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
  background(255,255,255,30);
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
      fill(0);
//       if(brightness > threshold ) {
 
      
//         fill(255)
//         text('1', x, y);
//       } else{ 
//         text('0', x, y)
//         fill(255);
        
//       }
      if(brightness == 0){
        text('A',x,y);
      }
        if(brightness == 1){
        text('B',x,y);
      }
      if(brightness == 2){
        text('C',x,y);
      }
      if(brightness == 3){
        text('D',x,y);
      }
      if(brightness == 4){
        text('E',x,y);
      }
      if(brightness == 5){
        text('F',x,y);
      }
      if(brightness == 6){
        text('G',x,y);
      }
      if(brightness == 7){
        text('H',x,y);
      }
      if(brightness == 8){
        text('I',x,y);
      }
      if(brightness == 9){
        text('J',x,y);
      }
      if(brightness == 10){
        text('K',x,y);
      }
      if(brightness == 11){
        text('L',x,y);
      }
      if(brightness == 12){
        text('M',x,y);
      }
      if(brightness == 13){
        text('N',x,y);
      }
      if(brightness == 14){
        text('O',x,y);
      }
      if(brightness == 15){
        text('P',x,y);
      }
      if(brightness == 16){
        text('Q',x,y);
      }
      if(brightness == 17){
        text('R',x,y);
      }
      if(brightness == 18){
        text('S',x,y);
      }
      if(brightness == 19){
        text('T',x,y);
      }
      if(brightness == 20){
        text('U',x,y);
      }
      if(brightness == 21){
        text('V',x,y);
      }
      if(brightness == 22){
        text('W',x,y);
      }
      if(brightness == 23){
        text('X',x,y);
      }
      if(brightness == 24){
        text('Y',x,y);
      }
      if(brightness == 25){
        text('Z',x,y);
      }
      if(brightness == 26){
        text('1',x,y);
      }
        if(brightness == 27){
        text('2',x,y);
      }
      if(brightness == 28){
        text('3',x,y);
      }
      if(brightness == 29){
        text('4',x,y);
      }
      if(brightness == 30){
        text('5',x,y);
      }
      if(brightness ==31){
        text('6',x,y);
      }
      if(brightness == 32){
        text('7',x,y);
      }
      if(brightness == 33){
        text('8',x,y);
      }
      if(brightness == 34){
        text('9',x,y);
      }
      if(brightness == 35){
        text('a',x,y);
      }
      if(brightness == 36){
        text('b',x,y);
      }
      if(brightness == 37){
        text('c',x,y);
      }
      if(brightness == 38){
        text('d',x,y);
      }
      if(brightness == 39){
        text('e',x,y);
      }
      if(brightness == 40){
        text('f',x,y);
      }
      if(brightness == 41){
        text('g',x,y);
      }
      if(brightness == 42){
        text('h',x,y);
      }
      if(brightness == 43){
        text('i',x,y);
      }
      if(brightness == 44){
        text('j',x,y);
      }
      if(brightness == 45){
        text('k',x,y);
      }
      if(brightness == 46){
        text('l',x,y);
      }
      if(brightness == 47){
        text('m',x,y);
      }
      if(brightness == 48){
        text('n',x,y);
      }
      if(brightness == 49){
        text('o',x,y);
      }
      if(brightness == 50){
        text('p',x,y);
      }
      if(brightness == 51){
        text('q',x,y);
      }
      if(brightness == 52){
        text('r',x,y);
      }
        if(brightness == 53){
        text('s',x,y);
      }
      if(brightness == 54){
        text('t',x,y);
      }
      if(brightness == 55){
        text('u',x,y);
      }
      if(brightness == 56){
        text('v',x,y);
      }
      if(brightness == 57){
        text('w',x,y);
      }
      if(brightness == 58){
        text('x',x,y);
      }
      if(brightness == 59){
        text('y',x,y);
      }
      if(brightness == 60){
        text('z',x,y);
      }
      if(brightness == 61){
        text('~',x,y);
      }
      if(brightness == 62){
        text('!',x,y);
      }
      if(brightness == 63){
        text('@',x,y);
      }
      if(brightness == 64){
        text('#',x,y);
      }
      if(brightness == 65){
        text('$',x,y);
      }
      if(brightness == 66){
        text('%',x,y);
      }
      if(brightness == 67){
        text('^',x,y);
      }
      if(brightness == 68){
        text('&',x,y);
      }
      if(brightness == 69){
        text('*',x,y);
      }
      if(brightness == 70){
        text('-',x,y);
      }
      if(brightness == 71){
        text('=',x,y);
      }
      if(brightness == 72){
        text('_',x,y);
      }
      if(brightness == 73){
        text('+',x,y);
      }
      if(brightness == 74){
        text(';',x,y);
      }
      if(brightness == 75){
        text('|',x,y);
      }
      if(brightness == 76){
        text(':',x,y);
      }
      if(brightness == 77){
        text(',',x,y);
      }
      if(brightness == 78){
        text('.',x,y);
      }
        if(brightness == 79){
        text('?',x,y);
      }
      if(brightness == 80){
        text('/',x,y);
      }
      if(brightness == 81){
        text('aa',x,y);
      }
      if(brightness == 82){
        text('bb',x,y);
      }
      if(brightness == 83){
        text('cc',x,y);
      }
      if(brightness == 84){
        text('dd',x,y);
      }
      if(brightness == 85){
        text('ee',x,y);
      }
      if(brightness == 86){
        text('ff',x,y);
      }
      if(brightness == 87){
        text('gg',x,y);
      }
      if(brightness == 88){
        text('hh',x,y);
      }
      if(brightness == 89){
        text('ii',x,y);
      }
      if(brightness == 90){
        text('jj',x,y);
      }
      if(brightness == 91){
        text('kk',x,y);
      }
      if(brightness == 92){
        text('ll',x,y);
      }
      if(brightness == 93){
        text('mm',x,y);
      }
      if(brightness == 94){
        text('nn',x,y);
      }
      if(brightness == 95){
        text('oo',x,y);
      }
      if(brightness == 96){
        text('pp',x,y);
      }
      if(brightness == 97){
        text('qq',x,y);
      }
      if(brightness == 98){
        text('rr',x,y);
      }
      if(brightness == 99){
        text('ss',x,y);
      }
      if(brightness == 100){
        text('tt',x,y);
      }
      if(brightness == 101){
        text('uu',x,y);
      }
      if(brightness == 102){
        text('vv',x,y);
      }
      if(brightness == 103){
        text('ww',x,y);
      }
      if(brightness == 104){
        text('xx',x,y);
      }
        if(brightness == 105){
        text('yy',x,y);
      }
      if(brightness == 106){
        text('zz',x,y);
      }
      if(brightness == 107){
        text('AA',x,y);
      }
      if(brightness == 108){
        text('BB',x,y);
      }
      if(brightness == 109){
        text('CC',x,y);
      }
      if(brightness == 110){
        text('DD',x,y);
      }
      if(brightness == 111){
        text('EE',x,y);
      }
      if(brightness == 112){
        text('FF',x,y);
      }
      if(brightness == 113){
        text('GG',x,y);
      }
      if(brightness == 114){
        text('HH',x,y);
      }
      if(brightness == 115){
        text('II',x,y);
      }
      if(brightness == 116){
        text('JJ',x,y);
      }
      if(brightness == 117){
        text('KK',x,y);
      }
      if(brightness == 118){
        text('LL',x,y);
      }
      if(brightness == 119){
        text('MM',x,y);
      }
      if(brightness == 120){
        text('NN',x,y);
      }
      if(brightness == 121){
        text('OO',x,y);
      }
      if(brightness == 122){
        text('PP',x,y);
      }
      if(brightness == 123){
        text('QQ',x,y);
      }
      if(brightness == 124){
        text('RR',x,y);
      }
      if(brightness == 125){
        text('SS',x,y);
      }
      if(brightness == 126){
        text('TT',x,y);
      }
      if(brightness == 127){
        text('UU',x,y);
      }
      
     map(brightness, 0, 255, stepSize/4, stepSize*2);
      
        
          

      
   
    }
  }
  capture.updatePixels();
  

}