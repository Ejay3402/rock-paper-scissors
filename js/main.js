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
};

const playGame = () => {
    let gameText = computerMove();
    console.log(gameText);
    
};
console.log(playGame());
playGame();
console.log(computerMove());