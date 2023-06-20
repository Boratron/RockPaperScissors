class PlayerView {
    constructor(playerChoice, score) {
        this.playerChoice = document.querySelector(playerChoice);
        this.score = document.querySelector(score);
    }
    displayChoice(src) {
        this.playerChoice.src = src;
    }
    displayScore(winnerModel) {
        this.score.innerText = winnerModel.score.toString();
    }
}
export class HumanView extends PlayerView {
    constructor() {
        super("#human-choice img", "#human-score");
        this.choices = {
            rock: document.querySelector("#rock"),
            paper: document.querySelector("#paper"),
            scissors: document.querySelector("#scissors"),
        };
    }
}
export class ComputerView extends PlayerView {
    constructor() {
        super("#computer-choice img", "#computer-score");
    }
}
export class View {
    constructor() {
        this.reset = document.querySelector("#reset");
        this.rounds = document.querySelector("#rounds");
        this.scores = document.querySelector("#scores");
    }
    displayWinner(winnerModel) {
        const winnerLabel = document.createElement("p");
        winnerLabel.innerText = winnerModel.winnerLabel.text;
        winnerLabel.style.color = winnerModel.winnerLabel.color;
        this.scores.appendChild(winnerLabel);
    }
    removeWinnerDisplay() {
        if (this.scores.children.length === 3) {
            this.scores.removeChild(this.scores.lastChild);
        }
    }
}
