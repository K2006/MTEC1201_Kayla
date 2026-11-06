// TITLE: THE MISMATCHED ROBOT FACE
// NAME: KAYLA SANTANA
// CONCEPT: A SKETCH I DID DURING CLASS AND IT ENDED UP LOOKING LIKE A ROBOT WITH EVERYTHING BEING MISMATCHED. 
//          I HOPE TO EXPAND ON IT WHERE IT CAN MOVE OR BLINK AND HAVE A BODY.
// INSTRUCTIONS: MOVE MOUSE TO MAKE EYES FOLLOW CURSOR, CLICK CURSOR TO RESET
//               PRESS SPACEBAR TO CHANGE FACE COLOR, PRESS 1 FOR HAPPY, 2 FOR SAD, AND 3 FOR SUPRISED
//___________________________________________________________________________________________________________________
// Declaring my variables eyex and eyey 
let eyeX = 0
let eyeY = 0
let faceColor = 'BLUE'
let expression = 'happy'

function setup() {
  createCanvas(700, 500);
}

// Return back to org position
function mousePressed() {
eyeX = 0 
eyeY = 0
}

function keyPressed() {
  if (keyCode === 32)
    changefaceColor ()
  if (key === '1') 
    expression ='happy'
  else if  (key === '2') 
    expression = 'sad'
  else if (key === '3')
    expression = 'suprised'
}

function changefaceColor() {
  faceColor = random (['GREEN', 'YELLOW', 'PURPLE', 'ORANGE', 'BLUE'])
}

function drawFace () {
  strokeWeight (4)
  fill(faceColor)
   square (205, 200, 140) 

   // lerp makes pupil slowly move
eyeX = lerp(eyeX, mouseX - 250, 0.05)
eyeY = lerp(eyeY, mouseY - 250, 0.05)
//_________________________________________________________________________________________________________________

// FACE 
stroke ('BLACK')

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
  if (expression === 'happy')
    arc (275, 310, 50, 30, 0, PI)
    else if (expression === 'sad')
      arc (275, 330, 50, 30, PI, TWO_PI)
    else circle (275, 320, 25)
}

function draw() {
  background('PINK');
  drawFace()
// // lerp makes pupil slowly move
// eyeX = lerp(eyeX, mouseX - 250, 0.05)
// eyeY = lerp(eyeY, mouseY - 250, 0.05)
// //_________________________________________________________________________________________________________________

// // FACE 
// stroke ('BLACK')
// drawFace ()

// // OUTER EYE
// strokeWeight (2)
//   fill('WHITE')
//     circle (250, 250, 50)
//     square (276, 227, 48)

// // INNER EYE + PUPIL COLOR (EDIT: eyex moving pupil left/right, eyey moving pupil up/down, constrain makes sure it is kept in eye)
//  noStroke();
//   fill('BLACK')
//     circle (250 + constrain(eyeX, -10, 10), 250 + constrain(eyeY, -10, 10), 25)
//     square (288 + constrain(eyeX, -10, 10), 240 + constrain(eyeY, -10, 10), 24)

// // NOSE
//  noStroke();
//   fill("TEAL")
//     ellipse (270, 290, 20, 30)

// // MOUTH
//  noStroke();
//   fill("RED")
//   if (expression === 'happy')
//     arc (275, 310, 50, 30, 0, PI)
//     else if (expression === 'sad')
//       arc (275, 330, 50, 30, PI, TWO_PI)
//     else circle (275, 320, 25)



    
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 4; col++) {
    push ()
    translate(col* 160, row * 150)
    scale (0.8)
    translate (-180, -180)
    drawFace ()
    pop ()
    }
  }

    let x = 20

    while (x < width) {
      noStroke()
      fill ('PURPLE')
      circle (x, 15, 8)
      circle (x, 485, 8)
      x = x + 30
    }
  }
   
//_________________________________________________________________________________________________________________
