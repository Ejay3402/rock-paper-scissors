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
    let randomNum = Math.random();
    
    if (randomNum === 0 || randomNum <= 1/3) {
        result = `Rock`;
    } else if (randomNum > 1/3 || randomNum <= 2/3) {
        result = `Paper`;
    } else if (randomNum > 2/3 || randomNum <= 1) {
        result = `Scissors`;
    }
    return result;
};

const playGame = () => {
    let val = computerMove();
    console.log(val);
    
};
playGame();