var canva, gameState, contestantCount, database; 
var quiz, question, contestant;

gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  q = new Question();
}


function draw(){
  background("pink");
q.display();
  
}
