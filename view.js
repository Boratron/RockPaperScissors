class PlayerView {
	constructor(choiceDisplayQuery, scoreLabelQuery) {
		this.choiceDisplay = document.querySelector(choiceDisplayQuery);
		this.scoreLabel = document.querySelector(scoreLabelQuery);
	}

	displayPick(src) {
		this.choiceDisplay.src = src;
	}

	displayScore(winnerModel) {
		this.scoreLabel.innerText = winnerModel.score;
	}
}

class HumanView extends PlayerView {
	constructor() {
		super("#humanPick img", "#humanScore");
		this.inputs = {
			rockImage: document.querySelector("#rock"),
			paperImage: document.querySelector("#paper"),
			scissorsImage: document.querySelector("#scissors"),
		};
	}
}

class ComputerView extends PlayerView {
	constructor() {
		super("#computerPick img", "#computerScore");
	}
}

class View {
	constructor() {
		this.resetButton = document.querySelector("#reset");
		this.winningScoreSelection = document.querySelector("#rounds");
		this.scoresDisplay = document.querySelector("#scoresDisplay");
	}
}
