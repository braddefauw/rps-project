let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function computerPlay(){
    let set = ['rock', 'paper', 'scissors'];
    let pick = set[Math.floor(Math.random()*set.length)];
    return pick;
}

let buttons = document.querySelectorAll('.main button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

let newGame = document.querySelector('.score button');
newGame.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    document.getElementById('container').innerHTML = '';
    document.getElementById('result').innerHTML = '';
})

function finalScore(){
    let message = ''
    if(playerScore >= 5){
        message = "You are the winner!";
        gameOver = true;
    }else if(computerScore >=5 ){
        message = "You are the loser.";
        gameOver = true;
    }
    document.getElementById('result').innerHTML = message;
}

function playRound(e){
    if(gameOver){
        return;
    }
    playerSelection = this.id;
    computerSelection = computerPlay();
    let result = '';
    if(playerSelection === computerSelection){
        result = "It's a tie. Play again. Your score: " + playerScore + " Computer Score: " + computerScore;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors' 
                || playerSelection === 'paper' && computerSelection === 'rock'
                || playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        result = "You win! Your score: " + playerScore + " Computer Score: " + computerScore;
    }else{
        computerScore++;
        result = "You lose. Your score: " + playerScore + " Computer Score: " + computerScore;
    }
    document.getElementById('container').innerHTML = result;
    finalScore();
}