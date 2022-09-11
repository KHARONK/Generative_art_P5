
function setup() 
{
  createCanvas(800, 800);
  background(300);
  
}

var topShape;
var downShape;
var noisy;


function draw() 
{  
 drawtopShape();
 drawdownShape();
}

function drawtopShape()
  {
       strokeWeight(2);
       stroke(153, 2, 109);
       noFill();
       
       // right side of shape
        beginShape(LINES);
        vertex(300, 230);
        vertex(300, 140);
        arc(300, 269, 90, 80,PI/2,  3*PI/2); 
        
        // right side of shape
        vertex(330, 230);
        vertex(330, 140);
        arc(330, 269, 90, 80, 3*PI/2, PI/2); 
        endShape();
  }

function drawdownShape()
    {
        strokeWeight(2);
        stroke(249, 4, 132);
        noFill();
        // right side of shape
        beginShape(LINES);
        vertex(300, 230);
        vertex(300, 140);
        translate(0, -110); 
        arc(300, 269, 90, 80, PI/2,  3*PI/2);
        
         //right side of shape
        vertex(330, 230);
        vertex(330, 140);
        arc(330, 269, 90, 80, 3*PI/2, PI/2);
        endShape();
        
    }
