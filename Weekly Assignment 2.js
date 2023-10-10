userScore=document.getElementById('player-score')
computerScore=document.getElementById('computer-score')
tieResult=document.getElementById('tie')
printresult = document.getElementById('print-result')
result = document.getElementById('result')

var tieResult = 0;
var userScore = 0;
var computerScore = 0;
var computerChoice = "";
var uChoice = "";

function playGame(userChoice){
    var signs = ["rock","paper","scissors"];  
    computerChoice = signs[Math.floor(Math.random()*3)];
    uChoice = userChoice
    
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice);

    if(userChoice === "rock" && computerChoice === "scissors" || 
       userChoice === "paper" && computerChoice === "rock" || 
       userChoice === "scissors" && computerChoice === "paper"){
        userScore += 5;
        console.log("User wins this round!");
        keepScore()
    } 
    else if(userChoice != computerChoice){
        computerScore += 5;
        console.log("Computer wins this round!");
        keepScore()
    }
    else if(userChoice === computerChoice){
        tieResult += 1;
        console.log("It's a tie!");
        keepScore()
    }
}
function keepScore(){
    document.getElementById('p1').innerHTML = "Your score is " + userScore 
    document.getElementById('p2').innerHTML = "Computer score is " + computerScore
    document.getElementById('p3').innerHTML = "Number of ties " + tieResult
    document.getElementById('p4').innerHTML = "Computer Choice " + computerChoice
    document.getElementById('p5').innerHTML = "User Choice " + uChoice
    
}