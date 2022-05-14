let userScore = 0;
let computerScore = 0;

const user_score = document.getElementById('user-score');
const computer_score = document.getElementById('computer-score');
const score_board = document.querySelector('.score');
const result = document.querySelector('.result');
const user_choices = document.querySelector('.selections');


const rock_select = document.getElementById("rock");
const paper_select = document.getElementById("paper");
const scissor_select = document.getElementById("scissor");



// Computer choices//
function computerplay(){
    const choices = ["rock","paper","scissor"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}



// Actual Game //
function game(playerSelection){
    const computerSelection = computerplay();   
    if (playerSelection === computerSelection){
        draw(playerSelection,computerSelection);
    }
        
    else if(playerSelection === "rock" && computerSelection === "paper"){
        lose(playerSelection,computerSelection);
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        won(playerSelection,computerSelection);
    }

    else if(playerSelection === "paper" && computerSelection === "scissor"){
        lose(playerSelection,computerSelection);
    }

    else if(playerSelection === "scissor" && computerSelection === "paper"){
        won(playerSelection,computerSelection);
    }

    else if(playerSelection === "rock" && computerSelection === "scissor"){
        won(playerSelection,computerSelection);
    }

    else if(playerSelection === "scissor" && computerSelection === "rock"){
        lose(playerSelection,computerSelection);
    }               
         
   
};
game();



// User selection buttons//
function main(){
    rock_select.addEventListener('click', () => {
        game("rock");
    });

    paper_select.addEventListener('click', () => {
        game("paper");
    });

    scissor_select.addEventListener('click', () => {
        game("scissor");
    });
};
main();



// Result //
function won(playerSelection,computerSelection){
    userScore++;
    user_score.innerHTML = userScore;
    result.innerHTML = `${convert(playerSelection)} beats ${convert(computerSelection)} , YOU WIN ! 😄`
    
};


function lose(playerSelection,computerSelection){
    computerScore++;
    computer_score.innerHTML = computerScore;
    result.innerHTML = `${convert(computerSelection)} beats ${convert(playerSelection)}, YOU LOST ! 😏`;
};

function draw(){
    result.innerHTML = "It's a draw ! 😑"

}




// Word conversion//
function convert(word){
    if( word ==="rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissor";
}


    
    
























