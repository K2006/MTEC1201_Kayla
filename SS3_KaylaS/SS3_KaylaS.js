// TITLE: THE MISMATCHED ROBOT FACE
// NAME: KAYLA SANTANA
// CONCEPT: A SKETCH I DID DURING CLASS AND IT ENDED UP LOOKING LIKE A ROBOT WITH EVERYTHING BEING MISMATCHED. 
//          I HOPE TO EXPAND ON IT WHERE IT CAN MOVE OR BLINK AND HAVE A BODY.
// INSTRUCTIONS: MOVE MOUSE TO MAKE EYES FOLLOW CURSOR, CLICK CURSOR TO RESET
//___________________________________________________________________________________________________________________
// Declaring my variables eyex and eyey 
let eyeX = 0
let eyeY = 0
let faceColor = 'BLUE'

function setup() {
  createCanvas(500, 500);
}

// Return back to org position
function mousePressed() {
eyeX = -0 
eyeY = 0
}

function keyPressed() {
  if (keyCode === 32)
    changefaceColor ()
}

function changefaceColor() {
  faceColor = random (['GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'BLUE'])
}

function drawFace () {
  strokeWeight (4)
  fill(faceColor)
   square (205, 200, 140) 
}

function draw() {
  background('PINK');

// lerp makes pupil slowly move
eyeX = lerp(eyeX, mouseX - 250, 0.05)
eyeY = lerp(eyeY, mouseY - 250, 0.05)
//_________________________________________________________________________________________________________________

// FACE
stroke ('BLACK')
drawFace ()

// OUTER EYE
strokeWeight (2)
  fill('WHITE')
    circle (250, 250, 50)
    square (276, 227, 48)

// INNER EYE + PUPIL COLOR (EDIT: eyex moving pupil left/right, eyey moving pupil up/down, constrain makes sure it is kept in eye)
 noStroke();
  fill('BLACK')
    circle (250 + constrain(eyeX, -10, 10), 250 + constrain(eyeY, -10, 10), 25)
    square (288 + constrain(eyeX, -10, 10), 240 + constrain(eyeY, -10, 10), 24)

// NOSE
 noStroke();
  fill("TEAL")
    ellipse (270, 290, 20, 30)

// MOUTH
 noStroke();
  fill("RED")
    triangle (245, 310, 300, 310, 275, 330)
//_________________________________________________________________________________________________________________
}
