class PlayerView {
    constructor(choiceDisplayQuery, scoreLabelQuery) {
        this.choiceDisplay = document.querySelector(choiceDisplayQuery);
        this.scoreLabel = document.querySelector(scoreLabelQuery);
    }
}

class HumanView extends PlayerView {
    constructor(choiceDisplayQuery, scoreLabelQuery) {
        super(choiceDisplayQuery, scoreLabelQuery);
        this.inputs = {
            rockImage: document.querySelector('#rock'),
            paperImage: document.querySelector('#paper'),
            scissorsImage: document.querySelector('#scissors')
        }
    }
}

const computerView = new PlayerView('#computerPick img', '#computerScore');
const humanView = new HumanView('#humanPick img', '#humanScore');
const resetButton = document.querySelector('#reset');
const winningScoreSelection = document.querySelector('#rounds');
const scoresDisplay = document.querySelector('#scoresDisplay');