// TITLE: THE MISMATCHED ROBOT FACE
// NAME: KAYLA SANTANA
// CONCEPT: A SKETCH I DID DURING CLASS AND IT ENDED UP LOOKING LIKE A ROBOT WITH EVERYTHING BEING MISMATCHED. 
//          I HOPE TO EXPAND ON IT WHERE IT CAN MOVE OR BLINK AND HAVE A BODY.
//___________________________________________________________________________________________________________________

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('PINK');

// FACE
stroke ('BLACK')
strokeWeight (4)
  fill("BLUE")
   square (205, 200, 140) 

// OUTER EYE
strokeWeight (2)
  fill('WHITE')
    circle (250, 250, 50)
    square (276, 227, 48)

// INNER EYE + PUPIL COLOR
 noStroke();
  fill("BLACK")
    circle (250, 250, 25) 
    square (288, 240, 24)

// NOSE
 noStroke();
  fill("TEAL")
    ellipse (270, 290, 20, 30)

// MOUTH
 noStroke();
  fill("RED")
    triangle (245, 310, 300, 310, 275, 330)

}
