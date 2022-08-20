class PlayerView {
	constructor(pickDisplayQuery, scoreSpanQuery) {
		this.pickDisplay = document.querySelector(pickDisplayQuery);
		this.scoreSpan = document.querySelector(scoreSpanQuery);
	}

	displayPick(src) {
		this.pickDisplay.src = src;
	}

	displayScore(winnerModel) {
		this.scoreSpan.innerText = winnerModel.score;
	}
}

class HumanView extends PlayerView {
	constructor() {
		super("#humanPick img", "#humanScore");
		this.inputs = {
			rockImage: document.querySelector("#rockInputImage"),
			paperImage: document.querySelector("#paperInputImage"),
			scissorsImage: document.querySelector("#scissorsInputImage"),
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
		this.resetButton = document.querySelector("#resetButton");
		this.winningScoreSelection = document.querySelector("#rounds");
		this.scoresDisplay = document.querySelector("#scoresDisplay");
	}

	displayWinner(winnerModel) {
		const winnerLabel = document.createElement("p");

		winnerLabel.innerText = winnerModel.winnerText;
		winnerLabel.style.color = winnerModel.winnerColor;

		this.scoresDisplay.appendChild(winnerLabel);
	}

	removeWinnerDisplay() {
		if (this.scoresDisplay.children.length === 3) {
			this.scoresDisplay.removeChild(this.scoresDisplay.lastChild);
		}
	}
}
