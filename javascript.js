
//Defining randomize computer options 
function computerplay () { 
let computerplay = ['rock', 'paper', 'scissor']; 
com2 = computerplay[Math.floor(Math.random() * computerplay.length)];
return(com2); 
}
// Player Answer
function playerplay() {
    let question = prompt("Rock, Paper, Scissor?", "").toLowerCase(); 
    return(question); 
}
  

// Playing 1 round of game
function playaround (playerselection,computerselection){
   
    
    const compwin = ('Computer Wins!')
    const playwin = ('Player Wins!')
    const tie = ('Tie')
    

    // Gives Player's winning conditions and possible outcomes
    if ((computerselection === 'scissor' && playerselection === 'rock') ||
    (computerselection === 'paper' && playerselection === 'scissor') ||
    (computerselection === 'rock' && playerselection === 'paper')) 
    {
        playerscore += 1;
     return playwin;
     }

    else if (computerselection === playerselection)
    {
    return(tie);
    }

    else 
    {
        (computerscore +=1);
    return compwin;
     }
    }
    
//Global Variables for playerscore and computerscore
let playerscore = 0;
let computerscore = 0;


//Play up to 5 
function game(){

for (var i = 0; i<5; i++){
    
   var computerselection = computerplay();
   var playerselection = playerplay();
    
    playaround();
    console.log((computerselection) + (playerselection));
    console.log(playaround(playerselection,computerselection));
    console.log('Player Wins : ' + playerscore + ' Computer Wins : ' + computerscore); 
}
}
// Helps playerscore and computerscore start at 0 
let displayscore = ('Player Wins : ' + playerscore + ' Computer Wins : ' + computerscore); 
console.log(displayscore);
   
  


