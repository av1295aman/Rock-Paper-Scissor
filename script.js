function computerPlay(){
    const choices = ["Rock","Paper","Scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(playRound){
    for(i=0; i < 5; i++){
        function playRound(playerSelection,computerSelection){
            if (playerSelection === computerSelection){
                console.log("It's a draw");
            }
        
            else if(playerSelection === "Rock" && computerSelection === "Paper"){
                console.log("You Lost! Paper beats Rock.");
            }

            else if(playerSelection === "Paper" && computerSelection === "Rock"){
                console.log("You Won! Paper beats Rock.");
            }

            else if(playerSelection === "Paper" && computerSelection === "Scissor"){
                console.log("You Lost! Scissor beats Paper.");
            }

            else if(playerSelection === "Scissor" && computerSelection === "Paper"){
                console.log("You Won! Scissor beats Paper.");
            }

            else if(playerSelection === "Rock" && computerSelection === "Scissor"){
                console.log("You Won! Rock beats Scissor.");
            }

            else if(playerSelection === "Scissor" && computerSelection === "Rock"){
                console.log("You Lost! Rock beast Scissor.");
            }
        }       
        
        
        const computerSelection = computerPlay();
        const playerSelection = prompt("Rock, Paper, Scissor : ");
        console.log("You choose "+ playerSelection);
        console.log("Computer choose " + computerSelection);
        
        
        playRound(playerSelection,computerSelection);
    }
}
game();

