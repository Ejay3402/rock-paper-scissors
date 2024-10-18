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
    
    if (game === `Rock`) {

         if (computerMovePlay === `Rock`) {
            score_output.textContent = `Tie`;
            score_output.style.color = 'blue' ;
        } else if (computerMovePlay === `Paper`) {
            score_output.textContent = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)' ;
        } else if (computerMovePlay === `Scissors`) {
            score_output.textContent = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        }

    } else if (game === `Paper`) {
        
        if (computerMovePlay === `Rock`) {
            score_output.textContent = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        } else if (computerMovePlay === `Paper`) {
            score_output.textContent = `Tie`;
            score_output.style.color = 'blue' ;
        } else if (computerMovePlay === `Scissors`) {
            score_output.textContent = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)';
        }

    } else if (game === `Scissors`) {
        
        if (computerMovePlay === `Rock`) {
            score_output.textContent = `You Lose`;
            score_output.style.color = 'rgb(240, 10, 10)';
        } else if (computerMovePlay === `Paper`) {
            score_output.textContent = `You Win`;
            score_output.style.color = 'rgb(10, 207, 10)' ;
        } else if (computerMovePlay === `Scissors`) {
            score_output.textContent = `Tie`;
            score_output.style.color = 'blue' ;
        }

    }

    player_move.setAttribute("src", `images/${game}.jpg`);
    computer_move.setAttribute("src", `images/${computerMovePlay}.jpg`);
    
};


roct_btn.addEventListener("click", () => playGame(`Rock`));
paper_btn.addEventListener("click", () => playGame(`Paper`));
scissors_btn.addEventListener("click", () => playGame(`Scissors`));