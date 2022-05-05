const humanView = {
    choiceDisplay: document.querySelector('#humanPick img'),
    scoreLabel: document.querySelector('#humanScore'),
    inputs: {
        rockImage: document.querySelector('#rock'),
        paperImage: document.querySelector('#paper'),
        scissorsImage: document.querySelector('#scissors')
    }
};

const computerView = {
    choiceDisplay: document.querySelector('#computerPick img'),
    scoreLabel: document.querySelector('#computerScore')
};

const resetButton = document.querySelector('#reset');
const winningScoreSelection = document.querySelector('#rounds');
const scoresDisplay = document.querySelector('#scoresDisplay');