var PASS = 1;

var events = [
  {p1:1,p2:2,t:'p'},
  {p1:3,p2:4,t:'p'},
  {p1:3,p2:5,t:'p'},
  {p1:6,p2:3,t:'p'},
  
]
  
var fourFourTwo = [
  [50,50],[50,100],[50,150],[50,200],
  [100,50],[100,100],[100,150],[100,200],
  [150,75],[150,150]
];
// Simple way to attach js code to the canvas is by using a function
function sketchProc(processing) {
  processing.setup = function() {
    with(processing) {
      frameRate(24)
      noFill()
    }
  };
  processing.draw = function() {
    with(processing) {
      if(frameCount - 1 < events.length) {
        var event = events[frameCount-1],
            p1 = fourFourTwo[event.p1],
            p2 = fourFourTwo[event.p2],
            t  = event.t;
        switch(t) {
          case t:
            var p1x = p1[0],
                p1y = p1[1],
                p2x = p2[0],
                p2y = p2[1];
            console.log(p1,p2,p1x,p1y,50,50,p2x,p2y)
            strokeWeight(2)
            stroke(0xFFCCFFdd)
            bezier(p1x,p1y,50,50,60,60,p2x,p2y);
          break;
        }
      }
      
      stroke(0x000)
      strokeWeight(2)
      fourFourTwo.forEach(function(points) {
        var x = points[0],
            y = points[1],
            dX = Math.abs(x,mouseX),
            dY = Math.abs(y,mouseY),
            d  = Math.sqrt(Math.pow(dX,2) + Math.pow(dY,2)) / 10;
        ellipse(x,y,10,10);
      });
    }
  };
  
}
var p;
window.onload = function() {
  var canvas = document.getElementById("canvas");
  // attaching the sketchProc function to the canvas
  p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it
}