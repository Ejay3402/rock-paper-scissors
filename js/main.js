// variabls

//rock paper scissors btn
const roct_btn = document.querySelector(`#rock-btn`);
const paper_btn = document.querySelector(`#paper-btn`);
const scissors_btn = document.querySelector(`#scissors-btn`);

//outputs

const score_output = document.querySelector(`#score-output`);
const wins_output = document.querySelector(`#wins-output`);
const loses_output = document.querySelector(`#loses-output`);
const ties_output = document.querySelector(`#ties-output`);

//moves

const computer_move = document.querySelector(`#computer-move`);
const player_move = document.querySelector(`#player-move`);

//reset button

const reset_btn = document.querySelector(`#reset-game`);


//scores 

let gameScore = {
    wins : 0,
    loses : 0,
    ties : 0,
}

//computer random move 

const computerMove = () => {
    let min = 1;
    let max = 3;
    let randomNum = Math.floor(Math.random() * max) + min;
    let gameText;
    if (randomNum === 1) {
        gameText = `Rock`;
    } else if (randomNum === 2) {
        gameText = `Paper`;
    } else if (randomNum === 3) {
        gameText = `Scissors`;
    }
    return gameText;    
};

//playgame

const playGame = (game) => {
    let computerMovePlay = computerMove();
    
    //getting the moves

    let resultS = ``;

    if (game === `Rock`) {

         if (computerMovePlay === `Rock`) {
            resultS = `Tie`;
            score_output.style.color = 'blue' ;
        } else if (computerMovePlay === `Paper`) {
            resultS = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)' ;
        } else if (computerMovePlay === `Scissors`) {
            resultS = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        }

    } else if (game === `Paper`) {
        
        if (computerMovePlay === `Rock`) {
            resultS = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        } else if (computerMovePlay === `Paper`) {
            resultS = `Tie`;
            score_output.style.color = 'blue' ;
        } else if (computerMovePlay === `Scissors`) {
            resultS = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)';
        }

    } else if (game === `Scissors`) {
        
        if (computerMovePlay === `Rock`) {
            resultS = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)';
        } else if (computerMovePlay === `Paper`) {
            resultS = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        } else if (computerMovePlay === `Scissors`) {
            resultS = `Tie`;
            score_output.style.color = 'blue' ;
        }

    }

    //updating the moves
    player_move.setAttribute("src", `images/${game}.jpg`);
    computer_move.setAttribute("src", `images/${computerMovePlay}.jpg`);

    
//updating the rate values
score_output.textContent = resultS;

//updating the scores
if (resultS === `You Win`) {
    gameScore.wins++;
} else if (resultS === `You Lose`) {
    gameScore.loses++;
} else if (resultS === `Tie`) {
    gameScore.ties++;
}

//updating the game scores on the page
wins_output.textContent = gameScore.wins;
loses_output.textContent = gameScore.loses;
ties_output.textContent = gameScore.ties;
    
};


roct_btn.addEventListener("click", () => playGame(`Rock`));
paper_btn.addEventListener("click", () => playGame(`Paper`));
scissors_btn.addEventListener("click", () => playGame(`Scissors`));